import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PublicRoute = ({ component: Component, ...rest }: any) => {

    const { isAuth } = useAuth();


    return (<Route
        {...rest}
        render={(props) => !isAuth ?
            <Component {...props} />
            :
            <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
                }
    />)
}


export default PublicRoute;
