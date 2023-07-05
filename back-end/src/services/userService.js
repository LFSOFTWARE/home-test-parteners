const { User } = require('../models');

async function getAllUsers() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error while getting users');
  }
}

module.exports = {
  getAllUsers,
};