/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-useless-escape */
const MONTH_NAMES = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciemmbre',
];

/**
 * Function to return month name from date in format yyyy-mm-dd
 * @param {*} date
 * @returns string
 */
const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
function monthName(date: any) {
  if (!date.match(dateRegex)) {
    return '';
  }
  const [, month] = date.split('-');
  return MONTH_NAMES[month - 1];
}

export { monthName, dateRegex };
