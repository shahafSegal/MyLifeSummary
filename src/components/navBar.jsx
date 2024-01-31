import { Nav,Container, Navbar, Button } from "react-bootstrap";
import { NavLink} from "react-router-dom"
import UserDropDown from "./UserDropDown";
import { useContext } from "react";
import { UserContext } from "../contexts/UserManager";
function NavBar(){

    const {UserObj}=useContext(UserContext)
    const activeClass=({ isActive }) => ({
        color: isActive ? '#C0C0C0' : '#545e6f',
        background: isActive ? '#7600dc' : '#C0C0C0',
      })

    return(
          <Navbar bg="primary" expand="lg" data-bs-theme="dark" className="justify-content-end">
          <Container>
            <Navbar.Brand>MyLifeSummary</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" style={activeClass}>
                  Create Resume
                </Nav.Link>
                <Nav.Link as={NavLink} to="/resumes" style={activeClass}>
                  MyResumes
                </Nav.Link>
              </Nav>
              <Nav>
                {UserObj.id ? <UserDropDown/>: (
                  <Nav.Link as={NavLink} style={activeClass} to="/register">
                    Register
                  </Nav.Link>)
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
export default NavBar;