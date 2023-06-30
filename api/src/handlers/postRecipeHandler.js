const postRecipeController = require("../controllers/postRecipeController");

const postRecipeHandler = async (req, res) => {
  try {
    const { name, image, summary, healt_score, step_by_step } = req.body;

    const newRecipe = await postRecipeController(
      name,
      image,
      summary,
      healt_score,
      step_by_step
    );
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postRecipeHandler;
