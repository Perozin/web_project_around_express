// routes/users.js
const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

// GET /users
router.get('/', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ocorreu um erro no servidor' });
      return;
    }

    res.send(JSON.parse(data));
  });
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ocorreu um erro no servidor' });
      return;
    }

    const users = JSON.parse(data);
    const user = users.find((item) => item._id === id);

    if (!user) {
      res.status(404).send({ message: 'ID do usuário não encontrado' });
      return;
    }

    res.send(user);
  });
});

module.exports = router;
