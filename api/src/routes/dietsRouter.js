const { Router } = require("express");

// importo el controlador que tiene la logica para manejar la solicitud

const getDietsHandler = require("../handlers/getDietsHandler");

// Se crea una instancia del enrutador mediante la invocación de la función Router()
const dietsRouter = Router();

// Se define una ruta GET en la raíz ("/")
// getDietsHandler maneja la solicitud
dietsRouter.get("/", getDietsHandler);

module.exports = dietsRouter;
