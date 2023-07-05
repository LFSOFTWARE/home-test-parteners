const { User } = require('../models');

async function getAllUsers(page, limit) {
  try {
    const offset = (page - 1) * limit;
    const users = await User.findAll({
      offset,
      limit,
    });
    return users;
  } catch (error) {
    throw new Error('Error while getting users');
  }
}

module.exports = {
  getAllUsers,
};