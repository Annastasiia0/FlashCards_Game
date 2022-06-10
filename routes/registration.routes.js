const registration = require('express').Router();
const Input = require('../views/Input');

// const Main = require('../views/Main');
// const Error = require('../views/Error');

registration.get('/', async (req, res) => { //поменять на пост
  // const newUser = await Model.registration('lexa', 'adfad', 'ads@sdf.ru');
  // console.log(newUser);
  res.renderComponent(Input);
  // res.send(newUser.username);
});

registration.get('/error', (req, res) => {
  res.renderComponent(Error);
});

module.exports = registration;
