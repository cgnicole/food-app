const getAllRecipesController = require("./getAllRecipesController");

const getRecipeByNameController = async (name) => {
  //ME TRAIGO TODAS LAS RECETAS
  const allRecipes = await getAllRecipesController();

  //TRAIGO LA RECETA CON EL NOMBRE QUE ME PASAN
  const recipeByName = allRecipes.find((recipe) => recipe.name === name);

  return recipeByName;
};

module.exports = getRecipeByNameController;
