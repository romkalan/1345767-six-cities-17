import { TOffer } from '../types/TOffer.ts';

export const offers: TOffer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
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
      zoom: 12,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Luxurious apartment at beautiful place',
    type: 'apartment',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '6af611-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 180,
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
      longitude: 4.929309666406198,
      zoom: 12,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: '6af6f711-8d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 220,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88969,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-03.jpg',
  },
];

export const offersNearby: TOffer[] = offers.slice(1, 4);
