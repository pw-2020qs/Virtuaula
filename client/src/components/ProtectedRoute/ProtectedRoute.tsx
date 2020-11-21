import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

type ContextProps = { 
  authenticated: boolean,
  lang: string,
  theme: string
};

export const AppContext = React.createContext<Partial<ContextProps>>({});

const Header = () => {
  return <AppContext.Consumer>
  {
    ({authenticated}) => {
      if(authenticated) {
        return <h1>Logged in!</h1>
      }
      return <h1>You need to sign in</h1>
    }
  }
  </AppContext.Consumer>
}

const App = () => {
  return <AppContext.Provider value={{
    authenticated: true,
  }}>
    <Header/>
  </AppContext.Provider>
}

render(<App />, document.getElementById('root'));
