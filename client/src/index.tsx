import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Perfil from './pages/perfil/perfil';
import logIn from './pages/logIn/logIn';
import Cadastro from './pages/cadastro/cadastro';


ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/logIn" exact component={logIn}/>
      <Route path="/perfil" exact component={Perfil}/>
      <Route path="/logIn/Cadastro" exact component={Cadastro} />
      </Switch>

    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);


