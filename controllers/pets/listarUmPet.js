const petsModel = require("../../models/petsModel");

const listarUmPet = (index) => {
  const lista = petsModel.listaPets();

  return lista[index];
}

module.exports = listarUmPet;