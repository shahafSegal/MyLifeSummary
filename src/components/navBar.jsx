import { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserManager";
import { Brightness4 } from "@mui/icons-material";

export default function NavBar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [userAnchor,setUserAnchor]=useState(null)
    const navigate = useNavigate();
  
    const handleAnchorMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleUserMenuOpen=(event)=>{
      console.log("user open")
      setUserAnchor(event.currentTarget);
    }
  
    const handleMenuClose = () => {
      handleAnchorMenuClose()
      handleUserMenuClose()
    };
    const handleAnchorMenuClose = () => {
      
      setAnchorEl(null);
    };
    const handleUserMenuClose = () => {
      setUserAnchor(null);
    };
    
  
    const handleNavigate = (path) => {
      navigate(path);
      handleMenuClose();
    };
  
    const { UserObj,UserID} = useContext(UserContext);
  

    const menuItems=[
        <MenuItem onClick={() => handleNavigate("/")} key="home">Home</MenuItem>,
        
    ]




    return (
      <Box sx={{ flexGrow: 1 ,position:'sticky',top:0 ,zIndex:1000}}>
        <AppBar pall color="primary" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
              onClick={handleAnchorMenuOpen}
            >
              <MenuIcon />
  
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleAnchorMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
             {menuItems}
            </Menu>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {menuItems}
            </Box>
  
  
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex' }}>
  
  
  
              <IconButton onClick={props.toggleDark} color="inherit">
                <Brightness4 />
              </IconButton>
              <Box sx={{display:"flex"}} onClick={UserID?handleUserMenuOpen:() => handleNavigate("/register")}>
                {UserID?<p>{UserObj.fullname}</p>:<Button
                  variant="contained"
                  color="success"
                  onClick={() => handleNavigate("/register")}
                  >
                    {"Login"}
                  </Button>
                }
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  color="inherit"
                  
                >
                  <AccountCircle />
                  

                </IconButton>
              </Box>
              <Menu
              id="menu-appbar"
              anchorEl={userAnchor}
              keepMounted
              open={Boolean(userAnchor)}
              onClose={handleUserMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem>Profile</MenuItem>
            </Menu>


            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }