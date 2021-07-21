const servicosModel = require('../../models/servicos');

const listarTodosServicos = () => {
  const lista = servicosModel.listarServicos();

  return lista.map(item => item.toUpperCase());
};

module.exports = listarTodosServicos;
