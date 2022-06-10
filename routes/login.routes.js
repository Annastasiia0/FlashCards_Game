const login = require('express').Router();
const Model = require('../Model');

// const Main = require('../views/Main');
// const Error = require('../views/Error');

login.get('/', async (req, res) => { //поменять на пост
  const newUser = await Model.login('lexasd', 'adsdffad');
  console.log(newUser);
  // res.renderComponent(Main);
  res.send(newUser);
});

login.get('/error', (req, res) => {
  res.renderComponent(Error);
});

module.exports = login;
