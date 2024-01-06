import app from "./src/app.js";

//porta 3000 onde a conexão vai acontecer
const PORT = 3000;

app.listen(PORT, () => {
    console.log('servidor escutando!');
})
