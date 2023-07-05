const { Diet_type } = require("../db");

const postDietController = async (name) => {
  const newDiet = await Diet_type.create({
    name,
  });
  return newDiet;
};

module.exports = postDietController;
