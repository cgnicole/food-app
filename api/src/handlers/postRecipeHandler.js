// ⭐️ ESTE ARCHIVO MANEJA LA SOLICITUD DE CREACION DE UNA RECETA ⭐️

const postRecipeController = require("../controllers/postRecipeController");

const postRecipeHandler = async (req, res) => {
  // TRAEMOS LOS ATRUBUTOS DEL MODELO RECIPE
  try {
    // SE DESTRUCTURA
    const { name, image, summary, healt_score, step_by_step, diet } = req.body;

    // se le pasan los atributos para que el controlador pueda crear una nueva receta en la base de datos

    const newRecipe = await postRecipeController(
      name,
      image,
      summary,
      healt_score,
      step_by_step,
      diet
    );

    // SE DEVULEVE UN JSON CON LA NUEVA RECETA
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postRecipeHandler;
