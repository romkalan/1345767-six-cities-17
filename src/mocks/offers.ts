import { TOffer } from '../types/TOffer.ts';
import { generateUUID } from '../utils/utils.ts';

export const offers: TOffer[] = [
  {
    id: generateUUID(),
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8534,
        longitude: 2.3488,
        zoom: 12,
      },
    },
    location: {
      latitude: 48.8684,
      longitude: 2.3121,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: generateUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8534,
        longitude: 2.3488,
        zoom: 12,
      },
    },
    location: {
      latitude: 48.8554,
      longitude: 2.3788,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.15545,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: generateUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8913,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.15545,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: generateUUID(),
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8913,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg',
  },
  {
    id: generateUUID(),
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8913,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: generateUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8913,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
  },
];

export const offersNearby: TOffer[] = offers.slice(1, 4);
