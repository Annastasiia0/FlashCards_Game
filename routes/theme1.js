const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { Card } = require('../db/models');
const ThemeOne = require('../views/Questions');

const router = express.Router();

router.get('/', async (req, res) => {
  const arrBase = await Card.findAll();
  const arrQuestion = arrBase.map((el) => el.question);

  console.log(arrBase);

  const home = React.createElement(ThemeOne, {
    arrQuestion,
  });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
