var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/contar", function (req, res) {
    usuarioController.contarUsuarios(req, res);
});

router.post("/registrarAcertos", function (req, res) {
    usuarioController.registrarAcertos(req, res);
});

module.exports = router;