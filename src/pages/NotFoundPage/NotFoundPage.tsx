import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link className="" to="/">
        <span className="visually-hidden">Пройти авторизацию</span>
        <img
          className="header__logo"
          src="../../../markup/img/logo.svg"
          alt="6 cities logo"
          width="81"
          height="41"
        />
      </Link>
    </div>
  );
}

export default NotFoundPage;
