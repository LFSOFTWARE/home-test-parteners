const userService = require('../services/userService');
const { response } = require('../utils/responseUtils');

const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;

    const users = await userService.getAllUsers(page, limit);
    res.status(200).json(response(200, "Fetch users successfully", users));
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message, error: error.message });
  }
};

module.exports = {
  getUsers
}