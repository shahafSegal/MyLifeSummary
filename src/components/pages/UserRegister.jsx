import Login from "../login";
import SignUp from "../signUp";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserManager";
export default function UserRegister(){

    const [isLoggingIn,SetIsLoggingIn]=useState(true)
    const toggleLogin=()=>{SetIsLoggingIn(!isLoggingIn)}
    const {UserObj,SignUpFunc,LoginFunc}=useContext(UserContext);
    const registerFunc= isLoggingIn?LoginFunc:SignUpFunc;

    const formSignUp=(e)=>{
        e.preventDefault()
        const fData=new FormData(e.target)
        const formObj= Object.fromEntries(fData)
        console.log(formObj)
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