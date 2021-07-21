const bancoDeDados = require("../database/bancoDeDados.json");

exports.listaPets = () => bancoDeDados.pets;