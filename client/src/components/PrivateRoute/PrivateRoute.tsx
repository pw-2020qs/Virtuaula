import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ component: Component, ...rest }: any) => {

        const { isAuth } = useAuth();
        return (<Route
                {...rest}
                render={ (props) => isAuth
                    ? <Component {...props} />
                    : <Redirect to='/login' /> 
                }
            />)
}


export default PrivateRoute;