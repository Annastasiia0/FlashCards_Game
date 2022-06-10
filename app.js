const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('You are beautiful!'));

app.listen('3000', () => console.log('We got it'));
