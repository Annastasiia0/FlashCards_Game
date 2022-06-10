require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');
const mainRouter = require('./routes/main.routes');
const registration = require('./routes/registration.routes');
const login = require('./routes/login.routes');
const question = require('./routes/question.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.locals.title = 'Simplest possible AJAX';

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// функция настройки экспресса
expressConfig(app);

// подключаем роутеры
app.use(mainRouter);  // роутер главной страницы
app.use('/registration', registration);
app.use('/login', login);
app.use('/questions', question);
// app.use('/todo', todoRouter); // роутер списка задач (все url начинаются с /todo)

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

// app.get('/', (req, res) => res.send('You are beautiful!'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port', PORT);
});
