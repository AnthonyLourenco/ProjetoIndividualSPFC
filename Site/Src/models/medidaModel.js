var database = require("../database/config");

function buscarTop5Pontuacao() {
    var instrucaoSql = `
    SELECT u.nome AS nome, h.pontuacao AS pontuacao
    FROM usuario u
    JOIN historico h ON u.nome = h.fkUsuario ORDER BY pontuacao DESC LIMIT 10
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTop5Pontuacao
}