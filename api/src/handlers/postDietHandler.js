const postDietController = require("../controllers/postDietController");

const postDietHandler = async (req, res) => {
  const { name } = req.body;

  try {
    const newDiet = await postDietController(name);

    res.status(200).json(newDiet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postDietHandler;
