import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../../pages/landing/landing';
import Perfil from '../../pages/perfil/perfil';
import logIn from '../../pages/logIn/logIn';
import Cadastro from '../../pages/cadastro/cadastro';
import Atividade from "../../pages/atividade/atividade";

const logo = require("./logo.svg") as string;


class App extends React.Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  render() {
    return (

      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/logIn" exact component={logIn} />
          <Route path="/perfil" exact component={Perfil} />
          <Route path="/logIn/Cadastro" exact component={Cadastro} />
          <Route path="/atividade" exact component={Atividade} />
        </Switch>

      </Router>

    );
  }
}

export default App;