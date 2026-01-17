// routes/cards.js
import { Router } from 'express';
import {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} from '../controllers/cards';

const router = Router();

// GET /cards — retorna todos os cards
router.get('/', getCards);

// POST /cards — cria um novo card
router.post('/', createCard);

// DELETE /cards/:cardId — deleta um card
router.delete('/:cardId', deleteCard);

// PUT /cards/:cardId/likes — curte um card
router.put('/:cardId/likes', likeCard);

// DELETE /cards/:cardId/likes — remove curtida
router.delete('/:cardId/likes', dislikeCard);

export default router;
