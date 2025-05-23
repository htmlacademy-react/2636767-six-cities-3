export type TNavItem = {
  id: number;
  name: string;
  active: boolean;
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
