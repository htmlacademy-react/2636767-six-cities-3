import { TOfferSettings } from '../types';

export const mockOfferParis: TOfferSettings = {
  id: '16f6204f-091a-4016-b6fa-0b81e2b69c4d',
  title: 'Penthouse, 4-5 rooms + 5 balconies',
  description:
    'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
  type: 'house',
  price: 164,
  images: [
    'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16,
  },
  goods: ['Towels', 'Coffee machine', 'Wi-Fi', 'Washing machine', 'Air conditioning'],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: true,
  rating: 4.4,
  bedrooms: 1,
  maxAdults: 7,
};
