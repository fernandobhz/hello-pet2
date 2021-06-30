const model = require('../models/model');

exports.listarTodosServicos = () => {
  const lista = model.listarTodosServicos();

  return lista.map(item => item.toUpperCase());
}
