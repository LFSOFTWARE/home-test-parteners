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

  test('should return users array users successfully and statusCode 200', async () => {


    const mockUsers = users;

    UserService.getAllUsers.mockResolvedValue(mockUsers);

    await UserController.find(req, res);

    const callArgs = res.json.mock.calls[0];
    const data = callArgs[0].data

    expect(Array.isArray(data)).toBe(true);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      response(200, 'Fetch users successfully', mockUsers)
    );

  });

  test('should return an users array users expected by pagination', async () => {

    const mockUsers = users;
    UserService.getAllUsers.mockResolvedValue(mockUsers);

    await UserController.find(req, res);

    const callArgs = res.json.mock.calls[0];
    const data = callArgs[0].data

    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(mockUsers.length);
    expect(data).toBe(mockUsers);
  })

  test('should return an error 500 if some error heepen when call userService ', async () => {
    UserService.getAllUsers.mockImplementation(() => {
      throw new Error('Error while getting users')
    });

    await UserController.find(req, res);


    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Error while getting users", error: new Error('Error while getting users'), "statusCode": 500 });
  })
  test("Ensure return an users array with corresponding country query searh", async () => {
    const mockUsers = users;
    UserService.getAllUsers.mockResolvedValue(mockUsers);

    req.query.q = "USA"

    await UserController.find(req, res);

    const callArgs = res.json.mock.calls[0];
    const data = callArgs[0].data

    expect(Array.isArray(data)).toBe(true);
    expect(data.every(user => user.country === 'USA')).toBe(true);
    expect(data.length).toBe(mockUsers.length);
    expect(data).toBe(mockUsers);
  })
  test('shound return an array of users if query is empty', async () => {
    const mockUsers = users;
    UserService.getAllUsers.mockResolvedValue(mockUsers);

    req.query = { page: 1, limit: 10 }

    await UserController.find(req, res);

    const callArgs = res.json.mock.calls[0];
    const data = callArgs[0].data

    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(mockUsers.length);
    expect(data).toBe(mockUsers);
  })

  test('shound return an array of users if pagination is not defined', async () => {
    const mockUsers = users;
    UserService.getAllUsers.mockResolvedValue(mockUsers);

    req.query = {}

    await UserController.find(req, res);

    const callArgs = res.json.mock.calls[0];
    const data = callArgs[0].data

    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(mockUsers.length);
    expect(data).toBe(mockUsers);
  })
});
