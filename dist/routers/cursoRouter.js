"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cursoRouter = express.Router();
// Adição do Middleware para proteção dos dados
var AuthMiddleware = require('../middlewares/AuthMiddleware');
cursoRouter.use(AuthMiddleware);
cursoRouter.get('/', function (req, res) {
    try {
        if (req.query.id) {
            var cursoId = req.query.id;
            console.log('Enviando info do curso:', cursoId);
            //Procurar Informações do Curso no Banco de dados
            var cursoData = { programacaoweb: 'Programação para Web', teoriagrafos: 'Teoria dos Grafos', compiladores: 'Compiladores' };
            var data = ['Atividade 1', 'Atividade 2', 'Atividade 3'];
            var cursoNome = cursoData[cursoId];
            if (data) {
                res.status(200).send({ cursoNome: cursoNome, listaAtividades: data });
            }
            else {
                res.status(404).send(); //Informação do curso não encontrada
            }
        }
    }
    catch (err) {
        res.status(500).json({ err: err });
    }
});
module.exports = cursoRouter;
