// routes/users.js
import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} from '../controllers/users.js';

const router = Router();

// GET /users — retorna todos os usuários
router.get('/', getUsers);

// GET /users/:userId — retorna usuário por _id
router.get('/:userId', getUserById);

// POST /users — cria um novo usuário
router.post('/', createUser);

// PATCH /users/me — atualiza perfil
router.patch('/me', updateUserProfile);

// PATCH /users/me/avatar — atualiza avatar
router.patch('/me/avatar', updateUserAvatar);

export default router;
