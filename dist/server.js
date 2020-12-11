"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Carregamento da interface com o Banco de Dados
var users = __importStar(require("./models/users"));
var config_1 = require("./config");
var AUTH_CONFIG = config_1.config['secret'];
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Funções Auxiliares
//Implementação das rotas do servidor
//Rota de autorização
var authRouter = require('./routers/authRouter');
app.use('/api/login', authRouter);
// Rotas de data Fetch
// Adicionar o AuthMiddleware em todo router de data fetching
// const AuthMiddleware = require('../middlewares/AuthMiddleware')
// app.use( AuthMiddleware)
//Data Fetching da info do curso
var cursoRouter = require('./routers/cursoRouter');
app.use('/api/infocurso', cursoRouter);
//Inicialização do servidor 
if (process.env.NODE_ENV === 'production') {
    // Serve all static files
    app.use(express.static(path.join(__dirname, 'client')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client', 'index.html'));
    });
}
/*
Processos para executar o salvamento
Automático após o fechamento do servidor
*/
process.once('exit', function (code) {
    console.log("Server exiting with code " + code + "...");
    users.saveFile();
    console.log("Server exited");
});
function exitHandler() {
    process.exit();
}
process.once("SIGINT", exitHandler);
process.once("SIGUSR2", exitHandler);
//Levantament do Servidor
app.listen(port, function () {
    users.loadFile();
    console.log("Listening on port " + port);
});
