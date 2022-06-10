const express = require('express');
const reactSsrMiddleware = require('../middlewares/reactSsr');

function expressConfig(app) {
  // миддлварки (middlewares, промежуточные фукнции):

  // позволяет запрашивать статический контент
  // (файлы, которые лежат в / public) с нашего сервера
  app.use(express.static(`${__dirname}/../public`));

  // при отправке формы методом POST данные из формы приходят
  // не сервер в зашифрованном виде
  // эта миддлварка расшифровывает их и кладёт в req.body
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  app.use(reactSsrMiddleware);
}

module.exports = expressConfig;
