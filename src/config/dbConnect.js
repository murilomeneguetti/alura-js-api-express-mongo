import mongoose from "mongoose";

async function conectaNaDatabase() {
    //método do mongoose para conectar com o banco mongodb
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDatabase;
