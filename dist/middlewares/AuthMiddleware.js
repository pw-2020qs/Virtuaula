"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(req, res, next) {
    var authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).send({ error: 'No token provided' });
    var parts = authHeader.split(' ');
    if (!(parts.length === 2))
        return res.status(401).send({ error: 'Token error' });
    var schema = parts[0], token = parts[1];
    if (!/^Bearer$/i.test(schema))
        return res.status(401).send({ error: 'Token malformatted' });
    jsonwebtoken_1.default.verify(token, config_1.config['secret'], function (err, decoded) {
        if (err)
            return res.status(401).send({ error: 'Invalid Token' });
        req.userId = decoded.Id;
        next();
    });
}
module.exports = AuthMiddleware;
