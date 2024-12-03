import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div
      style={{
        fontSize: '62px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ marginBottom: 0 }}>404</h1>
      <p>Page Not Found</p>
      <Link className="" to="/">
        <span className="visually-hidden">Пройти авторизацию</span>
        <img
          className="header__logo"
          src="../../../markup/img/logo.svg"
          alt="6 cities logo"
          width="405"
          height="205"
        />
      </Link>
    </div>
  );
}

export default NotFoundPage;
