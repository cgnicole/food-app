const { Router } = require("express");
const recipesRouter = require("../routes/recipesRouter");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// este es el enrutador
const dietsRouter = require("./dietsRouter");

// creacion enrutador principal
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// se configura el enrutador router para que use el enrutador dietsrouter cuando acceda a la ruta "/diets"
router.use("/diets", dietsRouter);
router.use("/recipes", recipesRouter);

module.exports = router;
