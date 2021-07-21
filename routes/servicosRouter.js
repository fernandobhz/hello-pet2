const express = require('express');
const servicosController = require("../controllers/servicos/index")
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json(servicosController.listarTodosServicos());
});

module.exports = router;
