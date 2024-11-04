export const getHourWithoutSeconds = (hour: string) => {
  const [horas, minutos] = hour.split(':');
  return `${horas}:${minutos}`;
};
