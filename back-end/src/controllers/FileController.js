const { parseCSVToJSON } = require("../utils");
const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
    }

    const results = await parseCSVToJSON(file.buffer);

    await userService.createUserLote(results)

    res.json({ data: 'ok' });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message, error: error.message });
  }
};

module.exports = {
  create
};
