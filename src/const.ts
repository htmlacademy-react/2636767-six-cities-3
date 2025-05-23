import { TCard, TNavItem } from './types';

export const cities: TNavItem[] = [
  {
    id: 0,
    name: 'Paris',
    active: false,
  },
  {
    id: 1,
    name: 'Cologne',
    active: false,
  },
  {
    id: 2,
    name: 'Brussels',
    active: false,
  },
  {
    id: 3,
    name: 'Amsterdam',
    active: true,
  },
  {
    id: 4,
    name: 'Hamburg',
    active: false,
  },
  {
    id: 5,
    name: 'Dusseldorf',
    active: false,
  },
];

export const cards: TCard[] = [
  {
    id: 0,
    isPremium: true,
    imageSrc: 'img/apartment-01.jpg',
    price: '120',
    bookmarkActive: false,
    description: 'Beautiful & luxurious apartment at great location',
    placeType: 'Apartment',
  },
  {
    id: 1,
    isPremium: false,
    imageSrc: 'img/room.jpg',
    price: '80',
    bookmarkActive: true,
    description: 'Wood and stone place',
    placeType: 'Room',
  },
  {
    id: 2,
    isPremium: false,
    imageSrc: 'img/apartment-02.jpg',
    price: '132',
    bookmarkActive: false,
    description: 'Canal View Prinsengracht',
    placeType: 'Apartment',
  },
  {
    id: 3,
    isPremium: true,
    imageSrc: 'img/apartment-03.jpg',
    price: '180',
    bookmarkActive: false,
    description: 'Nice, cozy, warm big bed apartment',
    placeType: 'Apartment',
  },
  {
    id: 0,
    isPremium: false,
    imageSrc: 'img/room.jpg',
    price: '80',
    bookmarkActive: true,
    description: 'Wood and stone place',
    placeType: 'Room',
  },
];

export const offersCount: number = 312;
