import { TCityTypes } from '../types/TCityTypes.ts';

const Settings = {
  OffersCount: 312,
} as const;

const MAX_STARS_FOR_RATING = 5;

const RatingStyle = (rating: number) =>
  `${(100 / MAX_STARS_FOR_RATING) * rating}%`;

const RatingStars = [5, 4, 3, 2, 1];

const Cities: TCityTypes[] = [
  'Amsterdam',
  'Brussels',
  'Cologne',
  'Dusseldorf',
  'Hamburg',
  'Paris',
];

export const pointsOfOffers = [
  {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
  },
  {
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
  },
  {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
  },
  {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
  },
];

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
  MAX_STARS_FOR_RATING,
  RatingStyle,
  AppRoute,
  AuthorizationStatus,
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
