const mainRouter = require('express').Router();

// const Main = require('../views/Main');
// const Error = require('../views/Error');

mainRouter.get('/', (req, res) => {
  // res.renderComponent(Main);
  res.send('You are beautiful!');
});

mainRouter.get('/error', (req, res) => {
  res.renderComponent(Error);
});

module.exports = mainRouter;
