import moment from 'moment';
import { randomData } from '../data';

export const showRandomData = function() {
  const randomIndex = Math.floor(Math.random() * randomData.length);
  const randomItem = randomData[randomIndex];
  this.displayedData.push(randomItem);
};

export const formatName = (item) => `${item.firstName} ${item.lastName}`;


export const formatDateTime=function(item) {
  const dateTimeFrom = moment(item.dateTimeFrom);
  const dateTimeTo = moment(item.dateTimeTo);

  if (this.isAbsenceUntilFurther(dateTimeFrom, dateTimeTo)) {
    return this.formatAbsenceUntilFurther(dateTimeFrom);
  } else if (this.isMultipleDayAbsence(dateTimeFrom, dateTimeTo)) {
    return this.formatMultipleDayAbsence(dateTimeFrom, dateTimeTo);
  } else if (this.isFullDayAbsence(dateTimeFrom, dateTimeTo)) {
    return this.formatFullDayAbsence(dateTimeFrom);
  } else {
    return this.formatDefaultDateTime(dateTimeFrom, dateTimeTo);
  }
};

export const isAbsenceUntilFurther = (dateTimeFrom, dateTimeTo) => !dateTimeTo.isValid();

export const isMultipleDayAbsence = (dateTimeFrom, dateTimeTo) =>
  dateTimeFrom.format('YYYY-MM-DD') !== dateTimeTo.format('YYYY-MM-DD');

export const isFullDayAbsence = (dateTimeFrom, dateTimeTo) => {
  return (
    dateTimeFrom.isValid() &&
    dateTimeTo.isValid() &&
    dateTimeFrom.hour() === 0 &&
    dateTimeFrom.minute() === 0 &&
    dateTimeTo.hour() === 23 &&
    dateTimeTo.minute() === 59
  );
};

export const formatAbsenceUntilFurther = (dateTimeFrom) =>
  dateTimeFrom.hour() === 0 && dateTimeFrom.minute() === 0
    ? `${capitalizeFirstLetter(dateTimeFrom.format('dddd D MMMM'))} - Tillsvidare`
    : capitalizeFirstLetter(dateTimeFrom.format('dddd D MMMM HH:mm'));

export const formatMultipleDayAbsence = (dateTimeFrom, dateTimeTo) => {
  const isSmallViewPort = document.documentElement.clientWidth <= 1024;
  const format = isSmallViewPort ? 'ddd D MMM HH:mm' : 'dddd D MMMM HH:mm';

  return `${capitalizeFirstLetter(dateTimeFrom.format(format))} - ${capitalizeFirstLetter(
    dateTimeTo.format(format)
  )}`;
};

export const formatFullDayAbsence = (dateTimeFrom) =>
  capitalizeFirstLetter(dateTimeFrom.format('dddd D MMMM'));

export const formatDefaultDateTime = (dateTimeFrom, dateTimeTo) => {
  try {
    return `${capitalizeFirstLetter(dateTimeFrom.format('dddd D MMMM HH:mm'))} - ${capitalizeFirstLetter(
      dateTimeTo.format('HH:mm')
    )}`;
  } catch (error) {
    // Log and handle unexpected errors related to default date/time formatting
    console.error('Error formatting default date/time:', error);
    return 'Error formatting default date/time';
  }
};

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
