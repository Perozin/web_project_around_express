const fs = require('fs');

function readJsonFile(filePath, res, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ocorreu um erro no servidor' });
      return;
    }

    callback(JSON.parse(data));
  });
}

module.exports = readJsonFile;
