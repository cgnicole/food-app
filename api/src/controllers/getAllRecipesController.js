const axios = require("axios");
const { Recipe, Diet_type } = require("../db");

const getAllRecipesController = async () => {
  // BUSCAR DATOS EN LA BASE DE DATOS

  const dataBaseRecipes = await Recipe.findAll({
    include: {
      // relacion con el modelo
      model: Diet_type,
      attributes: ["name"],
    },
  });

  // BUSCAR EN LA API NOS TRAE TODA LA INFO

  const apiRecipesInformation = await axios.get(
    "http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apikey=496f6a790e23440aacd6d67ae0be2662"
  );

  // TOMAMOS LOS RESULTADOS DE LA INFO

  const apiRecipesData = apiRecipesInformation.data.results;

  // FILTRAMOS LOS DATOS DE LA API , SOLO USAMOS LOS DEL MODELO

  // ITERAMOS CON EL METODO MAP AL ARRAY QUE TIENE LA DATA

  // por cada elemento del array y retornará un nuevo objeto con las propiedades

  const apiRecipesFiltered = apiRecipesData.map((recipe) => {
    return {
      id: recipe.id,
      name: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      // accede al primer elemento del array
      step_by_step: recipe.analyzedInstructions[0]?.steps.map((steps) => {
        return {
          number: steps.number,
          steps: steps.step,
        };
      }),
      health_score: recipe.healthScore,
      createdDb: recipe.createdDb,
    };
  });

  // JUNTAMOS LOS RESULTADOS DE API Y DE LA BASE DE DATOS

  const allRecipes = [...apiRecipesFiltered, ...dataBaseRecipes];

  return allRecipes;
};

module.exports = getAllRecipesController;
