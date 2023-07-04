// ⭐️ EN ESTE ARCHIVO DEFINE COMO MANEJAR LA RUTA ⭐️

const { Router } = require("express");

// importo el handler que maneja la solicitud
const getDietsHandler = require("../handlers/getDietsHandler");

// Se crea un enrutador mediante la invocación de la función Router()
const dietsRouter = Router();

// Se define una ruta GET en la raíz ("/")
// getDietsHandler maneja la solicitud
dietsRouter.get("/", getDietsHandler);

module.exports = dietsRouter;
