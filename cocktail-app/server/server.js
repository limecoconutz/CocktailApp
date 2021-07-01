const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const ingredientsRouter = require('./routes/ingredients');
const cocktailsRouter = require('./routes/cocktails');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cocktails', cocktailsRouter);
app.use('/ingredients', ingredientsRouter);

app.listen(port);
console.log(`listening on port: ${port}`);