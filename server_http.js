//criar um servidor HTTP local para servir de ponto de conexão 
//e poder publicar as informações que nossa API vai fornecer
//novo arquivo server.js

//http é uma biblioteca nativa do node
import http from "http";

//porta 3000 onde a conexão vai acontecer
const PORT = 3000;

const server = http.createServer((req, res) => {
    //configurando o cabeçalho da requisição http
    res.writeHead(200, {"Content-Type": "text/plain"});
    //valor que está sendo enviado na resposta
    res.end("Curso de Node.js")
})

server.listen(PORT, () => {
    console.log("servidor escutando!");
});