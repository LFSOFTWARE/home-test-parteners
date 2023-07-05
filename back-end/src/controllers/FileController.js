const userService = require('../services/userService');
const { response } = require('../utils/responseUtils');

const create = async (req, res) => {
  try {
    res.status(201).json(response(201, "create users successfully"));
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message, error: error.message });
  }
};

module.exports = {
  create
}