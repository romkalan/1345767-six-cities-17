import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
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
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ activeOffer, offers, isNearby }: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const { city } = activeOffer;
  const map: leaflet.Map | null = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.map(({ location, id }) => {
        leaflet
          .marker(
            {
              lat: location.latitude,
              lng: location.longitude,
            },
            {
              icon:
                activeOffer.id === id ? currentCustomIcon : defaultCustomIcon,
            },
          )
          .addTo(map);
      });

      if (isNearby) {
        console.log(activeOffer);
        leaflet
          .marker(
            {
              lat: activeOffer.location.latitude,
              lng: activeOffer.location.longitude,
            },
            { icon: currentCustomIcon },
          )
          .addTo(map);
      }
    }
  }, [map, offers, activeOffer, isNearby]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
