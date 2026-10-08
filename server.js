const express = require('express');
const cors = require('cors');
const conexao = require('./db.js');

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ mensagem: "API Sistema de Música funcionando!" });
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

app.get("/artistas", (req, res) => {
    const sql = "SELECT * FROM artistas";

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ erro: "Erro ao listar artistas" });
        } 
            res.status(200).json(resultado);
    });
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});