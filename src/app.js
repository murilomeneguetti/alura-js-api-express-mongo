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

//rota livros
app.get('/livros', async (req, res) => {
    //.find é um método do mongoose que vai se conectar com o banco mongo no atlas e vai buscar tudo que encontrar na coleção livros, pq nenhuma especificação foi passada dentro
    const listaLivros = await livro.find({});
    //.json manda a resposta no formato json
    res.status(200).json(listaLivros);
});

//configurando rota para consultar um livro específico
//como o id do livro é variável, a rota fica com :id
app.get('/livros/:id', (req, res) => {
    //req.params pega os parametros da rota
    const resultado = buscaLivro(req.params.id);
    res.status(200).json(livros[resultado]);
    //res.status(200).json(resultado);
})

//.post é o método http para criar dados
app.post('/livros', (req, res) => {
    //incluindo novo livro na lista
    //.body pega o corpo que foi enviado na requisição
    livros.push(req.body);
    //toda requisição tem q ter uma resposta
    //status 201: registro criado
    res.status(201).send('livro cadastrado com sucesso!');
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    //altera o livro com o nome do titulo passado no corpo da requisição
    livros[index].titulo = req.body.titulo;
    //retorna todo o array livros
    res.status(200).json(livros);
})

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    //método splice deleta um elemento específico do array
    //passamos como parametro o indice do elemento a ser removido e o número de elementos que queremos remover
    livros.splice(index, 1);
    res.status(200).send('livro removido com sucesso!');
})

export default app;
