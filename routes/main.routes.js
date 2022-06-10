const mainRouter = require('express').Router();
const Model = require('../Model');

const Main = require('../views/Main');
const Error = require('../views/Error');

mainRouter.get('/', async (req, res) => {
  const themes = await Model.getThemes();
  // console.log(themes);
  res.renderComponent(Main, { themes });
  // res.send(JSON.stringify(themes));
});

mainRouter.get('/error', (req, res) => {
  res.renderComponent(Error);
});

module.exports = mainRouter;
