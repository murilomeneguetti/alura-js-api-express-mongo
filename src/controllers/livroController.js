//dentro do livroController, vamos centralizar toda a lógica relacionada às ações que podem ser feitas em um livro (o que as rotas vão chamar para executar as operações e o manejo das requisições e das respostas correspondentes)

//como o controlador faz uma interface entre as requisições e o que vai acontecer em casa requisição, precisamos passar a importação do modelo livro pra cá
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

//controle vai ser uma classe com vários métodos dentro, um para cada operação
class LivroController {
    
    //usamos static quando queremos usar métodos de uma classe sem ter q instanciar ela. Não precisa criar um new LivroController para usar o método
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            //.send manda informações mais simples, no caso um texto
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async listarLivroPorId (req, res) {
        try {
            //req.params pega os parametros da rota
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição do livro` });
        }
    };

    static async cadastrarLivro (req, res) {
        //usando try catch para manejar erros e sucessos
        const novoLivro = req.body;
        try {
            //.create retorna o objeto que foi criado
            //const novoLivro = await livro.create(req.body);
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
        } catch (error) {
            res.status(500).json({  message: `${error.message} - falha ao cadastrar livro` })
        }
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'livro atualizado' });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na atualização` });
        }
    };

    static async excluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: 'livro excluido com sucesso' });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na execução` });
        }
    };

    //busca por parametro
    static async listarLivrosPorEditora (req, res) {
        const varEditora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: varEditora });
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na busca` });
        }
    };
    
};

export default LivroController;
