const { UtilsFile, response } = require("../utils");
const UserService = require('../services/userService');

class FileController {
  create = async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'The file is mandatory' });
      }

      const results = await UtilsFile.parseCSVToJSON(file.buffer);

      const createdUsers = await UserService.createUserLote(results)

      res.json(response(200, "The file was successfully uploaded", createdUsers));
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message, error: error.message });
    }
  };


}
module.exports = new FileController()