const express = require('express');
const router = express.Router();
const ingredients = require('../db/ingredients.js');

router.get('/', (req, res, next) => {
  res.json(ingredients);
});

router.get('/:id', (req, res, next) => {
  const foundIngredient = ingredients.ingredients.find(ingredient => ingredient.id === Number(req.params.id));
  if(!foundIngredient) {
    return res.json('Not Found').status(404);
  }
  res.json(foundIngredient);
});
module.exports = router;