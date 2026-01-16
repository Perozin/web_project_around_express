// controllers/cards.js
import Card from '../models/cards.js';
import { NotFoundError } from '../errors/NotFoundError.js';

// retorna todos os cartões
export const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.status(200).json(cards))
    .catch(next);
};

// cria um novo cartão
export const createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => res.status(201).json(card))
    .catch(next);
};

// deleta um cartão por _id
export const deleteCard = (req, res, next) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail(() => {
      throw new NotFoundError('Card não encontrado');
    })
    .then((card) => res.status(200).json(card))
    .catch(next);
};

// curtir card
export const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      throw new NotFoundError('Card não encontrado');
    })
    .then((card) => res.status(200).json(card))
    .catch(next);
};

// descurtir card
export const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      throw new NotFoundError('Card não encontrado');
    })
    .then((card) => res.status(200).json(card))
    .catch(next);
};
