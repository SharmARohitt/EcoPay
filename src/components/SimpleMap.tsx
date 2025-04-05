
import React, { useState, useEffect, useRef } from "react";
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import { fromLonLat, toLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon } from 'ol/style';
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { toast } from "sonner";

interface SimpleMapProps {
  latitude?: number;
  longitude?: number;
  onLocationSelect?: (lat: number, lng: number, address?: string) => void;
  interactive?: boolean;
  height?: string;
}

const SimpleMap = ({ 
  latitude = 28.6139, // Default to Delhi, India
  longitude = 77.2090,
  onLocationSelect,
  interactive = true,
  height = "400px"
}: SimpleMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const markerFeature = useRef<Feature | null>(null);
  const markerLayer = useRef<VectorLayer<VectorSource> | null>(null);
  
  const [isZooming, setIsZooming] = useState<boolean>(true);
  const [currentLocation, setCurrentLocation] = useState<{lat: number, lng: number} | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  
  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    try {
      // Create marker feature
      markerFeature.current = new Feature({
        geometry: new Point(fromLonLat([longitude, latitude]))
      });
      
      // Set marker style with a green pin
      markerFeature.current.setStyle(
        new Style({
          image: new Icon({
            src: 'https://cdn.mapmarker.io/api/v1/pin?size=50&background=%234ade80&icon=fa-map-marker&color=%23FFFFFF',
            scale: 0.7,
            anchor: [0.5, 1]
          })
        })
      );
      
      // Create vector layer for the marker
      markerLayer.current = new VectorLayer({
        source: new VectorSource({
          features: [markerFeature.current]
        })
      });
      
      // Create map with ArcGIS layer from provided link
      const newMap = new Map({
        target: mapContainer.current,
        layers: [
          // Base OSM layer as fallback
          new TileLayer({
            source: new OSM(),
            visible: false
          }),
          // ArcGIS layer from provided link
          new TileLayer({
            source: new XYZ({
              url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
              maxZoom: 19
            })
          }),
          markerLayer.current
        ],
        view: new View({
          center: fromLonLat([0, 20]), // Start with world view
          zoom: 2,
          maxZoom: 19
        })
      });
      
      map.current = newMap;
      
      // Add click handler if interactive
      if (interactive) {
        newMap.on('click', function(evt) {
          const coordinate = evt.coordinate;
          const lonLat = toLonLat(coordinate);
          
          if (markerFeature.current) {
            markerFeature.current.getGeometry()?.setCoordinates(coordinate);
          }
          
          if (onLocationSelect) {
            const lng = lonLat[0];
            const lat = lonLat[1];
            
            // Try to get address from coordinates using a free reverse geocoding service
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
              .then(response => response.json())
              .then(data => {
                const address = data.display_name || '';
                onLocationSelect(lat, lng, address);
              })
              .catch(err => {
                console.error("Reverse geocoding error:", err);
                onLocationSelect(lat, lng);
              });
          }
        });
      }
      
      // Start animation to zoom into India
      if (isZooming) {
        setTimeout(() => {
          newMap.getView().animate({
            center: fromLonLat([80.7, 22.5]), // Center of India
            zoom: 4,
            duration: 2000
          });
          
          setTimeout(() => {
            newMap.getView().animate({
              center: fromLonLat([longitude, latitude]), // Delhi
              zoom: 10,
              duration: 2000
            });
            setIsZooming(false);
          }, 4000);
        }, 1500);
      }
      
      return () => {
        if (map.current) {
          map.current.setTarget(undefined);
          map.current = null;
        }
      };
    } catch (error) {
      console.error("Error initializing map:", error);
      toast.error("Failed to initialize map.");
    }
  }, [latitude, longitude, interactive, onLocationSelect, isZooming]);
  
  // Update marker position if lat/lng props change
  useEffect(() => {
    if (map.current && markerFeature.current && !isZooming) {
      const newPosition = fromLonLat([longitude, latitude]);
      markerFeature.current.getGeometry()?.setCoordinates(newPosition);
      
      map.current.getView().animate({
        center: newPosition,
        zoom: 14,
        duration: 1000
      });
    }
  }, [latitude, longitude, isZooming]);
  
  const handleGetCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          
          setCurrentLocation({lat, lng});
          
          if (map.current && markerFeature.current) {
            const newPosition = fromLonLat([lng, lat]);
            markerFeature.current.getGeometry()?.setCoordinates(newPosition);
            
            map.current.getView().animate({
              center: newPosition,
              zoom: 15,
              duration: 1000
            });
          }
          
          if (onLocationSelect) {
            onLocationSelect(lat, lng);
          }
          
          toast.success("Location found successfully!");
        },
        (error) => {
          console.error("Geolocation error:", error);
          toast.error("Could not get your location. Please check permissions.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser");
    }
  };
  
  const handleSearchAddress = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchInput.trim()) {
      toast.error("Please enter a location to search");
      return;
    }
    
    // Use OpenStreetMap Nominatim for geocoding
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchInput)}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const result = data[0];
          const lat = parseFloat(result.lat);
          const lng = parseFloat(result.lon);
          
          if (map.current && markerFeature.current) {
            const newPosition = fromLonLat([lng, lat]);
            markerFeature.current.getGeometry()?.setCoordinates(newPosition);
            
            map.current.getView().animate({
              center: newPosition,
              zoom: 15,
              duration: 1000
            });
          }
          
          if (onLocationSelect) {
            onLocationSelect(lat, lng, result.display_name);
          }
          
          toast.success("Location found!");
        } else {
          toast.error("Location not found. Please try a different search term.");
        }
      })
      .catch(error => {
        console.error("Error searching for location:", error);
        toast.error("Error searching for location. Please try again.");
      });
  };
  
  return (
    <div className="relative w-full" style={{ height }}>
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-md" />
      
      {/* Search address form */}
      <div className="absolute top-4 left-4 z-10 bg-white rounded-md shadow-md p-2 w-64">
        <form onSubmit={handleSearchAddress} className="flex">
          <input
            type="text"
            placeholder="Search for a location"
            className="flex-1 px-2 py-1 text-sm border rounded-l-md focus:outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button 
            type="submit" 
            className="bg-eco-green hover:bg-eco-teal rounded-l-none rounded-r-md py-1 h-full text-xs"
            size="sm"
          >
            <MapPin className="h-3 w-3 mr-1" />
            Find
          </Button>
        </form>
      </div>
      
      {/* Animated indicator for map loading */}
      {isZooming && (
        <div className="absolute top-4 right-4 z-10 bg-white py-1 px-3 rounded-full shadow-md text-xs flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
          <span>Dynamic map animation...</span>
        </div>
      )}
      
      {/* Floating control to get current location */}
      {!currentLocation && !isZooming && (
        <div className="absolute bottom-4 left-4 z-10">
          <Button 
            onClick={handleGetCurrentLocation}
            className="bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            size="sm"
          >
            <Navigation className="h-4 w-4 mr-2" />
            Get My Location
          </Button>
        </div>
      )}
      
      {/* Location status indicator */}
      {currentLocation && !isZooming && (
        <div className="absolute bottom-4 left-4 z-10 bg-white py-1 px-3 rounded-full shadow-md text-xs flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span>Live location active</span>
        </div>
      )}
      
      {/* ArcGIS attribution */}
      <div className="absolute bottom-1 right-1 z-10 bg-white/80 text-xs px-1 rounded text-gray-600">
        Map: ArcGIS World Imagery
      </div>
    </div>
  );
};

export default SimpleMap;
