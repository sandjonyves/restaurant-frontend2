import images from './images';

const food = [
  {
    "title": "Salade César",
    "description": "Salade fraîche avec poulet grillé, croûtons et sauce césar",
    "price": 12.99,
    "image": images.gallery01
  },
  {
    "title": "Burger végétarien",
    "description": "Burger végétal avec tomates, oignons et sauce barbecue",
    "price": 9.99,
    "image": images.gallery01
  },
  {
    "title": "Sushi mix",
    "description": "Assortiment de sushis variés avec sauces et gingembre",
    "price": 18.50,
    "image": images.gallery01
  },
  {
    "title": "Pizza Margherita",
    "description": "Pizza fine à la sauce tomate, mozzarella et basilic frais",
    "price": 13.75,
    "image": images.gallery01
  },
  // {
  //   "title": "Tacos de poisson",
  //   "description": "Tacos au poisson pané, avocat, salsa et crème fraîche",
  //   "price": 11.25,
  //   "image": "https://example.com/fish-tacos.jpg"
  // },
  // {
  //   "title": "Poke bowl végétarien",
  //   "description": "Bol de riz, légumes frais, tofu et sauce soja-sésame",
  //   "price": 14.99,
  //   "image": "https://example.com/veggie-poke-bowl.jpg"
  // },
  // {
  //   "title": "Lasagnes maison",
  //   "description": "Lasagnes à la viande hachée, béchamel et fromage",
  //   "price": 15.50,
  //   "image": "https://example.com/homemade-lasagna.jpg"
  // },
  // {
  //   "title": "Pad Thaï crevettes",
  //   "description": "Nouilles sautées aux crevettes, légumes et cacahuètes",
  //   "price": 16.75,
  //   "image": "https://example.com/shrimp-pad-thai.jpg"
  // },
  // {
  //   "title": "Poulet tikka masala",
  //   "description": "Poulet mariné dans une sauce crémeuse aux épices indiennes",
  //   "price": 17.99,
  //   "image": "https://example.com/tikka-masala-chicken.jpg"
  // },
  // {
  //   "title": "Salade niçoise",
  //   "description": "Salade fraîche avec thon, olives, œufs et vinaigrette",
  //   "price": 12.25,
  //   "image": "https://example.com/nicoise-salad.jpg"
  // }
]

const drinks = [
  {
    title: 'Coca Cola',
    price: '$20',
    tags: 'Free with a meal | Soda | 30 ml',
  },
  {
    title: "Pepsi",
    price: '$16',
    tags: 'Free with a meal | Soda | 30 ml',
  },
  {
    title: 'Water',
    price: '$10',
    tags: 'Free with a meal | 30 ml',
  },
  {
    title: 'Water',
    price: '$31',
    tags: 'Free with a meal | 30 ml',
  },
  {
    title: 'Rio',
    price: '$26',
    tags: 'Free with a meal | Soda | 30 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Fully Hygenic',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { food, drinks, awards };
