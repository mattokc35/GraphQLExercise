const calculateUpgradedSandwichPrices = (sandwich) => {
  const priceModifier = sandwich.hasUpgrade ? 1.5 : 0;
  return {
    halfPrice: sandwich.halfPrice + priceModifier,
    fullPrice: sandwich.fullPrice + priceModifier,
  };
};

const modifyUpgradedServedWith = (sandwich) => {
  const defaultServedWith = ["house pasta salad", "green salad", "fresh fruit"];
  const upgradeServedWith = [
    "1/2 pasta salad of the day",
    "French onion soup",
    "soup of the day",
  ];
  return sandwich.hasUpgrade ? upgradeServedWith : defaultServedWith;
};

module.exports = {
  calculateUpgradedSandwichPrices,
  modifyUpgradedServedWith,
};
