import { TOffer } from '../../types';

export const getGroupedFavList = (list: TOffer[]) => {
  const offersByCity = list.reduce((acc: Record<string, TOffer[]>, offer) => {
    const city = offer.city.name;

    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);

    return acc;
  }, {});
  const groupedOffers = Object.entries(offersByCity).map(([city, offers]) => ({
    city,
    offers,
  }));

  return groupedOffers;
};
