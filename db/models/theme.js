const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Card, Usertheme }) {
      Theme.hasMany(Usertheme, { foreignKey: 'tehme_id' });
      Theme.hasMany(Card, { foreignKey: 'theme_id' });
    }
  }
  Theme.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Theme',
    tableName: 'Themes',
  });
  return Theme;
};
