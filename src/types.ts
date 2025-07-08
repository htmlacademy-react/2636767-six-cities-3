import { RatingValue } from './const';

export type TNavItem = {
  id: number;
  name: string;
  url: string;
};

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: string;
  location: TLocation;
};

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type TFavList = {
  city: string;
  offers: TOffer[];
};

export type TRating = {
  value: RatingValue;
  labelTitle: string;
};

export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TOfferSettings = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
};
