import dayjs from 'dayjs';

export const getDatetime = (dateTo) => dayjs(dateTo).format('YYYY-MM-DD');
export const getMonthAndYear = (dateTo) => dayjs(dateTo).format('MMMM YYYY');
export const getDiffDate = (timeA, timeB, format = 'minute') => dayjs(timeA).diff(dayjs(timeB), format);
