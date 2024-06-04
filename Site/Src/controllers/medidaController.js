var medidaModel = require("../models/medidaModel.js");

function buscarTop5Pontuacao(req, res) {
    console.log(`Recuperando top 5 pontuação`);

    medidaModel.buscarTop5Pontuacao().then(function (resultado){
        console.log("Resultado da consulta:", resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao buscar o top 5 da pontuação.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarTop5Pontuacao
}