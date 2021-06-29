const modelPet = require("../../models/pets");
module.exports = () => {
  const lista = modelPet.retornaListaDePets();
  //   Faria algum tratamento no código se necessário
  return lista;
};
