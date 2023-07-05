const sequelize = require('sequelize');
const Connection = require('../../config/database');
const { User } = require('../models');

class UserService {
  async getAllUsers(page, limit, q) {
    try {
      const offset = (page - 1) * limit;
      let where = {}
      if (q) {
        where = {
          [sequelize.Op.or]: [
            { name: { [sequelize.Op.like]: `%${q}%` } },
            { city: { [sequelize.Op.like]: `%${q}%` } },
            { country: { [sequelize.Op.like]: `%${q}%` } },
            { favorite_sport: { [sequelize.Op.like]: `%${q}%` } },
          ],
        }
      }
      return await User.findAll({
        offset,
        limit,
        where
      });

    } catch (error) {
      throw new Error('Error while getting users' + error);
    }
  }


  async createUserLote(users) {
    try {
      return await this.createUsers(users);
    } catch (error) {
      console.error(error);
      throw new Error('Error while creating users');
    }
  }

  async createUsers(users) {
    let transaction;

    try {
      transaction = await Connection.transaction();

      const createdUsers = await User.bulkCreate(users, { transaction, returning: true });
      await transaction.commit();
      return createdUsers;
    } catch (error) {
      if (transaction) await transaction.rollback();
      console.error('Erro ao cadastrar usuários:', error);
    }
  }
}

module.exports = new UserService()