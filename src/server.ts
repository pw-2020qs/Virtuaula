import express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Implementação do servidor para front-end de produção

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.post('/api/login', function(req,res){

  //Fazer Authorização utilizando o  banco de dados 
  console.log(req.body);
  res.send(`Nome: ${req.body.email}, Senha: ${req.body.password}`);

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