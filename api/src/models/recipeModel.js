//  DataTypes es algo nativo de sequelize  para poder seleccionar le tipo con el que voy a trabajar

const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        //id numerico,  generación de identificadores únicos y aleatorios.
        type: DataTypes.UUID,

        allowNull: false,

        // tabla unica
        primaryKey: true,

        // UUIDV4 son cinco grupos de caracteres hexadecimales separados por guiones

        defaultValue: DataTypes.UUIDV4,

        // unique indica que los valores del campo id deben ser unicos en la tabla
        unique: true,
      },

      name: {
        type: DataTypes.STRING,

        //Cuando "allowNull" se establece en "false", significa que el campo no permite valores nulos
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
      createdDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      // timestamps es para que no nos muestre el paso a paso de lo que se esta realizando en la terminal
      timestamps: false,
    }
  );
};
