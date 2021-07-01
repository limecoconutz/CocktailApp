const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');
const cocktails = require('../db/cocktails.js');
const createCocktail = require('./utils').createCocktail;

router.get('/', (req, res, next) => {
  res.json(cocktails);
});

router.get('/:id', (req, res, next) => {
  const foundCocktail = cocktails.cocktails.find(cocktail => cocktail.id === req.params.id);
  if(!foundCocktail) {
    return res.json('Not Found').status(404);
  }
  res.json(foundCocktail);
});

router.post('/', (req, res, next) => {
  const newCocktail = createCocktail(req.body);
  cocktails.cocktails.push(newCocktail);
  return res.status(201).json(cocktails);
});

module.exports = router;

