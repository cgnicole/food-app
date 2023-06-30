const { Router } = require("express");
const postRecipeHandler = require("../handlers/postRecipeHandler");
const recipesRouter = Router();

recipesRouter.post("/", postRecipeHandler);

module.exports = recipesRouter;
