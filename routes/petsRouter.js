const express = require("express");
const petsController = require("../controllers/pets/index");
const { route } = require("./servicosRouter");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(petsController.listarTodosPets());
})

router.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(petsController.listarUmPet(index));
})

module.exports = router;