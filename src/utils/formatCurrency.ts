const formatCurrency = (value: any, currency: string) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: currency,
  });
};

export default formatCurrency;
