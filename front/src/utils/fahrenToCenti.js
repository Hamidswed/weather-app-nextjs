const fahrenheitToCentigrade = (faren) => {
  const centi = (5 / 9) * (faren - 32);
  return Math.round(centi);
};

export default fahrenheitToCentigrade;
