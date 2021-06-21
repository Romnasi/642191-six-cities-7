import {getDiffDate} from './date';


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
