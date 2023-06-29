const axios = require("axios");
const { Recipe, Diet_type } = require("../db");
const { API_KEY } = process.env;

// esta funcion contiene la logica de la ruta (GET | /diets) que va a traer todas las dietas
const getAllDietsController = async () => {
  // TRAERNOS TODAS LAS DIETAS DE LA API

  const apiInformation = await axios.get(
    `http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`
  );

  const apiInformationResults = apiInformation.data.results;

  const allDietsApi = apiInformationResults.flatMap((data) => data.diets);

  // Funcion para eliminaar las diets repetidas

  const removeDuplicateDiets = (arr) => {
    return Array.from(new Set(arr));
  };

  // todas las diets unicas sin estar repetidas
  const dietsApi = removeDuplicateDiets(allDietsApi);

  // busca en la base de datos y si no esta los crea

  dietsApi.forEach(async (diet) => {
    const findInDataBase = await Diet_type.findOne({ where: { name: diet } });

    if (!findInDataBase) {
      await Diet_type.create({ name: diet });
    }
  });

  return await Diet_type.findAll();
};

module.exports = getAllDietsController;
