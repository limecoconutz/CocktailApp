const { nanoid } = require('nanoid');
const notFound = (item, id)=> `${item} with id of ${id} not found`;
const getItemById = (itemArr, id) => itemArr.find(item => item.id === id);

const createCocktail = (input, lastId) => {
  return {
    id: (lastId + 1).toString(),
    name: input.name,
    ingredients: input.ingredients,
    recipe: input.recipe,
    imageUrl: input.imageUrl
  }
}

module.exports = {
  notFound,
  getItemById,
  createCocktail
}