import React from 'react';
import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../componet/Footer/Footer';
import Header from '../componet/Header/Header';
import { isLogin } from '../utilities';


function PublicRoute({component : Component, restricted = false, ...rest}) {
    return (
       <Route{...rest} render = {
        props=>(
            isLogin() && restricted ?
            <Redirect to={"/"}/>
            
            :
            <>
            <Header />
            <Component {...props}/>
            <Footer />
          </>
        )
       }

       />
    );
}

export default PublicRoute;