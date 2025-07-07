import { useEffect, useRef } from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import { TCity, TOffer } from '../../types';
import { useMap } from './hooks/use-map';
import { activeIcon, defaultIcon } from './const';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  city: TCity;
  offers: TOffer[];
  activeOfferId: string | null;
}

const Map = ({ activeOfferId, city, offers }: MapProps) => {
  const mapRef = useRef(null);
  const map = useMap({ location: city.location, mapRef });
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon: offer.id === activeOfferId ? activeIcon : defaultIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [activeOfferId, map, offers]);

  return <section className='cities__map map' ref={mapRef} />;
};

export default Map;
