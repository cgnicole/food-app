const getAllDietsController = require("../controllers/getDietsControllers");

// manejo del controller

const getDietsHandler = async (req, res) => {
  try {
    const allDiets = await getAllDietsController();
    res.status(200).json(allDiets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDietsHandler;
