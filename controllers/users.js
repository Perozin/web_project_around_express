// controllers/users.js
import User from '../models/users.js';
import { NotFoundError } from '../errors/NotFoundError.js';

// retorna todos usuários
export const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).json(users))
    .catch(next);
};

// retorna um usuário por _id
export const getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail(() => {
      throw new NotFoundError('Usuário não encontrado');
    })
    .then((user) => res.status(200).json(user))
    .catch(next);
};

// cria um novo usuário
export const createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(201).json(user))
    .catch(next);
};

// atualiza perfil
export const updateUserProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      throw new NotFoundError('Usuário não encontrado');
    })
    .then((user) => res.status(200).json(user))
    .catch(next);
};

// atualiza avatar
export const updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      throw new NotFoundError('Usuário não encontrado');
    })
    .then((user) => res.status(200).json(user))
    .catch(next);
};
