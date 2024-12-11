import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { City } from '../../types/TOffer.ts';
import useMap from '../../hooks/useMap.ts';
import 'leaflet/dist/leaflet.css';
import {
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  pointsOfOffers,
} from '../../consts/const.ts';

type MapProps = {
  city: City;
};

function Map({ city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map: leaflet.Map | null = useMap({ mapRef, city });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      pointsOfOffers.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            },
            {
              icon: mapRef !== null ? defaultCustomIcon : currentCustomIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [map, pointsOfOffers]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
