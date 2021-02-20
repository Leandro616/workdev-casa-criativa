const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db');

db.serialize(function() {
    // criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    /* // inserir dados
    const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,    
            link
        ) VALUES(?,?,?,?,?);
    `

    const values = [
        "https://cdn.icon-icons.com/icons2/897/PNG/512/1-04_icon-icons.com_69203.png",
        "Games",
        "Diversão",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam",
        "https:rocketseat.com.br"
    ]

    db.run(query, values, function(err) {
        if (err) return console.log(err)

        console.log(this)
    })
    
    // consultar dados
    db.all("SELECT * FROM ideas", function(err, rows) {
        if (err) return console.log(err)
    
        console.log(rows)
    })

    // deletar dados
    db.run(`DELETE FROM ideas WHERE id = 2`, function(err, rows) {
        if (err) return console.log(err)
    
        console.log(rows)
    }) */
});

module.exports = db;