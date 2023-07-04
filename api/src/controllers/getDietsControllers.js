const axios = require("axios");
const { Diet_type } = require("../db");
const { API_KEY } = process.env;

// esta funcion contiene la logica de la ruta (GET | /diets) que va a traer todas las dietas

const getAllDietsController = async () => {
  // TRAERNOS TODAS LAS DIETAS DE LA API

  const apiInformation = await axios.get(
    `http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`
  );

  // accedo a los resultado de la data de la api
  const apiInformationResults = apiInformation.data.results;

  // solamente requiero las dietas de los resultados, las saco un nivel

  const allDietsApi = apiInformationResults.flatMap((data) => data.diets);

  // Funcion para eliminar las diets repetidas
  // se genere un nuevo arreglo

  const removeDuplicateDiets = (arr) => {
    return Array.from(new Set(arr));
  };

  // todas las diets unicas sin estar repetidas
  const dietsApi = removeDuplicateDiets(allDietsApi);

  // lo que quiero con cada una de esas dietas es buscarla en la base de datos si exite una dieta con ese nombre y si no la va a crear

  // El método findOne() busca un único registro en la base de datos que cumpla con ciertos criterios de búsqueda

  // diet representa cada elemento del array

  dietsApi.forEach(async (diet) => {
    const findInDataBase = await Diet_type.findOne({
      /*condicon de busqueda*/ where: { name: diet },
    });

    if (!findInDataBase) {
      await Diet_type.create({ name: diet });
    }
  });

  // devulevo todo lo que hay en el modelo Diet_type

  return await Diet_type.findAll();
};

module.exports = getAllDietsController;
