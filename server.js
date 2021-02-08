// express - cria e configura o servidor 
// nodemon - monitora o node e reinicia o servidor a cada atualização no arquivo


// express cria e configura meu servidor
const express = require("express");
const server = express();

// configura os arqivos estaticos(css, scripts, imagens) em uma pasta
server.use(express.static("public"));

// rota
// captura o pedido do cliente para responder
server.get("/", function(req, res) {
    return res.sendFile(__dirname + "/index.html");
});

server.get("/ideias", function(req, res) {
    return res.sendFile(__dirname + "/ideias.html");
});

// servidor ligado na porta 3000
server.listen(3000);

