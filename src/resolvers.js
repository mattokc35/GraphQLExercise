const menuData = require("./data/menuData");
const {
  appetizers,
  entrees,
  coldSandwiches,
  hotSandwiches,
  soupSaladCombos,
  fajitas,
  tacos,
  enchiladas,
  quiches,
  salads,
} = menuData;

const {
  calculateUpgradedSandwichPrices,
  modifyUpgradedServedWith,
} = require("./helpers/helperFunctions");

const resolvers = {
  Query: {
    getAppetizers: () => appetizers,
    getEntrees: () => entrees,
    getColdSandwiches: () =>
      coldSandwiches.map((sandwich) => ({
        ...sandwich,
        servedWith: modifyUpgradedServedWith(sandwich),
        ...calculateUpgradedSandwichPrices(sandwich),
      })),
    getHotSandwiches: () =>
      hotSandwiches.map((sandwich) => ({
        ...sandwich,
        servedWith: modifyUpgradedServedWith(sandwich),
        price: sandwich.price + (sandwich.hasUpgrade ? 1.5 : 0),
      })),
    getSoupSaladCombos: () => soupSaladCombos,
    getFajitas: () => fajitas,
    getTacos: () => tacos,
    getEnchiladas: () => enchiladas,
    getQuiches: () => quiches,
    getSalads: () => salads,
  },
};

module.exports = resolvers;
