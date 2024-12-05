import { TOfferById } from '../types/TOfferById.ts';

export const offerById: TOfferById = {
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: ['Heating'],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false,
  },
  images: [
    'https://avatars.mds.yandex.net/get-ydo/1540809/2a0000016a39e4c1f530ba5562a9d93c175f/diploma',
  ],
  maxAdults: 4,
  previewImage: 'img/apartment-02.jpg',
};
