import { TCityName } from './TCityName.ts';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: TCityName;
  location: Location;
};

export type TOffer = {
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  id: string;
};
