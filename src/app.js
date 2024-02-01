import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

//método do mongoose para mostrar erro de conexão
conexao.on('error', (erro) => {
    console.error("erro de conexão", erro);
});

//método do mongoose para mostrar que a conexão foi feita
conexao.once('open', () => {
    console.log('Conexão com o banco feita com sucesso');
});

//executando e colocando o conjunto de código dentro da variavel app
const app = express();
//enviando o nosso servidor express como parametro para as rotas
routes(app);


export default app;
