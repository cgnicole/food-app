// ⭐️ EN ESTE ARCHIVO DEFINE COMO MANEJAR LA RUTA ⭐️

const { Router } = require("express");

const getAllRecipesHandler = require("../handlers/getAllRecipesHandler");

const postRecipeHandler = require("../handlers/postRecipeHandler");

const getRecipeByIdHandler = require("../handlers/getRecipeByIdHandler");

// inizializo el router
const recipesRouter = Router();

// POST PARA CREAR LA RECIPE
recipesRouter.post("/", postRecipeHandler);

// GET PARA TRAER TODAS LAS RECIPES /  O TRAERLAS POR NOMBRE
recipesRouter.get("/", getAllRecipesHandler);

// GET PARA TRAER LAS RECETAS POR ID
recipesRouter.get("/:id", getRecipeByIdHandler);

module.exports = recipesRouter;
