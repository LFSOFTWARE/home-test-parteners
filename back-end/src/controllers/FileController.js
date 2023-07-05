const { parseCSVToJSON, response } = require("../utils");
const userService = require('../services/userService');

class FileController {
  create = async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
      }

      const results = await parseCSVToJSON(file.buffer);

      const createdUsers = await userService.createUserLote(results)

      res.json(response(200, "The file was successfully uploaded", createdUsers));
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message, error: error.message });
    }
  };


}
module.exports = new FileController()