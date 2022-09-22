export const isLogin=()=>{
    if(sessionStorage.getItem("user","1234567")){
        return true
    }
    else{
        return false
    }
}