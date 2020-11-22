import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from '../../context/AuthContext/AuthContext';


const PrivateRoute = ({ component: Component, ...rest }: any) => (
        <AuthConsumer>
            {({isAuth}) => ( 
            <Route render={(props) => (isAuth ? <Component {...props} />
                :
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />)} />
        )}
        </AuthConsumer>
)

export default PrivateRoute;