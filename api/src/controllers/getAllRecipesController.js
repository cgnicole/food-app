const axios = require("axios");
const { Recipe, Diet_type } = require("../db");

const getAllRecipesController = async () => {
  // BUSCAR DATOS EN LA BASE DE DATOS

  const dataBaseRecipes = await Recipe.findAll({
    include: {
      model: Diet_type,
      attributes: ["name"],
    },
  });

  // BUSCAR EN LA API NOS TRAE TODA LA INFO

  const apiRecipesInformation = await axios.get(
    "http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apikey=496f6a790e23440aacd6d67ae0be2662"
  );

  // TOMAMOS LOS RESULTADOS DE LA DATA Y DE LA INFO
  const apiRecipesData = apiRecipesInformation.data.results;

  // FILTRAMOS LOS DATOS DE LA PI, SOLO USAMOS LOS DEL MODELO
  const apiRecipesFiltered = apiRecipesData.map((recipe) => {
    return {
      id: recipe.id,
      name: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      step_by_step: recipe.analyzedInstructions[0]?.steps.map((steps) => {
        return {
          number: steps.number,
          steps: steps.step,
        };
      }),
      health_score: recipe.healthScore,
    };
  });

  // JUNTAMOS LOS RESULTADOS DE API Y DE LA BASE DE DATOS

  const allRecipes = [...apiRecipesFiltered, ...dataBaseRecipes];

  return allRecipes;
};

module.exports = getAllRecipesController;
