import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Logger } from './logger/logger'

class App {

    public express: express.Application;
    public logger: Logger;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.use('/', (req,res,next) => {
            res.send("Typescript Test API!!!");
            this.logger.info('API /test called');
        });
        
    }
}

export default new App().express;