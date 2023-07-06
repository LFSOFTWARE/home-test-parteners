const { response } = require('../src/utils/responseUtils');

const UserController = require('../src/controllers/UserController');
const UserService = require('../src/services/userService');

const users = [
  {
    "id": 1,
    "name": "Joe Smith",
    "city": "New York",
    "country": "USA",
    "favorite_sport": "skate",
    "createdAt": "2023-07-05T18:59:27.000Z",
    "updatedAt": "2023-07-05T18:59:27.000Z"
  },
  {
    "id": 2,
    "name": "Luiz F",
    "city": "Chicago",
    "country": "USA",
    "favorite_sport": "Futb",
    "createdAt": "2023-07-05T18:59:27.000Z",
    "updatedAt": "2023-07-05T18:59:27.000Z"
  }
]

const query = { page: 1, limit: 10, q: 'USA' }
const req = { query };
const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };


jest.mock('../src/services/userService', () => ({
  getAllUsers: jest.fn(),
}));

describe('UserController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return users successfully and statusCode 200', async () => {
  

    const mockUsers = users;

    UserService.getAllUsers.mockResolvedValue(mockUsers);

    await UserController.find(req, res);


    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(
      response(200, 'Fetch users successfully', mockUsers)
    );

  });

  test('should return users expected by pagination', async () => {

    const mockUsers = users;

    UserService.getAllUsers.mockResolvedValue(mockUsers);

    await UserController.find(req, res);

    // expect(UserService.getAllUsers).toHaveBeenCalledWith(query.page, query.limit, query.q);

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(
      response(200, 'Fetch users successfully', mockUsers)
    );

  })

  test('should return an error 500 if some error heepen when call userService ', async () => {
    UserService.getAllUsers.mockImplementation( () => {
      throw new Error('Error while getting users')
    });

    await UserController.find(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  })
});
