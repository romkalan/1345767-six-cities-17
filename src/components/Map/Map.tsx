import { useRef, useEffect } from 'react';
import leaflet, { layerGroup, Marker } from 'leaflet';
import { TOffer } from '../../types/TOffer.ts';
import useMap from '../../hooks/useMap.ts';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts/const.ts';
import { TOfferById } from '../../types/TOfferById.ts';

type MapProps = {
  activeOffer: TOffer | TOfferById;
  offers: TOffer[];
  isNearby?: boolean;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

function Map({ activeOffer, offers, isNearby }: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const { city } = activeOffer;
  const map: leaflet.Map | null = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.map(({ location, id }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });
        marker
          .setIcon(
            activeOffer.id === id ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      if (isNearby) {
        const marker = new Marker({
          lat: activeOffer.location.latitude,
          lng: activeOffer.location.longitude,
        });
        marker.setIcon(currentCustomIcon).addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer, isNearby]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
