const express = require('express');
const router = express.Router();
const petController = require("../controllers/pets")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(petController.listarPets());
});
router.get('/:index', function(req, res, next) {
  const {index} = req.params
  console.log(req.params)
  res.json(petController.listarUmPet(index));
});

module.exports = router;
