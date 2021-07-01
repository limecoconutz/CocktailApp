// const { nanoid } = require('nanoid');

const cocktails = [
  {
    id: 1,
    name: 'Margarita',
    description: 'A cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. ',
    ingredients: [
      {
        name: 'Tequila',
        quantity: '1 1/2 oz'
      },
      {
        name: 'Triple sec',
        quantity: '1/2 oz'
      },
      {
        name: 'Lime juice',
        quantity: '1 oz'
      },
      {
        name: 'Salt',
        quantity: ''
      },
    ],
    recipe: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
    imageUrl: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDM0NTl8MHwxfHNlYXJjaHwxfHxNYXJnYXJpdGF8ZW58MHx8fHwxNjI1MTI3MzUx&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Gin Fizz',
    description: 'A "fizz" is a mixed drink variation on the older sours family of cocktail. Its defining features are an acidic juice and carbonated water.',
    ingredients: [
      {
        name: 'Gin',
        quantity: '2 oz'
      },
      {
        name: 'Lemon',
        quantity: 'Juice of 1/2'
      },
      {
        name: 'Powdered sugar',
        quantity: '1 tsp'
      },
      {
        name: 'Carbonated water',
        quantity: ''
      }
    ],
    recipe: 'Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.',
    imageUrl: 'https://images.unsplash.com/photo-1453824979084-c8fd42932378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80',
  },
  {
    id: 3,
    name: 'Mojito',
    description: 'Its combination of sweetness, citrus, and herbaceous mint flavours is intended to complement the rum, and has made the mojito a popular summer drink',
    ingredients: [
      {
        name: 'Light rum',
        quantity: '2-3 oz'
      },
      {
        name: 'Lime',
        quantity: 'Juice of 1'
      },
      {
        name: 'Sugar',
        quantity: '2 tsp'
      },
      {
        name: 'Mint',
        quantity: '2-4'
      },
      {
        name: 'Soda water',
        quantity: ''
      }
    ],
    recipe: 'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80'
  },
  {
    id: 4,
    name: 'Daiquiri',
    description: 'The daiquiri is one of the six basic drinks listed in David A. Embury classic The Fine Art of Mixing Drinks, which also lists some variations',
    ingredients: [
      {
        name: 'Light rum',
        quantity: '1 1/2 oz'
      },
      {
        name: 'Lime',
        quantity: 'Juice of 1/2 '
      },
      {
        name: 'Powdered sugar',
        quantity: '1 tsp'
      }
    ],
    recipe: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
    imageUrl: 'https://images.unsplash.com/photo-1601673732094-b0d6b8477bd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
  },
  {
    id: 5,
    name: 'Pink Moon Cocktail',
    description: 'Built with gin and blackberries, this fancy pink drink will make you think of summer',
    ingredients: [
      {
        name: 'Gin',
        quantity: '1 shot'
      },
      {
        name: 'Coconut Liqueur',
        quantity: '1 shot'
      },
      {
        name: 'Elderflower cordial',
        quantity: '25 ml'
      },
      {
        name: 'Lime juice',
        quantity: '30ml'
      },
      {
        name: 'Blackberries',
        quantity: ''
      }
    ],
    recipe: 'Slowly shake in a shaker with ice, strain into a square whiskey glass. Top with fresh ice. Add the blackberries to garnish. Add flowers and a green leaf for a special look!',
    imageUrl: 'https://www.thecocktaildb.com/images/media/drink/lnjoc81619696191.jpg',
  },
  {
    id: 6,
    name: 'Whiskey Sour',
    ingredients: [
      {
        name: 'Blended whiskey',
        quantity: '2 oz '
      },
      {
        name: 'Lemon',
        quantity: 'Juice of 1/2'
      },
      {
        name: 'Powdered sugar',
        quantity: '1/2 tsp'
      },
      {
        name: 'Cherry',
        quantity: '1'
      },
      {
        name: 'Lemon',
        quantity: '1/2 slice '
      },
    ],
    recipe: 'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.',
    imageUrl: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 7,
    name: 'Dry Martini',
    ingredients: [
      {
        name: 'Gin',
        quantity: '1 2/3 oz'
      },
      {
        name: 'Dry Vermouth',
        quantity: '1/3 oz'
      },
      {
        name: 'Olive',
        quantity: '1'
      },
    ],
    recipe: 'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',
    imageUrl: 'https://images.unsplash.com/photo-1582993232955-39424b2cef01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3033&q=80',
  },
  {
    id: 8,
    name: 'Old Fashioned',
    ingredients: [
      {
        name: 'Bourbon',
        quantity: '4.5 cL'
      },
      {
        name: 'Angostura bitters',
        quantity: '2 dashes'
      },
      {
        name: 'Sugar',
        quantity: '1 cube'
      },
      {
        name: 'Water',
        quantity: 'dash'
      }
    ],
    recipe: 'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 9,
    name: 'Long Island Tea',
    ingredients: [
      {
        name: 'Vodka',
        quantity: '1/2 oz'
      },
      {
        name: 'Light rum',
        quantity: '1/2 oz'
      },
      {
        name: 'Gin',
        quantity: '1/2 oz'
      },
      {
        name: 'Tequila',
        quantity: '1/2 oz'
      },
      {
        name: 'Lemon',
        quantity: 'Juice of 1/2'
      },
      {
        name: 'Coca-Cola',
        quantity: '1 splash'
      },
    ],
    recipe: 'Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.',
    imageUrl: 'https://images.unsplash.com/photo-1485265449635-ca623a55e95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 10,
    name: 'Pina Colada',
    ingredients: [
      {
        name: 'Light rum',
        quantity: '3 oz'
      },
      {
        name: 'Coconut milk',
        quantity: '3 tblsp'
      },
      {
        name: 'Pineapple',
        quantity: '3 tblsp '
      }
    ],
    recipe: 'Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.',
    imageUrl: 'https://images.unsplash.com/photo-1596392301391-e8622b210bd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
  }
]

module.exports.cocktails = cocktails;


// import fetch from "node-fetch";

// const accessKey = 'ly2LTLeuVGmPTt65vYz6nAmDdXNZnnB2irE0gS4j_1o';

// const fetchImage = cocktailName => {
//   const UnsplashURL = `https://api.unsplash.com/search/photos?&query=${cocktailName}&client_id=${accessKey}`;
//   fetch(UnsplashURL)
//     .then(res => res.json())
//     .then(data => {
//       const imageUrl = data.results[0].urls.regular;
//       return imageUrl;
//     });
// }

// console.log(`fetchImage: ${fetchImage('Gin&Tonic')}!`);

const newC = {
  id: 10,
  name: 'Pina Colada',
  ingredients: [
    {
      name: 'Light rum',
      quantity: '3 oz'
    },
    {
      name: 'Coconut milk',
      quantity: '3 tblsp'
    },
    {
      name: 'Pineapple',
      quantity: '3 tblsp '
    }
  ],
  recipe: 'Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.'
};

newnewC = {
  id: 9,
  name: 'Long Island Tea',
  ingredients: [
    {
      name: 'Vodka',
      quantity: '1/2 oz'
    },
    {
      name: 'Light rum',
      quantity: '1/2 oz'
    },
    {
      name: 'Gin',
      quantity: '1/2 oz'
    },
    {
      name: 'Tequila',
      quantity: '1/2 oz'
    },
    {
      name: 'Lemon',
      quantity: 'Juice of 1/2'
    },
    {
      name: 'Coca-Cola',
      quantity: '1 splash'
    },
  ],
  recipe: 'Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.'
}