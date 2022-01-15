const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    pet_sex: {
      type: DataTypes.STRING, // options are 'male' or 'female' from dropdown menu
      allowNull: false,
    },
    pet_type: {
      type: DataTypes.STRING, // options are 'dog', 'cat', 'bird', 'lizard/snake', 'rodent', 'fish' from dropdown menu
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet'
  }
);

module.exports = Pet;
