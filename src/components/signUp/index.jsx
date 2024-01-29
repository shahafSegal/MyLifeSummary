import { useContext ,useEffect} from "react"
import { UserContext } from "../../contexts/UserManager"

export default function SignUp(props){
    const {UserObj,ClearUserErr}=useContext(UserContext);
    useEffect(ClearUserErr,[])

    return(
        <form className="logBox" onSubmit={props.userLogin}>
            <label htmlFor="userName" >
                Username:
                <input type="text" name="email"/>
            </label>
            <label htmlFor="password">
                password:
                <input type="password" name="password" />
            </label>
            <label htmlFor="repeatPass">
                repeat password:
                <input type="password" name="repeatPass" />
            </label>
            <button>Sign Up</button>
            {UserObj.error?<h3>{UserObj.error}</h3>:''}

        </form>
    )
}