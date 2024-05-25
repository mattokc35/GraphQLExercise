const { gql } = require("apollo-server");

const typeDefs = gql`
  type Appetizer {
    name: String!
    servedWith: String!
    price: Float!
  }

  type Entree {
    name: String!
    servedWith: String!
    price: Float!
  }

  enum UpgradeOption {
    PASTA_SALAD
    FRENCH_ONION_SOUP
    SOUP_OF_THE_DAY
  }

  type ColdSandwich {
    name: String!
    description: String!
    servedWith: [String!]!
    breadType: [String!]!
    halfPrice: Float!
    fullPrice: Float!
  }

  type HotSandwich {
    name: String!
    description: String!
    servedWith: [String!]!
    bunChoice: [String!]!
    price: Float!
  }

  type SoupSaladCombo {
    name: String!
    soupOptions: [String!]!
    sideOptions: [String!]!
    price: Float!
  }

  type Fajita {
    name: String!
    servedWith: [String!]!
    tortillaChoice: [String!]!
    price: Float!
  }

  type Taco {
    name: String!
    servedWith: String!
    sides: String!
    price: Float!
  }

  type Enchilada {
    count: String!
    choices: [String!]!
    servedWith: String!
    price: Float!
  }

  type Quiche {
    name: String!
    sides: [String!]!
    price: Float!
  }

  type Salad {
    name: String!
    ingredients: String!
    price: Float!
  }

  type Query {
    getAppetizers: [Appetizer!]!
    getEntrees: [Entree!]!
    getColdSandwiches: [ColdSandwich!]!
    getHotSandwiches: [HotSandwich!]!
    getSoupSaladCombos: [SoupSaladCombo!]!
    getFajitas: [Fajita!]!
    getTacos: [Taco!]!
    getEnchiladas: [Enchilada!]!
    getQuiches: [Quiche!]!
    getSalads: [Salad!]!
  }
`;

module.exports = typeDefs;
