import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Landing from '../../pages/landing/landing';
import Perfil from '../../pages/perfil/perfil';
import logIn from '../../pages/logIn/logIn';
import Cadastro from '../../pages/cadastro/cadastro';
import Dashboard from '../../pages/dashboard/dashboard';
import Curso from '../../pages/curso/curso';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import { AuthProvider } from '../../context/AuthContext/AuthContext';



class App extends React.Component<{}> {

  render() {
    return (
      <AuthProvider>
        <Router >
          <Switch>
            <PublicRoute path="/login" exact component={logIn} />
            <PublicRoute path="/" exact component={Landing} />
            <PublicRoute path="/logIn/cadastro" exact component={Cadastro} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/perfil" exact component={Perfil} />
            <PrivateRoute path="/curso/:cursoId" component={Curso} />
          </Switch>
          </Router>
      </AuthProvider>
    );
  }
}

export default App;