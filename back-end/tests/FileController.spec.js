const { response } = require('../src/utils/responseUtils');

const FileController = require('../src/controllers/FileController');
const UserService = require('../src/services/userService');
const UtilsFile = require('../src/utils/UtilsFile');

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

const mockFile = { buffer: 'bits' };

let req = {
  file: mockFile,
};

const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };


jest.mock('../src/services/userService', () => ({
  createUserLote: jest.fn(),
}));
jest.mock('../src/utils/UtilsFile');

describe('FileController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return users array of users created and statusCode 200', async () => {

    const mockUsers = users;
    UserService.createUserLote.mockResolvedValue(mockUsers);

    await FileController.create(req, res);

    const callArgs = res.json.mock.calls[0];
    const data = callArgs[0].data

    expect(Array.isArray(data)).toBe(true);

    expect(res.json).toHaveBeenCalledWith(
      response(200, 'The file was successfully uploaded', mockUsers)
    );

    expect(data).toEqual(mockUsers);
  });

  test('should return 400 error if file is empty', async () => {

    const mockUsers = users;
    UserService.createUserLote.mockResolvedValue(mockUsers);

    req.file = null

    await FileController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      { error: 'The file is mandatory' }
    );

  });


  test('Should return 500 error if parseJson failure', async () => {

    const error = new Error('Happens an error when trying to parse CSV');

    req = {
      file: mockFile,
    };
    UtilsFile.parseCSVToJSON.mockRejectedValue(error);

    await FileController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      "error": "Happens an error when trying to parse CSV",
      "message": "Happens an error when trying to parse CSV",
      "statusCode": 500,
    });
  });

});
