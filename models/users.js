// models/user.js
import mongoose from 'mongoose';
import { urlRegex } from '../utils/constants';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: 'Avatar deve ser uma URL válida',
    },
  },
});

export default mongoose.model('user', userSchema);
