const express = require('express');//importei o express para utilizar no meu programa.

const app = express(); // intancie o objeto app na classe express ();

const produtos = [
    { nome: "Lápis", idade: 2.20 },
    { nome: "Cardeno", preco: 6.20 },
    { nome: "Caneta", preco: 7.90 },
];
const filmes = [
    { nome: "Matrix"},
    { Genero: "Ficcção cientifica",},
];
const musica = [
    { nome: "Enemy"},
    { Genero: "Pop Rock",},
];

app.get('/', (req, res) => {
    console.log("Alguém acionou a rota raiz.");
    return res.send("Servidor esta funcionado corretamente")
});

// Rotas referente ao crud de produtos

app.get('/produtos', (req, res) => {
    return res.json(produtos);
});
app.get('/filmes', (req, res) => {
    return res.json(filmes);
});
app.get('/musica', (req, res) => {
    return res.json(musica);
});

//http://localhost:3000
app.listen(3000);
console.log("Rodando o servidor");
