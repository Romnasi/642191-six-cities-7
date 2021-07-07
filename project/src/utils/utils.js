import {AuthorizationStatus} from '../const';


const Rating = {
  MAX_STYLE_VALUE: 100,
  MAX_DIGIT_VALUE: 5,
};


export function convertRating(rating) {
  return Rating.MAX_STYLE_VALUE / Rating.MAX_DIGIT_VALUE * rating;
}


export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;
