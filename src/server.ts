import { exit } from "process";
import { Request, Response} from 'express';

const express = require('express');

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).end();
})

app.listen(3000, (err: Error) => {
    if (!err) {
        console.log("App listening on port 3000");
    } else {
        exit(0)
    }
})