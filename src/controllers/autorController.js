//como o controlador faz uma interface entre as requisições e o que vai acontecer em casa requisição, precisamos passar a importação do modelo autor pra cá
//como 2 módulos foram exportados, temos que importar entre chaves porque é uma lista de módulos
import {autor} from "../models/Autor.js";

//controle vai ser uma classe com vários métodos dentro, um para cada operação
class AutorController {
    
    //usamos static quando queremos usar métodos de uma classe sem ter q instanciar ela. Não precisa criar um new AutorController para usar o método
    static async listarAutores (req, res) {
        try {
            const listaAutores = await autor.find({});
            //.send manda informações mais simples, no caso um texto
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async listarAutorPorId (req, res) {
        try {
            //req.params pega os parametros da rota
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição do autor` });
        }
    };

    static async cadastrarAutor (req, res) {
        //usando try catch para manejar erros e sucessos
        try {
            //.create retorna o objeto que foi criado
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({  message: `${erro.message} - falha ao cadastrar autor` })
        }
    };

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'autor atualizado' });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na atualização` });
        }
    };

    static async excluirAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: 'autor excluido com sucesso' });
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na execução` });
        }
    };
    
};

export default AutorController;
