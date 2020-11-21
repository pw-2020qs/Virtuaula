import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthConsumer} from '../AuthContext/AuthContext';


const PrivateRoute = ({component: Component, ...rest}: any) => (

    <AuthConsumer>
        {({isAuth}) => (
            <Route  render={(props) =>  ( true? <Component {...props} /> : <Redirect to="/login"/>)} />
        )}
    </AuthConsumer>
)

export default PrivateRoute;