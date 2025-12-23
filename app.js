// app.js
const express = require('express');
const app = express();

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

// rota inexistente
app.use((req, res) => {
  res.status(404).send({ message: 'Recurso requisitado não encontrado' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
