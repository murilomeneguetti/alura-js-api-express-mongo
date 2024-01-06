import express from "express";

//executando e colocando o conjunto de código dentro da variavel app
const app = express();

//passando para o express a responsabilidade de gerenciar as rotas
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js');
});

export default app;