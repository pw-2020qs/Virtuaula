import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthConsumer} from '../AuthContext/AuthContext';


const PublicRoute = ({component: Component, ...rest}: any) => (

    <AuthConsumer>
        {({isAuth}) => (  //Usar valor isAuth do Context
            <Route  render={(props) =>  ( true? <Component {...props} /> : <Redirect to="/dashboard"/>)} />
        )}
    </AuthConsumer>
)

export default PublicRoute;