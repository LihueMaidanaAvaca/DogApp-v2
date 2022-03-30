const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Dog', {
    id : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightmin: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    heightmax: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    weightmin: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    weightmax: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    lifespan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  });
};



