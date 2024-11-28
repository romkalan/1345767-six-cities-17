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

export { AppRoute, AuthorizationStatus };
