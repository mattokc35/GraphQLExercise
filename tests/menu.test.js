const { ApolloServer, gql } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing");
const typeDefs = require("../src/schema");
const resolvers = require("../src/resolvers.js");

const GET_APPETIZERS = gql`
  query {
    getAppetizers {
      name
      servedWith
      price
    }
  }
`;

const GET_ENTREES = gql`
  query {
    getEntrees {
      name
      servedWith
      price
    }
  }
`;

const GET_COLD_SANDWICHES = gql`
  query {
    getColdSandwiches {
      name
      description
      servedWith
      breadType
      halfPrice
      fullPrice
    }
  }
`;

const GET_HOT_SANDWICHES = gql`
  query {
    getHotSandwiches {
      name
      description
      servedWith
      bunChoice
      price
    }
  }
`;

const GET_SOUP_SALAD_COMBOS = gql`
  query {
    getSoupSaladCombos {
      name
      soupOptions
      sideOptions
      price
    }
  }
`;

const GET_FAJITAS = gql`
  query {
    getFajitas {
      name
      servedWith
      tortillaChoice
      price
    }
  }
`;

const GET_TACOS = gql`
  query {
    getTacos {
      name
      servedWith
      sides
      price
    }
  }
`;

const GET_ENCHILADAS = gql`
  query {
    getEnchiladas {
      count
      choices
      servedWith
      price
    }
  }
`;

const GET_QUICHE = gql`
  query {
    getQuiches {
      name
      sides
      price
    }
  }
`;

const GET_SALADS = gql`
  query {
    getSalads {
      name
      ingredients
      price
    }
  }
`;

describe("Menu API Tests", () => {
  let server;
  let query;

  beforeAll(() => {
    server = new ApolloServer({ typeDefs, resolvers });
    const testClient = createTestClient(server);
    query = testClient.query;
  });

  it("fetches appetizers", async () => {
    const { data } = await query({ query: GET_APPETIZERS });
    expect(data.getAppetizers[0]).toHaveProperty("name");
    expect(data.getAppetizers[0]).toHaveProperty("servedWith");
    expect(data.getAppetizers[0]).toHaveProperty("price");
  });

  it("fetches entrees", async () => {
    const { data } = await query({ query: GET_ENTREES });
    expect(data.getEntrees[0]).toHaveProperty("name");
    expect(data.getEntrees[0]).toHaveProperty("servedWith");
    expect(data.getEntrees[0]).toHaveProperty("price");
  });

  it("fetches cold sandwiches", async () => {
    const { data } = await query({ query: GET_COLD_SANDWICHES });
    expect(data.getColdSandwiches[0]).toHaveProperty("name");
    expect(data.getColdSandwiches[0]).toHaveProperty("description");
    expect(data.getColdSandwiches[0]).toHaveProperty("servedWith");
    expect(data.getColdSandwiches[0]).toHaveProperty("breadType");
    expect(data.getColdSandwiches[0]).toHaveProperty("halfPrice");
    expect(data.getColdSandwiches[0]).toHaveProperty("fullPrice");
  });

  it("fetches hot sandwiches", async () => {
    const { data } = await query({ query: GET_HOT_SANDWICHES });
    expect(data.getHotSandwiches[0]).toHaveProperty("name");
    expect(data.getHotSandwiches[0]).toHaveProperty("description");
    expect(data.getHotSandwiches[0]).toHaveProperty("servedWith");
    expect(data.getHotSandwiches[0]).toHaveProperty("bunChoice");
    expect(data.getHotSandwiches[0]).toHaveProperty("price");
  });

  it("fetches soup and salad combos", async () => {
    const { data } = await query({ query: GET_SOUP_SALAD_COMBOS });
    expect(data.getSoupSaladCombos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          soupOptions: expect.any(Array),
          sideOptions: expect.any(Array),
          price: expect.any(Number),
        }),
      ])
    );
  });
  it("fetches fajitas", async () => {
    const { data } = await query({ query: GET_FAJITAS });
    expect(data.getFajitas).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          servedWith: expect.any(Array),
          tortillaChoice: expect.any(Array),
          price: expect.any(Number),
        }),
      ])
    );
  });

  it("fetches tacos", async () => {
    const { data } = await query({ query: GET_TACOS });
    expect(data.getTacos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          servedWith: expect.any(String),
          sides: expect.any(String),
          price: expect.any(Number),
        }),
      ])
    );
  });

  it("fetches enchiladas", async () => {
    const { data } = await query({ query: GET_ENCHILADAS });
    expect(data.getEnchiladas).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          count: expect.any(String),
          choices: expect.any(Array),
          servedWith: expect.any(String),
          price: expect.any(Number),
        }),
      ])
    );
  });

  it("fetches quiche", async () => {
    const { data } = await query({ query: GET_QUICHE });
    expect(data.getQuiches).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          sides: expect.any(Array),
          price: expect.any(Number),
        }),
      ])
    );
  });

  it("fetches salads", async () => {
    const { data } = await query({ query: GET_SALADS });
    expect(data.getSalads[0]).toHaveProperty("name");
    expect(data.getSalads[0]).toHaveProperty("ingredients");
    expect(data.getSalads[0]).toHaveProperty("price");
  });
});
