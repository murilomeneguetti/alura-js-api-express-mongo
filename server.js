//http é uma biblioteca nativa do node
import http from "http";

//porta 3000 onde a conexão vai acontecer
const PORT = 3000;

const rotas = {
    '/': 'Curso de Node.js Express API',
    '/livros': 'Entrei na rota livros',
    '/autores': 'Entrei na rota autores'
};

// Através do método createServer toda vez que o servidor HTTP receber uma requisição, a função de callback passada para o método será executada.
const server = http.createServer((req, res) => {
    //configurando o cabeçalho da requisição http
    res.writeHead(200, {"Content-Type": "text/plain"});
    //valor que está sendo enviado na resposta
    //envia o valor que está salvo no objeto rotas, dependendo da url informada
    res.end(rotas[req.url])
})

server.listen(PORT, () => {
    console.log("servidor escutando!");
});
