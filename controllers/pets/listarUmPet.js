const modelPet = require("../../models/pets");
module.exports = (index) => {
  const pet = modelPet.retornaUmPet(index);
  //   Faria algum tratamento no código se necessário
  return pet;
};
