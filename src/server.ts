import App from './app';
import DefaultController from './controller/defaultController';

const app = new App(
    [
        new DefaultController(),
    ],
);

app.listen();