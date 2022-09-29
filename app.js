"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var logger_1 = require("./logger/logger");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new logger_1.Logger();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        var _this = this;
        this.express.use('/', function (req, res, next) {
            res.send("Typescript Test API!!!");
            _this.logger.info('API /test called');
        });
    };
    return App;
}());
exports["default"] = new App().express;
