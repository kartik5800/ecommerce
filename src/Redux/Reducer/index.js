import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import {productReducer } from "./Product.reducer";



export const rootReducer = combineReducers({
  
    auth : authReducer,
    alert : alertReducer,
    Product:productReducer
})