import express = require('express');
import jwt from 'jsonwebtoken'

// Carregamento da interface com o Banco de Dados
import * as users from './models/users'
import { config } from './config';


const AUTH_CONFIG = config['secret']

const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Funções Auxiliares



//Implementação das rotas do servidor

//Rota de autorização
const authRouter = require('./routers/authRouter')
app.use('/api/login', authRouter)


// Rotas de data Fetch
// Adicionar o AuthMiddleware em todo router de data fetching
// const AuthMiddleware = require('../middlewares/AuthMiddleware')
// app.use( AuthMiddleware)

//Data Fetching da info do curso
const cursoRouter = require('./routers/cursoRouter')
app.use('/api/infocurso', cursoRouter)


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
process.once('exit', (code) => {
  console.log(`Server exiting with code ${code}...`)
  users.saveFile()
  console.log(`Server exited`)
})

function exitHandler() {
  process.exit()
}

process.once("SIGINT", exitHandler)
process.once("SIGUSR2", exitHandler)




//Levantament do Servidor
app.listen(port, () => {
  users.loadFile()
  console.log(`Listening on port ${port}`)
});