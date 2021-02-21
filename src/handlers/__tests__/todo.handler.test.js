const { getTodos } = require('../todo.handler');
const todoService = require('../../services/todo.service');

describe('getTodos', () => {
  it('should send response with 200 and todos', async () => {
    const mockResponse = {};
    const expectedValue = [{ id: '0', todo: '1kg rice' }, { id: '1', todo: 'Make tea' }];

    mockResponse.status = jest.fn(() => mockResponse);
    mockResponse.send = jest.fn();

    jest.spyOn(todoService, 'getTodos').mockResolvedValue(expectedValue);

    await getTodos(null, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith(expectedValue);
  });
});
