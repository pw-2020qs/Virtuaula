import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer, AuthProvider } from '../../context/AuthContext/AuthContext';


const PublicRoute = ({ component: Component, ...rest }: any) => (

    <AuthConsumer>
        {({ isAuth }) => (  //Usar valor isAuth do Context
            <Route render={(props) => (!isAuth ? <Component {...props} /> 
                : 
            <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />)} />
        )}
    </AuthConsumer>
)

export default PublicRoute;