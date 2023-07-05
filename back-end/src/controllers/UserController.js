const userService = require('../services/userService');
const { response } = require('../utils/responseUtils');

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(response(200, "Fetch users successfully", users));
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

module.exports = {
  getUsers
}