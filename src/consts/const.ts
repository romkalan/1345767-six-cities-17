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
