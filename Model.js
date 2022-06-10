const { Op } = require('sequelize');
const {
  Theme, Card, Game, User,
} = require('./db/models');

class Model {
  static async getThemes() {
    const themes = await Theme.findAll();
    return themes.map((theme) => ({
      id: theme.dataValues.id,
      title: theme.dataValues.title,
    }));
  }

  static async getCards(theme_id) {
    const cards = await Card.findAll({
      where: {
        theme_id,
      },
    });
    console.log(cards);
    return cards.map((card) => ({
      id: card.dataValues.id,
      question: card.dataValues.question,
      answer: card.dataValues.answer,
    }));
  }

  static async writeResult(user_id, theme_id, score) {
    const game = Game.create({ user_id, theme_id, score });
    return game;
  }

  static async findUser(username, email) {
    const user = await User.findOne({
      raw: true,
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });
    return user;
  }

  static async login(login, password) {
    const user = await this.findUser(login, login);
    if (!user) {
      return { notFound: true };
    }
    if (user.password === password) {
      return user;
    }
    return { notLogin: true };
  }

  static async registration(username, password, email) {
    const isRegistrated = await this.findUser(username, email);
    if (!isRegistrated) {
      const newUser = await User.create({ username, password, email });
      return newUser;
    }
    return false;
  }

  static async getStatsByUserID(user_id) {
    const games = await Game.findAll({
      raw: true,
      include: [Game.Users, Game.Themes],
      where: {
        user_id,
      },
    });
    // const themes = games.map((game) => {game.theme_id});
    // const cards = await this.getCards(game.theme_id);
    // console.log(games);
    return games.map((game) => ({
      userId: game['User.id'],
      userName: game['User.username'],
      themeName: game['Theme.title'],
      cardsLength: 10,
      score: game.score,
    }));
  }
}

// Model.login('danilsv', '123').then((data) => {
//   console.log(data);
// });

module.exports = Model;