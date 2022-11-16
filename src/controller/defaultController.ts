import { Router, Request, Response } from "express";

class DefaultController {
    public path = '/'

    public router = Router();

    constructor() {
        this.router.get(`${this.path}`, this.default)
    }

    public default = async (request: Request, response: Response) => {
        response.statusCode = 200;
        return response.send({"status": "success"});
    }
}

export default DefaultController;