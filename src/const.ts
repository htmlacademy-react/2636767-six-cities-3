import { TNavItem } from './types';

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Main = '/',
  Offer = 'offer/:id',
  City = '/:city',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cities: TNavItem[] = [
  {
    id: 0,
    name: 'Paris',
    url: 'paris',
  },
  {
    id: 1,
    name: 'Cologne',
    url: 'cologne',
  },
  {
    id: 2,
    name: 'Brussels',
    url: 'brussels',
  },
  {
    id: 3,
    name: 'Amsterdam',
    url: 'amsterdam',
  },
  {
    id: 4,
    name: 'Hamburg',
    url: 'hamburg',
  },
  {
    id: 5,
    name: 'Dusseldorf',
    url: 'dusseldorf',
  },
];
