const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usertheme extends Model {
    static associate({ User, Theme }) {
      Usertheme.belongsTo(User, { foreignKey: 'user_id' });
      Usertheme.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Usertheme.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    theme_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
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
    modelName: 'Usertheme',
    tableName: 'Userthemes',
  });
  return Usertheme;
};
