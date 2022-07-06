const { DataTypes } = require('sequelize');

const Template = (sequelize)=>{
  const Model = sequelize.define('template', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    skin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating:{
      type: DataTypes.DECIMAL,
    }
  });

  return Model
};

module.exports = Template


