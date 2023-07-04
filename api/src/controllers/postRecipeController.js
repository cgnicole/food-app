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
  // DEVUELVE LA NUEVA RECETA  Y SE GUARDA EN LA DB EN RECIPE
  const newRecipe = await Recipe.create({
    name,
    image,
    summary,
    healt_score,
    step_by_step,

    // ESTOS PARAMETROS SE UTILIZAN PARA CREAR UN NUEVO REGISTRO EN LA DB
  });

  // busca en la DB el tipo de dieta
  const dietDb = await Diet_type.findAll({
    /*criterio de busqueda, en la consulta*/
    where: {
      // = valor
      name: diet,
    },
  });

  // si lo encuentra se agrega a la nueva receta
  if (dietDb) {
    await newRecipe.addDiet_type(dietDb);
  } else {
    console.log(`Diet '${Diet_type}' not found`);
  }
  return newRecipe;
};

module.exports = postRecipeController;
