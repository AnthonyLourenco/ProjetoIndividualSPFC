var database = require("../database/config");

function buscarTop5Pontuacao() {
    var instrucaoSql = `
    SELECT u.nome AS NomeUsuario, h.pontuacao AS Pontuacao
    FROM usuario u
    JOIN historico h ON u.idUsuario = h.fkUsuario ORDER BY pontuacao DESC
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTop5Pontuacao
}