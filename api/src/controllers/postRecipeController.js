// ⭐️ ESTE ARCHIVO CREA UNA RECETA EN LA BASE DE DATOS ⭐️

const { Recipe, Diet_type } = require("../db");

const postRecipeController = async (
  // TOMA LOS PARAMATROS NECESARIOS PARA CREAR UNA RECETA

  name,
  image,
  summary,
  healt_score,
  step_by_step,
  diet
) => {
  // DEVUELVE LA NUEVA RECETA  Y SE GUARDA EN LA DB EN EL MODELO RECIPE
  const newRecipe = await Recipe.create({
    name,
    image,
    summary,
    healt_score,
    step_by_step,

    // ESTOS PARAMETROS SE UTILIZAN PARA CREAR UN NUEVO REGISTRO EN LA DB
  });

  const dietDb = await Diet_type.findAll({
    where: {
      name: diet,
    },
  });

  if (dietDb) {
    await newRecipe.addDiet_type(dietDb);
  } else {
    console.log(`Diet '${Diet_type}' not found`);
  }
  return newRecipe;
};

module.exports = postRecipeController;
