var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController.js");

router.get("/top-5-pontuacao", function (req, res){
    medidaController.buscarTop5Pontuacao(req, res);
});

module.exports = router;