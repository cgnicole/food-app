const { Router } = require("express");

const getDietsHandler = require("../handlers/getDietsHandler");

// creacion el router
const dietsRouter = Router();

dietsRouter.get("/", getDietsHandler);

module.exports = dietsRouter;
