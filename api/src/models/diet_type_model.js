const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("diet_type", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
