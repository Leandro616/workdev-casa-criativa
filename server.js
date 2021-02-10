// express - cria e configura o servidor 
// nodemon - monitora o node e reinicia o servidor a cada atualização no arquivo


// express cria e configura meu servidor
const express = require("express");
const server = express();

// array de ideias
const ideas = [
    {
        img:"https://www.flaticon.com/svg/static/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam",
        url: "https:rocketseat.com.br"
    },
    {
        img:"https://www.flaticon.com/svg/static/icons/svg/2729/2729005.svg",
        title: "Exercicios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam",
        url: "https:rocketseat.com.br"
    },
    {
        img:"https://www.flaticon.com/svg/static/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam",
        url: "https:rocketseat.com.br"
    },
    {
        img:"https://www.flaticon.com/svg/vstatic/svg/2933/2933498.svg?token=exp=1612990578~hmac=0896a3decfb7b0cf04a68385789a8407",
        title: "Games",
        category: "Diversão",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam",
        url: "https:rocketseat.com.br"
    },
]



// configura os arqivos estaticos(css, scripts, imagens) em uma pasta
server.use(express.static("public"));

// configura o nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,

})

// rota
// captura o pedido do cliente para responder
server.get("/", function(req, res) {
    return res.render("index.html");
});

server.get("/ideias", function(req, res) {
    return res.render("ideias.html");
});

// servidor ligado na porta 3000
server.listen(3000);

