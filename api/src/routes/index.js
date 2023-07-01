// ⭐️ EN ESTE ARCHIVO SE ENCARGA DE CONFIGURAR LOS ENRUTADORES PARA LAS DIFERENTES RUTAS ⭐️

const { Router } = require("express");

// esos son los enrutadores específicos que se utilizan para definir cómo manejar cada ruta en particular
const dietsRouter = require("./dietsRouter");
const recipesRouter = require("../routes/recipesRouter");

// creacion enrutador principal para manejar diferentes rutas
const router = Router();

// Configurar los routers

// aca se encarga de tulizar los enrutadores para las rutas
router.use("/diets", dietsRouter);
router.use("/recipes", recipesRouter);

module.exports = router;
