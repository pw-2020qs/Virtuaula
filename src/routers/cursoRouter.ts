import express = require('express');

type cursoData = {
    programacaoweb: string,
    teoriagrafos: string,
    compiladores: string
}

const cursoRouter = express.Router();

// Adição do Middleware para proteção dos dados
const AuthMiddleware = require('../middlewares/AuthMiddleware')
cursoRouter.use(AuthMiddleware)

cursoRouter.get('/', function (req, res) {
    try {
        if (req.query.id) {
            const cursoId = <string>req.query.id;
            console.log('Enviando info do curso:', cursoId);

            //Procurar Informações do Curso no Banco de dados
            const cursoData: cursoData = { programacaoweb: 'Programação para Web', teoriagrafos: 'Teoria dos Grafos', compiladores: 'Compiladores' }
            let data = ['Atividade 1', 'Atividade 2', 'Atividade 3'];
            let cursoNome = cursoData[cursoId as keyof cursoData]
            if (data) {
                res.status(200).send({ cursoNome: cursoNome, listaAtividades: data });
            } else {
                res.status(404).send(); //Informação do curso não encontrada
            }
        }
    } catch (err) {
        res.status(500).json({ err: err });
    }
})


module.exports = cursoRouter;