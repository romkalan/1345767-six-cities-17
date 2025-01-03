import { useRef, useEffect } from 'react';
import leaflet, { layerGroup, Marker } from 'leaflet';
import { TOffer } from '../../types/TOffer.ts';
import useMap from '../../hooks/useMap.ts';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts/const.ts';
import { TOfferById } from '../../types/TOfferById.ts';

type TMapProps = {
  offers: TOffer[];
  activeOffer?: TOffer | TOfferById;
  isNearby?: boolean;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

function Map({ activeOffer, offers, isNearby }: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = activeOffer?.city || offers[0].city;

  const map = useMap(mapRef, city, isNearby);

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
            activeOffer?.id === id ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(markerLayer);
      }, []);

      if (isNearby && activeOffer) {
        const marker = new Marker({
          lat: activeOffer?.location.latitude,
          lng: activeOffer?.location.longitude,
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
