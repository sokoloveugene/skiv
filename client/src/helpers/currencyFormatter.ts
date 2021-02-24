const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const currency = (value: number | bigint): string => {
  return formatter.format(value).replace(/\$/gi, "₴ ");
};

export default currency;
