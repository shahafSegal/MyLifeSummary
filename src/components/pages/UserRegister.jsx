import Login from "../login";
import SignUp from "../signUp";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserManager";
import { getObjHandleForm } from "../../scripts/general";
import "../../styles/userReg.css"
export default function UserRegister(){

    const [isLoggingIn,SetIsLoggingIn]=useState(true)
    const toggleLogin=()=>{SetIsLoggingIn(!isLoggingIn)}
    const {UserObj,SignUpFunc,LoginFunc}=useContext(UserContext);
    const registerFunc= isLoggingIn?LoginFunc:SignUpFunc;

    const formSignUp=(e)=>{
        const formObj= getObjHandleForm(e)
        registerFunc(formObj.email,formObj.password);
    }
    const toLogDiv=[isLoggingIn?<Login userLogin={formSignUp} />:<SignUp userLogin={formSignUp}/>,<button onClick={toggleLogin}>{isLoggingIn?"don't have a user?":"already have a user?"}</button>]
    return(
        <div className="regForm">
            { 
                UserObj.id?<div><h1>{UserObj.email}</h1><h2>Logged In</h2> </div>:toLogDiv

            }
            
        </div>
    )

}