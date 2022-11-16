const express = require('express');

class App {
    private app = express();

    constructor(controllers: any) {
        this.initializeControllers(controllers);
    }

    public listen = () => {
        this.app.listen(3000, (err: Error) => {
            if (err) return err;
        })
    }

    private initializeControllers = (controllers: any) => {
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router);
        });
    }
}

export default App;