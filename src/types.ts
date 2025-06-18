export type TNavItem = {
  id: number;
  name: string;
  url: string;
};

export type TCard = {
  id: number;
  isPremium: boolean;
  imageSrc: string;
  price: string | number;
  bookmarkActive: boolean;
  description: string;
  placeType: string;
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
