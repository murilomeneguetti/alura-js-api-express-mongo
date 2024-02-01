import express from "express";
import livros from "./livrosRoutes.js";

//função que vai criar um ponto de entrada
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send('Curso de Node.js'));

    //use é usado para incluir middlewares na instancia do express
    //middleware: são usados para ter acesso às requisições e respostas no momento em que elas estão sendo feitas e fazer ações nelas, como modificar objetos, etc
    //com express.json(), qualquer requisição que tenha como body um objeto compatível com json vai passar pelo middleware e convertido para json
    //conversão precisa ser feita pq os dados do body da requisição http chegam como string
    app.use(express.json(), livros);
};

export default routes;
