import { TNavItem } from './types';

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Main = '/',
  Offer = 'offer/:id',
}

export const cities: TNavItem[] = [
  {
    id: 0,
    name: 'Paris',
    active: false,
    url: 'paris',
  },
  {
    id: 1,
    name: 'Cologne',
    active: false,
    url: 'cologne',
  },
  {
    id: 2,
    name: 'Brussels',
    active: false,
    url: 'brussels',
  },
  {
    id: 3,
    name: 'Amsterdam',
    active: true,
    url: 'amsterdam',
  },
  {
    id: 4,
    name: 'Hamburg',
    active: false,
    url: 'hamburg',
  },
  {
    id: 5,
    name: 'Dusseldorf',
    active: false,
    url: 'dusseldorf',
  },
];
