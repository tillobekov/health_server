import * as http from "http";
import App from './app';
import { Logger } from "./logger/logger";

const port = 3070;

  App.set('port', port);
  const server = http.createServer(App);
  server.listen(port);
  
  const logger = new Logger();

server.on('listening', function(): void {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    //console.log(`Listening on ${bind}`);
    logger.info(`Listening on ${bind}`);
 });

module.exports = App;