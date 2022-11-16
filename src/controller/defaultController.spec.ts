import { Request, Response } from 'express';
import DefaultController from './defaultController';

const defaultController = new DefaultController();

describe('Test Default Controller', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
    })

    test('GET /', async () => {
        const expectedStatusCode = 201;

        defaultController.default(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
    })
})