const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { User, Theme } = require('../db/models');

const Home = require('../views/Home');
// const Input = require('../views/Input');
const Themes = require('../views/Theme');

const router = express.Router();

router.get('/', async (req, res) => {
  res.redirect('/login');
});

/* GET home page. */
router.get('/login', async (req, res) => {
  const home = React.createElement(Home);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  const newUser = await User.create({
    name,
    password,
  });

  res.redirect('/theme');
});

router.get('/theme', async (req, res) => {
  const arrBase = await Theme.findAll();
  console.log(arrBase);
  const arrTitle = arrBase.map((el) => el.title);
  console.log(arrTitle);

  const home = React.createElement(Themes, {
    arrTitle,
  });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);

  // const theme = React.createElement(Themes);
  // const html = ReactDOMServer.renderToStaticMarkup(theme);
  // res.write('<!DOCTYPE html>');
  // res.end(html);
});

router.post('/theme', async (req, res) => {
  // const { name, password } = req.body;

  // res.redirect('/theme');
});

module.exports = router;
