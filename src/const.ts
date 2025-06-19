import { TNavItem, TRating } from './types';

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Main = '/',
  Offer = '/:city/offer/:id',
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

export enum RatingValue {
  Terribly = 1,
  Badly = 2,
  NotBad = 3,
  Good = 4,
  Perfect = 5,
}

export const ratingStars: TRating[] = [
  {
    value: RatingValue.Perfect,
    labelTitle: 'perfect'
  },
  {
    value: RatingValue.Good,
    labelTitle: 'good'
  },
  {
    value: RatingValue.NotBad,
    labelTitle: 'not bad'
  },
  {
    value: RatingValue.Badly,
    labelTitle: 'badly'
  },
  {
    value: RatingValue.Terribly,
    labelTitle: 'terribly'
  }
]
