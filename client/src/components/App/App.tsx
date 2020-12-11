import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Landing from '../../pages/landing/landing';
import Perfil from '../../pages/perfil/perfil';
import logIn from '../../pages/logIn/logIn';
import Cadastro from '../../pages/cadastro/cadastro';
import Atividade from "../../pages/atividade/atividade";
import Dashboard from '../../pages/dashboard/Dashboard';
import Curso from '../../pages/curso/curso';
import EditarAtividade from '../../pages/editar_atividade/editar_atividade';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import { AuthProvider } from '../../context/authContext'
import Lousa from '../../pages/lousa/lousa';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import { UserProvider } from '../../context/userContext';




class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                in={location != null}
                timeout={200}
                classNames="fade"
                unmountOnExit
                key={location.key}
              >
                <Switch location={location}>
                  <PublicRoute path="/" exact component={Landing} />
                  <PublicRoute path="/login" exact component={logIn} />
                  <PublicRoute path="/logIn/cadastro" exact component={Cadastro} />
                  <Route>
                  <UserProvider>
                      <Switch>
                        <PrivateRoute path="/perfil" exact component={Perfil} />
                        <PrivateRoute path="/dashboard" exact component={Dashboard} />
                        <PrivateRoute path="/curso/:cursoId" component={Curso} />
                        <PrivateRoute path="/atividade" exact component={Atividade} />
                        <PrivateRoute path="/atividade/nova" exact component={EditarAtividade} />
                        <PrivateRoute path="/lousa" exact component={Lousa} />
                      </Switch>
                  </UserProvider>
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
