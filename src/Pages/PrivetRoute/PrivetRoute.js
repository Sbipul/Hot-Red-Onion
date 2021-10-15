import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({children,...rest}) => {

    const {user} = useAuth()
    return (
        <Route 
            {...rest}
            render={({location})=> user.email ? children : <Redirect to={{pathname:'/sign',state:{from:location}}}></Redirect>}
            >
            
        </Route>
    );
};

export default PrivetRoute;