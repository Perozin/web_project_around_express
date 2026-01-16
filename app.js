// app.js
import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users.js';
import cardsRouter from './routes/cards.js';
import { AppError } from './errors/AppError.js';

const app = express();
const { PORT = 3000 } = process.env;

// conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/aroundb');

// middleware para parsing de JSON
app.use(express.json());

// middleware temporário de autorização
app.use((req, res, next) => {
  req.user = {
    _id: '69694f0847fd42210af58b47',
  };
  next();
});

// rotas
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

// rota inexistente
app.use((req, res, next) => {
  next(new AppError('Recurso não encontrado', 404));
});

// middleware global de tratamento de erros
app.use((err, req, res, next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  return res.status(500).json({ message: 'Ocorreu um erro no servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
