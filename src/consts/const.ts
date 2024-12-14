import { TCityTypes } from '../types/TCityTypes.ts';
import { City } from '../types/TOffer.ts';

const Settings = {
  OffersCount: 312,
} as const;

const Cities: TCityTypes[] = [
  'Amsterdam',
  'Brussels',
  'Cologne',
  'Dusseldorf',
  'Hamburg',
  'Paris',
];

const DEFAULT_CITY: City | null = null;

// CONST FOR RATING
const MAX_STARS_FOR_RATING = 5;
const RatingStyle = (rating: number) =>
  `${(100 / MAX_STARS_FOR_RATING) * rating}%`;
const RatingStars = [5, 4, 3, 2, 1];

// CONST FOR MAP
const MAP_URL =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const MAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const URL_MARKER_DEFAULT = '../../markup/img/pin.svg';
const URL_MARKER_CURRENT = '../../markup/img/pin-active.svg';

enum AppRoute {
  Root = '/',
  Login = '/login',
  NotFoundPage = '/not-found-page',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {
  Settings,
  RatingStars,
  Cities,
  DEFAULT_CITY,
  MAX_STARS_FOR_RATING,
  RatingStyle,
  AppRoute,
  AuthorizationStatus,
  MAP_URL,
  MAP_ATTRIBUTION,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
};
