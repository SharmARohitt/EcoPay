
import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
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
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const geolocateControl = useRef<mapboxgl.GeolocateControl | null>(null);
  
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isZooming, setIsZooming] = useState<boolean>(true);
  
  // Initialize map when the token is provided
  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;
    
    try {
      mapboxgl.accessToken = mapboxToken;
      
      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [0, 20], // Start with world view
        zoom: 1.5
      });
      
      // Add navigation controls if interactive
      if (interactive) {
        newMap.addControl(new mapboxgl.NavigationControl(), "top-right");
        
        // Add geolocate control to get user's location
        const geolocate = new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        });
        
        newMap.addControl(geolocate, 'top-right');
        geolocateControl.current = geolocate;
        
        // Listen for geolocate events
        geolocate.on('geolocate', (e: any) => {
          const lat = e.coords.latitude;
          const lng = e.coords.longitude;
          setCurrentLocation({lat, lng});
          
          if (marker.current) {
            marker.current.setLngLat([lng, lat]);
          }
          
          if (onLocationSelect) {
            // Try to get address from coordinates using reverse geocoding
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxToken}`)
              .then(response => response.json())
              .then(data => {
                const address = data.features[0]?.place_name || '';
                onLocationSelect(lat, lng, address);
              })
              .catch(err => {
                console.error("Reverse geocoding error:", err);
                onLocationSelect(lat, lng);
              });
          }
        });
      }
      
      // Add a marker at the initial location
      const newMarker = new mapboxgl.Marker({ 
        draggable: interactive,
        color: "#4ade80" // Green color
      })
        .setLngLat([longitude, latitude])
        .addTo(newMap);
      
      // Handle marker drag end if the map is interactive
      if (interactive && onLocationSelect) {
        newMarker.on('dragend', () => {
          const { lng, lat } = newMarker.getLngLat();
          
          // Try to get address from coordinates using reverse geocoding
          fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxToken}`)
            .then(response => response.json())
            .then(data => {
              const address = data.features[0]?.place_name || '';
              onLocationSelect(lat, lng, address);
            })
            .catch(err => {
              console.error("Reverse geocoding error:", err);
              onLocationSelect(lat, lng);
            });
        });
      }
      
      // Save references
      map.current = newMap;
      marker.current = newMarker;
      
      // Mark as loaded
      newMap.on('load', () => {
        setMapLoaded(true);
        setShowTokenInput(false);
        
        // Add 3D terrain if available
        newMap.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
        });
        
        newMap.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
        
        // Add sky layer for more realistic view
        newMap.addLayer({
          'id': 'sky',
          'type': 'sky',
          'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
          }
        });

        // Start animation to zoom into India
        if (isZooming) {
          setTimeout(() => {
            newMap.flyTo({
              center: [80.7, 22.5], // Center of India
              zoom: 4,
              speed: 0.5,
              curve: 1,
              essential: true
            });
            
            setTimeout(() => {
              newMap.flyTo({
                center: [longitude, latitude], // Delhi
                zoom: 10,
                speed: 0.3,
                essential: true
              });
              setIsZooming(false);
            }, 4000);
          }, 1500);
        }
      });
      
      return () => {
        newMap.remove();
      };
    } catch (error) {
      console.error("Error initializing map:", error);
      toast.error("Failed to initialize map. Please check your Mapbox token.");
      setShowTokenInput(true);
    }
  }, [mapboxToken, latitude, longitude, interactive, onLocationSelect, isZooming]);
  
  // Update marker position if lat/lng props change
  useEffect(() => {
    if (map.current && marker.current && mapLoaded && !isZooming) {
      marker.current.setLngLat([longitude, latitude]);
      map.current.flyTo({
        center: [longitude, latitude],
        zoom: 14,
        essential: true
      });
    }
  }, [latitude, longitude, mapLoaded, isZooming]);
  
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById("mapbox-token") as HTMLInputElement;
    if (input.value.trim()) {
      setMapboxToken(input.value.trim());
    } else {
      toast.error("Please enter a valid Mapbox token");
    }
  };
  
  const handleGetCurrentLocation = () => {
    if (geolocateControl.current) {
      geolocateControl.current.trigger();
    } else {
      // Fallback to browser geolocation API
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            setCurrentLocation({lat, lng});
            
            if (map.current && marker.current) {
              marker.current.setLngLat([lng, lat]);
              map.current.flyTo({
                center: [lng, lat],
                zoom: 15
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
    }
  };
  
  return (
    <div className="relative w-full" style={{ height }}>
      {showTokenInput ? (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-6 rounded-lg">
          <div className="text-center mb-6">
            <div className="text-3xl mb-2">🗺️</div>
            <h3 className="text-lg font-semibold mb-2">Mapbox API Token Required</h3>
            <p className="text-gray-600 max-w-md">
              To display the map, please enter your Mapbox public token. 
              You can find this in your Mapbox account dashboard.
            </p>
          </div>
          <form onSubmit={handleTokenSubmit} className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                id="mapbox-token"
                type="text"
                placeholder="Enter your Mapbox public token"
                className="flex-1 px-4 py-2 border rounded-md focus:ring-eco-green focus:border-eco-green"
              />
              <Button type="submit" className="bg-eco-green hover:bg-eco-teal whitespace-nowrap">
                Load Map
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Get your token at <a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener noreferrer" className="text-eco-green hover:underline">mapbox.com</a>
            </p>
          </form>
        </div>
      ) : (
        <>
          <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-md" />
          
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
        </>
      )}
    </div>
  );
};

export default SimpleMap;
