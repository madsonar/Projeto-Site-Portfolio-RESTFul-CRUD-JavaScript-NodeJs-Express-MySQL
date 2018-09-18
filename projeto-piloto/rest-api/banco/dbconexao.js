var mysql = require('mysql');

var conexao = mysql.createPool({
    host: 'mysql.techsystemsolucoes.com.br',//'localhost'
    user: 'techsystemsolu01',//'root',
    password: 'node4040',//''
    database: 'techsystemsolu01'//'db_portfolio'
});

module.exports = conexao;