const getAllRecipesController = require("../controllers/getAllRecipesController");

const getRecipeByIdControllers = async (id) => {
  //ME TRAIGO TODAS LAS RECETAS, PARA ESO YA CREE UN CONTROLADOR
  const allRecipes = await getAllRecipesController();

  //DE TODAS LAS RECETAS BUSCO LAS QUE TENGAN EL MISMO ID QUE ESTOY RECIBIENDO

  const recipeById = allRecipes.find((recipe) => {
    return recipe.id === id || recipe.id === Number(id); //NUMBER CONVIERTE EL ID DE STRING A NUMBERO
  });

  return recipeById;
};

module.exports = getRecipeByIdControllers;
