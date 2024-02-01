import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
}, {versionKey: false});

const autor = mongoose.model("autores", autorSchema);

//autor faz parte de livro
//vamos exportar dessa forma pq a partir de autorSchema eu posso importar tanto o autor quanto uma propriedade de livro
export { autor, autorSchema };
