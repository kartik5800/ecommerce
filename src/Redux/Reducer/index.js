import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import { doctorReducer } from "./doctors.reducer";



export const rootReducer = combineReducers({
  
    auth : authReducer,
    alert : alertReducer,
    Doctor:doctorReducer
})