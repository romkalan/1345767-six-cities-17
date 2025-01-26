import { AppRoute, AuthorizationStatus } from '../../consts/const.ts';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { getAuthorizationStatus } from '../../store/userProcess/selectors.ts';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
