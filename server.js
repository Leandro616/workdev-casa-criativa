// modulos intalados
// express - cria e configura o servidor 
// nodemon - monitora o node e reinicia o servidor a cada atualização no arquivo
// nunjuks

// express cria e configura meu servidor
const express = require("express");
const server = express();

const db = require("./db");

// array de ideias
/* const ideas = [
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
        img:"https://cdn.icon-icons.com/icons2/897/PNG/512/1-04_icon-icons.com_69203.png",
        title: "Games",
        category: "Diversão",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam",
        url: "https:rocketseat.com.br"
    },
] */



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

    db.all("SELECT * FROM ideas", function(err, rows) {
        if (err) {
            console.log(err);
            return res.send("Erro no banco de dados!");
        }
        
        const ideasReversed = [...rows].reverse();
        let lastIdeas = [];

        for (let idea of ideasReversed) {
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea)
            }
        }

        return res.render("index.html", { ideas: lastIdeas });
    });
    
    
});

server.get("/ideias", function(req, res) {

    db.all("SELECT * FROM ideas", function(err, rows) {
        if (err) {
            console.log(err);
            return res.send("Erro no banco de dados!");
        }
            

        const ideas = rows
        return res.render("ideias.html", {ideas: ideas});
    })
});

// servidor ligado na porta 3000
server.listen(3000);

