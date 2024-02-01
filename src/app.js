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

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    //método splice deleta um elemento específico do array
    //passamos como parametro o indice do elemento a ser removido e o número de elementos que queremos remover
    livros.splice(index, 1);
    res.status(200).send('livro removido com sucesso!');
})

export default app;
