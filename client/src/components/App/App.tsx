import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../../pages/landing/landing';
import Perfil from '../../pages/perfil/perfil';
import logIn from '../../pages/logIn/logIn';
import Cadastro from '../../pages/cadastro/cadastro';
import Dashboard from '../../pages/dashboard/Dashboard';
import Curso from '../../pages/curso/curso';



const App = () => {
  state = {};
  



  render() {
    return (

      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/logIn" exact component={logIn} />
          <Route path="/perfil" exact component={Perfil} />
          <Route path="/logIn/Cadastro" exact component={Cadastro} />
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/curso/:cursoId"  component={Curso} />
        </Switch>

      </Router>

    );
  }
}

export default App;