// routes/cards.js
const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '../data/cards.json');

// GET /cards
router.get('/', (req, res) => {
  fs.readFile(cardsPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ocorreu um erro no servidor' });
      return;
    }

    res.send(JSON.parse(data));
  });
});

module.exports = router;