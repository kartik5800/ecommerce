import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../componet/Footer/Footer';
import Header from '../componet/Header/Header';


function PrivateRoute({component : Component,...rest}) {
    let auth = useSelector(state => state.auth)
    console.log("isLogin()",auth.user !== null);
    return (
        <Route{...rest} render = {
            props=>(
                auth.user !== null ?
                <>
                <Header />
                <Component {...props}/>
                <Footer/>
                </>
                :
                <>
                <Header />
                <Redirect to={"/Login"}/>
                <Footer />
                </>
            )
           }
    
           />
    );
}

export default PrivateRoute;