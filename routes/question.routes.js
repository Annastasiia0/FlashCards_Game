const question = require('express').Router();
const Model = require('../Model');

const Questions = require('../views/Questions');
const Error = require('../views/Error');

question.post('/', async (req, res) => { //поменять на пост
  // console.log(req.body);
  const cards = await Model.getCards(req.body.themeID);
  // console.log(cards);
  // res.renderComponent(Questions, { cards });
  res.send(cards);
});

question.post('/card', async (req, res) => { //поменять на пост
  console.log(req.body.question);
  res.renderComponent(Questions, { question: req.body.question }, { doctype: false });
  // res.send('a');
});

question.get('/error', (req, res) => {
  res.renderComponent(Error);
});

module.exports = question;
