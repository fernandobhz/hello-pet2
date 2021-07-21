const petsModel = require("../../models/petsModel");

const listarTodosPets = () => {
  const lista = petsModel.listaPets();

  return lista;
}

module.exports = listarTodosPets;