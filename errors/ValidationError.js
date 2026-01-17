// errors/ValidationError.js
import AppError from './AppError';

export default class ValidationError extends AppError {
  constructor(message) {
    super(message, 400);
  }
}
