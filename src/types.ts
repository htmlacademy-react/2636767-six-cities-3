import { RatingValue } from './const';

export type TNavItem = {
  id: number;
  name: string;
  url: string;
};

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
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
