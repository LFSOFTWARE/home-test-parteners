const Connection = require('../../config/database');
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

async function createUsers(users) {
  let transaction;

  try {
    transaction = await Connection.transaction();

    await User.bulkCreate(users, { transaction });

    await transaction.commit();

  } catch (error) {
    if (transaction) await transaction.rollback();
    console.error('Erro ao cadastrar usuários:', error);
  }
}

async function createUserLote(users) {
  try {
    await createUsers(users);
  } catch (error) {
    console.error(error);
    throw new Error('Error while creating users');
  }
}
module.exports = {
  getAllUsers,
  createUserLote
};