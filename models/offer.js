'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Offer.belongsTo(models.User, { foreignKey: 'userId' })    }
    }
  }
  Offer.init({
    userID: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    datePosted: DataTypes.DATE,
    photo: DataTypes.STRING,
    category: DataTypes.STRING,
    condition: DataTypes.STRING,
    borough: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Offer',
    tableName: 'offers'
  });
  return Offer;
};