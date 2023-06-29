const getAllDietsController = require("../controllers/getDietsControllers");

// archivo de procesamiento de errores
// "handlers" (manejadores) de los controladores (controllers)
// se realizo una funcion asincrona
// await palabra clave que indica que se esta realizando una funcion asincrona o deve devolver una promesa

const getDietsHandler = async (req, res) => {
  try {
    const allDiets = await getAllDietsController();
    res.status(200).json(allDiets);
  } catch (error) {
    res.status(400).json({ error: "hola" });
  }
};

module.exports = getDietsHandler;
