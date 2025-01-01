import { TOfferById } from '../types/TOfferById.ts';

export const offerById: TOfferById = {
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 333,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.374,
      longitude: 4.88969,
      zoom: 12,
    },
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  isFavorite: false,
  isPremium: false,
  rating: 5,
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: [
    'Heating',
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
    'Cabel TV',
    'Fridge',
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false,
  },
  images: [],
  maxAdults: 4,
};
