const { Recipe } = require("../db");

const postRecipeController = async (
  name,
  image,
  summary,
  healt_score,
  step_by_step
) => {
  const newRecipe = await Recipe.create({
    name,
    image,
    summary,
    healt_score,
    step_by_step,
  });

  return newRecipe;
};

module.exports = postRecipeController;
