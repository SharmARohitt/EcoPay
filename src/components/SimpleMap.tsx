
import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SimpleMapProps {
  latitude?: number;
  longitude?: number;
  onLocationSelect?: (lat: number, lng: number) => void;
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
  
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  
  // Initialize map when the token is provided
  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;
    
    try {
      mapboxgl.accessToken = mapboxToken;
      
      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 12
      });
      
      // Add navigation controls if interactive
      if (interactive) {
        newMap.addControl(new mapboxgl.NavigationControl(), "top-right");
      }
      
      // Add a marker at the initial location
      const newMarker = new mapboxgl.Marker({ draggable: interactive })
        .setLngLat([longitude, latitude])
        .addTo(newMap);
      
      // Handle marker drag end if the map is interactive
      if (interactive && onLocationSelect) {
        newMarker.on('dragend', () => {
          const { lng, lat } = newMarker.getLngLat();
          onLocationSelect(lat, lng);
        });
      }
      
      // Save references
      map.current = newMap;
      marker.current = newMarker;
      
      // Mark as loaded
      newMap.on('load', () => {
        setMapLoaded(true);
        setShowTokenInput(false);
      });
      
      return () => {
        newMap.remove();
      };
    } catch (error) {
      console.error("Error initializing map:", error);
      toast.error("Failed to initialize map. Please check your Mapbox token.");
      setShowTokenInput(true);
    }
  }, [mapboxToken, latitude, longitude, interactive, onLocationSelect]);
  
  // Update marker position if lat/lng props change
  useEffect(() => {
    if (map.current && marker.current && mapLoaded) {
      marker.current.setLngLat([longitude, latitude]);
      map.current.flyTo({
        center: [longitude, latitude],
        zoom: 14,
        essential: true
      });
    }
  }, [latitude, longitude, mapLoaded]);
  
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById("mapbox-token") as HTMLInputElement;
    if (input.value.trim()) {
      setMapboxToken(input.value.trim());
    } else {
      toast.error("Please enter a valid Mapbox token");
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
        <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-md" />
      )}
    </div>
  );
};

export default SimpleMap;
