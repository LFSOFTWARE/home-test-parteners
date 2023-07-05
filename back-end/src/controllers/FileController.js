const fs = require('fs');
const csv = require('csv-parser');
const { Readable } = require('stream');

const parseCSVToJSON = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const results = [];

    const stream = Readable.from(fileBuffer);

    stream
      .pipe(csv({ separator: ';' })) // Define o separador como ';'
      .on('data', (data) => {
        // Converte a string em um objeto com propriedades separadas
        const formattedData = {};

        for (const key in data) {
          const formattedKey = key.replace(/;/g, ''); // Remove o ponto e vírgula do nome da propriedade
          formattedData[formattedKey] = data[key];
        }
        results.push(formattedData);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

const create = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
    }

    const results = await parseCSVToJSON(file.buffer);

    // const createdUsers = await userService.createUsersFromCSV(results);

    res.json({ data: results });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message, error: error.message });
  }
};

module.exports = {
  create
};
