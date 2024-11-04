export function currencyFormatter(currency: string, value: number) {
  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency,
  });
  return formatter.format(value);
}
