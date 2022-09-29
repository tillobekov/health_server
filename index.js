"use strict";
exports.__esModule = true;
var http = require("http");
var app_1 = require("./app");
var logger_1 = require("./logger/logger");
var port = 3070;
app_1["default"].set('port', port);
var server = http.createServer(app_1["default"]);
server.listen(port);
var logger = new logger_1.Logger();
server.on('listening', function () {
    var addr = server.address();
    var bind = (typeof addr === 'string') ? "pipe ".concat(addr) : "port ".concat(addr.port);
    //console.log(`Listening on ${bind}`);
    logger.info("Listening on ".concat(bind));
});
module.exports = app_1["default"];
