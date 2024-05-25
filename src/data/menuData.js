const appetizers = [
  {
    name: "Iceberg Wedge Salad with House Cured Bacon",
    servedWith: "tomato salsa gorgonzola",
    price: 7.5,
  },
  {
    name: "Sautéed Shredded Brussels Sprouts",
    servedWith: "bacon hazelnuts gorgonzola",
    price: 6.95,
  },
  {
    name: "Kale Salad",
    servedWith: "parmesan crisp corn radish garlic-lemon vinaigrette",
    price: 7.5,
  },
  {
    name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
    servedWith: "grilled tomato salsa crostini",
    price: 6.95,
  },
  {
    name: "Chicken and Cabbage Eggrolls",
    servedWith: "hot & sour dipping sauce",
    price: 6.95,
  },
];

const entrees = [
  {
    name: "Farfalle Pasta with Braised Pork in Tomato Cream",
    servedWith: "capers butternut squash kale",
    price: 12.95,
  },
  {
    name: "Stout Braised Bratwurst",
    servedWith:
      "horseradish mashed potatoes roasted root veggies grilled onion",
    price: 13.95,
  },
  {
    name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
    servedWith: "vegetable sauté golden raisin chutney",
    price: 15.95,
  },
  {
    name: "Sesame Shrimp",
    servedWith:
      "udon noodles ramen broth shiitake mushrooms bean sprouts scallions",
    price: 13.95,
  },
];

const coldSandwiches = [
  {
    name: "Turkey & Avocado",
    description: "With tomato",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    breadType: ["sourdough", "whole wheat", "rye"],
    halfPrice: 7.95,
    fullPrice: 9.25,
  },
  {
    name: "Pub Club",
    description: "Turkey, bacon, lettuce, tomato",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    breadType: ["sourdough", "whole wheat", "rye"],
    halfPrice: 7.95,
    fullPrice: 9.25,
  },
  {
    name: "Rare Roast Beef & Swiss",
    description: "Sweet-hot mustard, lettuce, red onion",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    breadType: ["sourdough", "whole wheat", "rye"],
    halfPrice: 7.95,
    fullPrice: 9.25,
  },
  {
    name: "Veggie",
    description: "Pepper jack, avocado, sprout, tomato",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    breadType: ["sourdough", "whole wheat", "rye"],
    halfPrice: 7.95,
    fullPrice: 9.25,
  },
];

const hotSandwiches = [
  {
    name: "Southwest Chicken Breast",
    description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    bunChoice: ["whole wheat", "cheese & onion"],
    price: 9.5,
  },
  {
    name: "Portobello Fresh Mozzarella",
    description:
      "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    bunChoice: ["whole wheat", "cheese & onion"],
    price: 9.5,
  },
  {
    name: "Chipotle BBQ Pork",
    description: "With Pickled Jalapeño Slaw",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    bunChoice: ["whole wheat", "cheese & onion"],
    price: 9.5,
  },
  {
    name: "Bacon Burger",
    description: "Swiss, Lettuce, Tomato",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    bunChoice: ["whole wheat", "cheese & onion"],
    price: 9.25,
  },
  {
    name: "Mexi Burger",
    description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    bunChoice: ["whole wheat", "cheese & onion"],
    price: 9.25,
  },
  {
    name: "Herb Marinated Top Sirloin",
    description:
      "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Focaccia",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    bunChoice: ["Focaccia"],
    price: 10.95,
  },
  {
    name: "Roast Beef with Ancho Au Jus",
    description: "Jack Cheese, Grilled Onions",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    bunChoice: ["Crumb Bros. Baguette"],
    price: 9.75,
  },
  {
    name: "Blackened Catfish",
    description: "Creole Peppers & Onions, Fresh Herb Aioli",
    servedWith: ["house pasta salad", "green salad", "fresh fruit"],
    bunChoice: ["house made Sourdough"],
    price: 9.75,
  },
];

const soupSaladCombos = [
  {
    name: "Soup Order",
    soupOptions: ["French Onion", "Soup of the Day"],
    sideOptions: [],
    price: 4.95,
  },
  {
    name: "Soup and Salad Combo 1",
    soupOptions: ["French Onion", "Soup of the Day"],
    sideOptions: ["Small Green Salad", "Fresh Fruit", "House Pasta"],
    price: 7.25,
  },
  {
    name: "Soup and Salad Combo 2",
    soupOptions: ["French Onion", "Soup of the Day"],
    sideOptions: ["Half Pasta of the Day"],
    price: 8.75,
  },
];

const fajitas = [
  {
    name: "Chicken Onions, Poblano and Bell Peppers, Guacamole, Two Salsas",
    servedWith: ["red rice", "black beans", "grilled tomato salad"],
    tortillaChoice: ["corn", "flour"],
    price: 10.95,
  },
  {
    name: "Sirloin Steak, Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas",
    servedWith: ["red rice", "black beans", "grilled tomato salad"],
    tortillaChoice: ["corn", "flour"],
    price: 10.95,
  },
];

const tacos = [
  {
    name: "Beer Battered Fish",
    servedWith: "jalapeno remoulade, roasted salsa, cabbage",
    sides: "red rice, black beans, corn & romaine salad, tortilla chips",
    price: 9.95,
  },
  {
    name: "Carne Asada",
    servedWith: "guacamole, tomatillo salsa",
    sides: "red rice, black beans, corn & romaine salad, tortilla chips",
    price: 9.95,
  },
  {
    name: "Citrus Marinated Chicken",
    servedWith: "guacamole, tomatillo salsa",
    sides: "red rice, black beans, corn & romaine salad, tortilla chips",
    price: 9.95,
  },
  {
    name: "Grilled Veggie",
    servedWith:
      "zucchini, yellow squash, bell peppers, onion, guacamole, tomatillo salsa",
    sides: "red rice, black beans, corn & romaine salad, tortilla chips",
    price: 9.95,
  },
];

const enchiladas = [
  {
    count: "uno",
    choices: ["beef", "chicken", "cheese", "veggie"],
    servedWith: "Southwestern Succotash, Black Beans with Chipotle Crema",
    price: 8.5,
  },
  {
    count: "dos",
    choices: ["beef", "chicken", "cheese", "veggie"],
    servedWith: "Southwestern Succotash, Black Beans with Chipotle Crema",
    price: 9.95,
  },
  {
    count: "tres",
    choices: ["beef", "chicken", "cheese", "veggie"],
    servedWith: "Southwestern Succotash, Black Beans with Chipotle Crema",
    price: 11.5,
  },
];

const quiches = [
  {
    name: "Bacon, Swiss Mushroom, Zucchini Quiche",
    sides: ["Fresh Fruit", "Green Salad"],
    price: 8.95,
  },
];

const salads = [
  {
    name: "Grilled Red Trout",
    ingredients:
      "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette",
    price: 10.95,
  },
  {
    name: "Smoked Turkey Cheese Tortellini",
    ingredients: "Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado",
    price: 9.95,
  },
  {
    name: "Asian Grilled Chicken",
    ingredients:
      "Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing",
    price: 10.5,
  },
  {
    name: "Southwest Grilled Chicken",
    ingredients:
      "Tomato, Guacamole, Pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette",
    price: 10.5,
  },
  {
    name: "Mediterranean Italian Sausage",
    ingredients:
      "Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette",
    price: 9.95,
  },
  {
    name: "Grilled Salmon",
    ingredients:
      "Artichoke tapenade, Shredded Kale, Corn, Radish, Parmesan Crisps",
    price: 11.5,
  },
];

module.exports = {
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
};
