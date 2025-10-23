const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

let dados = []; // array em memória para armazenar dados

// Rota para adicionar dados
app.post('/dados', (req, res) => {
  const { nome, valor } = req.body;
  if (!nome || !valor) {
    return res.status(400).json({ erro: 'Nome e valor são obrigatórios' });
  }
  const novoDado = { id: dados.length + 1, nome, valor };
  dados.push(novoDado);
  res.status(201).json(novoDado);
});

// Rota para listar todos os dados
app.get('/dados', (req, res) => {
  res.json(dados);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
