export const determineTextColor = (value: string | undefined) => {
  if (value === '-') {
    return '#030f1c';
  } else if (value && value.charAt(0) === '-' && !isNaN(parseFloat(value.substr(1)))) {
    return '#F40009';
  }
  return '#030f1c';
};
