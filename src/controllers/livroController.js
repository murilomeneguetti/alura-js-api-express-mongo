//dentro do livroController, vamos centralizar toda a lógica relacionada às ações que podem ser feitas em um livro (o que as rotas vão chamar para executar as operações e o manejo das requisições e das respostas correspondentes)

//como o controlador faz uma interface entre as requisições e o que vai acontecer em casa requisição, precisamos passar a importação do modelo livro pra cá
import livro from "../models/Livro.js";

//controle vai ser uma classe com vários métodos dentro, um para cada operação
class LivroController {
    
    //usamos static quando queremos usar métodos de uma classe sem ter q instanciar ela. Não precisa criar um new LivroController para usar o método
    static async listarLivros (req, res) {
        const listaLivros = await livro.find({});
        //.send manda informações mais simples, no caso um texto
        res.status(200).json(listaLivros);
    }
    
};

export default LivroController;
