import { TResponseUserData } from '../types/TAuthData.ts';

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
const USER_URL = 'user-url';
const USER_EMAIL = 'user-email';

const getUserData = (): TResponseUserData => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  const url = localStorage.getItem(USER_URL);
  const email = localStorage.getItem(USER_EMAIL);
  return { token: token ?? '', email: email ?? '', avatarUrl: url ?? '' };
};

const saveUserData = ({ email, token, avatarUrl }: TResponseUserData): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  localStorage.setItem(USER_URL, avatarUrl);
  localStorage.setItem(USER_EMAIL, email);
};

const dropUserData = (): void => {
  localStorage.clear();
};

export { getUserData, saveUserData, dropUserData };
