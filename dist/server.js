"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Implementação do servidor para front-end de produção
app.post('/api/login', function (req, res) {
    //Fazer Autorização utilizando o  banco de dados 
    var email = req.body.email;
    var password = req.body.password;
    var perfil = "";
    var user = "";
    if (email == 'usuario1@teste.com') {
        // Login autorizado Aluno
        perfil = "Aluno";
        user = "Usuario Aluno";
    }
    else if (email == 'usuario2@teste.com') {
        // Login autorizado Professor
        perfil = "Professor";
        user = "Usuario Professor";
    }
    else {
        // Login não autorizado.
        return res.status(401).send();
    }
    var data = {
        user: user,
        email: email,
        perfil: perfil
    };
    res.status(200).send(data);
});
app.get('/api/infocurso', function (req, res) {
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
                res.status(404).send(); //Informação git do curso não encontrada
            }
        }
    }
    catch (err) {
        res.status(500).json({ err: err });
    }
});
app.post('/api/cadastro', function (req, res) {
    //Fazer Novo registro no  banco de dados 
    console.log("Cadastrado no Servidor", req.body);
    if (req.body.password == req.body.passwordConf) {
        res.status(201).send(req.body); // Confirmação novo cadastro
    }
    else {
        res.status(400).send('Por favor verifique sua senha'); // Erro no Cadastro
    }
});
//Implementação do servidor para front-end de produção
if (process.env.NODE_ENV === 'production') {
    // Serve all static files
    app.use(express.static(path.join(__dirname, 'client')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client', 'index.html'));
    });
}
app.listen(port, function () { return console.log("Listening on port " + port); });
