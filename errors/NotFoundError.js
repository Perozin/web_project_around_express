// errors/NotFoundError.js
import AppError from './AppError';

export default class NotFoundError extends AppError {
  constructor(message) {
    super(message, 404);
  }
}
