import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from '../../pages/landing/landing';
import Perfil from '../../pages/perfil/perfil';
import logIn from '../../pages/logIn/logIn';
import Cadastro from '../../pages/cadastro/cadastro';
import Dashboard from '../../pages/dashboard/Dashboard';
import Curso from '../../pages/curso/curso';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';



type user = {
  email: string,
  password: string
  name: string,
}

type AppProps = {};

type AppState = user;


class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    }

    this.getUser = this.getUser.bind(this);
    this.LoggedIn = this.LoggedIn.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }


  getUser() {
    const user: any = {
      email: sessionStorage.getItem('@virtuaula/email'),
      password: sessionStorage.getItem('@vitruaula/password'),
      name: sessionStorage.getItem('@virtuaula/name')
    }
    this.setState(user, ()=> {console.log('on callback',this.state)})
    console.log('user',user)
    console.log('this.state',this.state)

  }

  LoggedIn(): boolean {

    const email = this.state.email;
    console.log('on loggedin',email )
    if (email)  {
      return true;
    } else {
      return false;
    }
  }

  render() {

    return (
      <Router>
        <Switch>
          <Route path="/" exact >
            {this.LoggedIn() ? <Redirect to="/dashboard" /> : <Landing />}
          </Route>
          <PublicRoute path="/logIn" exact component={logIn} />
          <PublicRoute path="/logIn/Cadastro" exact component={Cadastro} />
          <PrivateRoute path="/perfil" exact component={Perfil} />
          <PrivateRoute path="/curso/:cursoId" component={Curso} />
        </Switch>
      </Router>

    );
  }
}

export default App;