const bancoDeDados = require("../database/bancoDeDados.json");

exports.listarServicos = () => bancoDeDados.servicos;
