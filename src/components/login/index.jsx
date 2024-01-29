import { useEffect, useContext } from "react"
import { UserContext } from "../../contexts/UserManager";

export default function Login(props){
    const {UserObj,ClearUserErr}=useContext(UserContext);
    console.log(UserObj)
    useEffect(ClearUserErr,[])

   
    return(
        <form className="logBox" onSubmit={props.userLogin}>
            <label htmlFor="userName">
                Username: 
                <input type="text" name="email" />
            </label>
            <label htmlFor="password">
                password: 
                <input type="password" name="password" />
            </label>
            <button>Login In</button>
            {UserObj.error?<h3>{UserObj.error}</h3>:''}

        </form>
    )
}