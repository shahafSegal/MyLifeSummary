// import { useContext } from "react"
// import { Dropdown } from "react-bootstrap"
// import { UserContext } from "../contexts/UserManager"
// export default function UserDropDown(){
//     const {logOut,UserObj}=useContext(UserContext);

//     return(
//         <Dropdown className="nav-link mx-auto" >
//             <Dropdown.Toggle variant="link" className="bg-dark text-decoration-none" id="dropdown-basic">
//             {UserObj.email}
//             </Dropdown.Toggle>
    
//             <Dropdown.Menu>
//                 <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//     )
    
// }