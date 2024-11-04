import moment = require('moment');

export const formatDate = (dateString: string) => {
  if (dateString === null || dateString === undefined || dateString === '') {
    return '';
  }
  const year = dateString.substring(2, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  return `${day}/${month}/${year}`;
};

export const dateFormatter = (dateString: string) => {
  return moment(dateString).format('DD/MM/YY');
};

export const formatDateCompileString = (dateString: string) => {
  const year = dateString.substring(2, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  return `${day}/${month}/${year}`;
};
