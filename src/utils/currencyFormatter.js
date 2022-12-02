const currencyFormatter = (currencyType) => {
  switch (currencyType) {
    case "usd":
      return "$";
    case "eur":
      return "€";
    case "gbp":
      return "£";
    case "jpy":
      return "¥";
    default:
      return "$";
  }
};

export default currencyFormatter;
