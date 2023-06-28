const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primarykey: true,
      defaultValue: DataTypes.UUID4,
      unique: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    health_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    step_by_step: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
