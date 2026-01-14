export const currencyFormatter = (
  value: number,
  currency: string = "NGN",
  locale: string = "en-NG"
) => {
  const hasCurrency = Boolean(currency);

  return new Intl.NumberFormat(locale, {
    style: hasCurrency ? "currency" : "decimal",
    ...(hasCurrency ? { currency } : {}),
    // minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    // maximumFractionDigits: 2,
  }).format(value);
};