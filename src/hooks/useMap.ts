import { useEffect, useRef, useState, MutableRefObject } from 'react';
import leaflet, { Map } from 'leaflet';
import { TCity } from '../types/TOffer.ts';
import { MAP_ATTRIBUTION, MAP_URL } from '../consts/const.ts';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: TCity,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(MAP_URL, {
          attribution: MAP_ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }

    if (map) {
      map.setView(
        { lat: city.location.latitude, lng: city.location.longitude },
        city.location.zoom,
      );
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
