const getAllRecipesController = require("../controllers/getAllRecipesController");
const getRecipeByNameController = require("../controllers/getRecipeByNameController");

const getAllRecipesHandler = async (req, res) => {
  try {
    const { name } = req.query;

    const result = name
      ? await getRecipeByNameController(name)
      : await getAllRecipesController();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json("hola");
  }
};

module.exports = getAllRecipesHandler;
