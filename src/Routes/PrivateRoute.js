import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utilities/index';


function PrivateRoute({component : Component,...rest}) {
    console.log("isLogin()",isLogin());
    return (
        <Route{...rest} render = {
            props=>(
                isLogin() ?
                
                <Component {...props}/>
                :
                <Redirect to={"/Login"}/>
            )
           }
    
           />
    );
}

export default PrivateRoute;