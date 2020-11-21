import express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

type user = {
  email: string,
  password: string
  name: string,
}


//Implementação do servidor para front-end de produção

app.post('/api/login', function(req,res){

  //Fazer Autorização utilizando o  banco de dados 
  console.log(req.body);
  if(1){
    // Login autorizado.
    let user: user = {
      email: 'usuario@teste.com',
      password: 'senha_teste',
      name: 'Usuário'
    } 
    res.status(200).send(user);

    
  } else {
    // Login não autorizado.
    res.status(401).send();
  }

})


app.get('/api/infocurso', function(req,res) {

  try {
    if(req.query.numero) {
      const cursoId = req.query.numero; 
      //Procurar Informações do Curso no Banco de dados
      let data = ['Atividade 1', 'Atividade 2', 'Atividade 3'];

      if(data) {
        res.status(200).send({listaAtividade: data});
      }else {
        res.status(404).send(); //Informação git do curso não encontrada
      }
    }
    }catch (err) {
      res.status(500).json({err: err});
    }
})

app.post('/api/cadastro', function(req,res) {

  //Fazer Novo registro no  banco de dados 
  console.log("do Servidor", req.body);

  if(req.body.password == req.body.passwordConf){
    res.status(201).send(req.body); // Confirmação novo cadastro
  } else{
    res.status(400).send(req.body); // Erro no Cadastro
  }
})


//Implementação do servidor para front-end de produção

if (process.env.NODE_ENV === 'production') {
  // Serve all static files
  app.use(express.static(path.join(__dirname, 'client')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));