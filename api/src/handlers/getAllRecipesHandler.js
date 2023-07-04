// ⭐️ ESTE ARCHIVO MANEJA LA SOLICITUD DE OBTENER TODAS LAS RECETAS O UN RECETA ESPECIFICA POR NOMBRE⭐️

const getAllRecipesController = require("../controllers/getAllRecipesController");
const getRecipeByNameController = require("../controllers/getRecipeByNameController");

const getAllRecipesHandler = async (req, res) => {
  try {
    //destructuro la propiedad name del objeto req.query
    const { name } = req.query;

    // operador ternario

    //  la condición es name. Si name tiene un valor, se considera una condición verdadera, si es verdadera se ejecuta la primera condicion

    // pasandole por argumento name, este controller se encarga de buscar y devolver la receta con el nombre especificado

    const result = name
      ? await getRecipeByNameController(name)
      : await getAllRecipesController();

    // si es false se ejecuta esta condicion

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json("hola");
  }
};

module.exports = getAllRecipesHandler;
