const UserService = require('../services/userService');
const { response } = require('../utils/responseUtils');

class UserController{
   find = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 50;
      const q = req.query.q ;
  
      const users = await UserService.getAllUsers(page, limit, q);
  
      res.status(200).json(response(200, "Fetch users successfully", users));
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message, error: error.message });
    }
  };
}

module.exports = new UserController()