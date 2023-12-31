const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

//  LAS VARIBLES DE ENTORNO
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// CONEXION DE BASE DE DATOS y BACK POR EL ORM
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);

// LEÈ TODOS LOS ARCHIVOS DE LA CARPETA MODELS, los requerimos y agregamos al arreglo modelDefiners

const modelDefiners = [];
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  ) // se especifica que se agregen sin el .js
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos.
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Recipe, Diet_type } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// relacion de modelos, UNA RECETA PUEDE TENER MUCHOS TIPOS DE DIETAS Y LAS DIETAS PUEDEN ESTAS EN MUCHAS RECETAS

Recipe.belongsToMany(Diet_type, { through: "recipe_diet" });
Diet_type.belongsToMany(Recipe, { through: "recipe_diet" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
