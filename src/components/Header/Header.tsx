import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/const.ts';
import { offers } from '../../mocks/offers.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { logoutAction } from '../../store/api-actions.ts';
import { getUserData } from '../../services/token.ts';
import { getAuthorizationStatus } from '../../store/userData/selectors.ts';

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { email, avatarUrl } = getUserData();

  const favoriteOffersCount = offers?.filter(
    (offer) => offer.isFavorite,
  ).length;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const avatarStyle = isAuth
    ? { backgroundImage: `url(${avatarUrl})`, borderRadius: '50%' }
    : undefined;

  const handleSignOut = () => {
    if (isAuth) {
      dispatch(logoutAction());
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Root}>
              <img
                className="header__logo"
                src="../../../markup/img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.Favorites}
                >
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    style={avatarStyle}
                  />
                  {isAuth && (
                    <>
                      <span className="header__user-name user__name">
                        {email}
                      </span>
                      <span className="header__favorite-count">
                        {favoriteOffersCount}
                      </span>
                    </>
                  )}
                </Link>
              </li>
              <li className="header__nav-item" onClick={handleSignOut}>
                <Link className="header__nav-link" to="#">
                  <span className="header__signout">
                    {isAuth ? 'Sign out' : 'Sign in'}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
