const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('template', {
       id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
          },
      name: {
        type: DataTypes.STRING,
      },
      types: {
          type: DataTypes.STRING,
      },
      image: {
          type: DataTypes.STRING,
      },
      description: {
          type: DataTypes.TEXT,
      },
      rating:{
          type: DataTypes.DECIMAL,
      }
    });
  };
  
