import { useEffect, useRef, useState } from 'react';
import { TLocation } from '../../../types';
import leaflet, { Map } from 'leaflet';
import { TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL } from '../const';

interface UseMapProps {
    location: TLocation;
    mapRef: React.RefObject<HTMLDivElement>
}

export const useMap = ({location, mapRef}: UseMapProps) => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderRef.current) {
      const mapInstance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer(TILE_LAYER_URL, {
          attribution: TILE_LAYER_ATTRIBUTION,
        })
        .addTo(mapInstance);

      setMap(mapInstance);
      isRenderRef.current = true;
    }
  }, [mapRef, location]);

  return map;
};
