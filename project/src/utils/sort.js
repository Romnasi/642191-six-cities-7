import {getDiffDate} from './date';
import {Sorter} from '../const';


const getWeightForNullDate = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};


export const sortByDateDown = (dateA, dateB) => {
  dateA = dateA.date;
  dateB = dateB.date;
  const weight = getWeightForNullDate(dateB, dateA);
  if (weight !== null) {
    return weight;
  }

  return getDiffDate(dateB, dateA);
};


export const getSortedOffers = (currentOffers, activeFilter) => {
  switch (activeFilter) {
    case Sorter.POPULAR.ID:
      return currentOffers;
    case Sorter.LOW_TO_HIGH.ID:
      return currentOffers.sort((a, b) => a.price - b.price);
    case Sorter.HIGH_TO_LOW.ID:
      return currentOffers.sort((b, a) => a.price - b.price);
    case Sorter.TOP_RATED_FIRST.ID:
      return currentOffers.sort((b, a) => a.rating - b.rating);
    default:
      return currentOffers;
  }
};
