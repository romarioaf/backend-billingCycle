/*
Mongoose é responsável por fazer a conexão com o mongodb
e mapear nossos objetos com o documentos do mongo
*/
const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/db_finance');
//module.exports = mongoose.connect('mongodb://usuario:senha@localhost/db_finance');


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum = "'VALUE' não é válido para o atributo"