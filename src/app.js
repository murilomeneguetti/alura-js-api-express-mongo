import express from "express";

//executando e colocando o conjunto de código dentro da variavel app
const app = express();
//middleware: são usados para ter acesso às requisições e respostas no momento em que elas estão sendo feitas e fazer ações nelas, como modificar objetos, etc
//com express.json(), qualquer requisição que tenha como body um objeto compatível com json vai passar pelo middleware e convertido para json
//conversão precisa ser feita pq os dados do body da requisição http chegam como string
app.use(express.json());

//simulando a base de dados com um array de objetos de livros
const livros = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis'
    },
    {
        id: 2,
        titulo: 'O Hobbit'
    }
]

//passando para o express a responsabilidade de gerenciar as rotas
//.get é o método http para pegar dados
app.get('/', (req, res) => {
    //.send manda informações mais simples, no caso um texto
    res.status(200).send('Curso de Node.js');
});

//rota livros
app.get('/livros', (req, res) => {
    //.json manda a resposta no formato json
    res.status(200).json(livros);
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

export default app;