import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Menu, MenuItem } from "@mui/material";;

const DropDownResume = ({ UserResumes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleAnchorMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAnchorMenuClose = () => {
      
    setAnchorEl(null);
  };


  const dropdownContent = UserResumes.map((val) => (
    <MenuItem key={val.id} component={NavLink} to={`/resumes/${val.id}`} sx={{display:'flex',justifyContent:'center'}}>{val.docName}</MenuItem>
  ));
  dropdownContent.push(
    <MenuItem key="newResume" component={NavLink} to={'/'} sx={{display:'flex',justifyContent:'center'}} >+ new Resume</MenuItem>
  );

  return (
    <div>
      <Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        className="w-100"
        onClick={handleAnchorMenuOpen}
      >
        Your resumes ({UserResumes.length})
      </Button>
      <Menu
        id="dropdown-menu"
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleAnchorMenuClose}
        anchorOrigin={{
          vertical: 'bot',
          horizontal:'center'
        }}
        transformOrigin={{
          vertical: 'bot',
          horizontal:'center'
        }}
        slotProps={{
          paper: {
            sx: {
              color: 'red',
              width: '100%',
              maxWidth: '100%',
              left: '0px',
              right: '0px',
            },
          }
        }}
      >
        {dropdownContent}
      </Menu>
    </div>
  );
};

export default DropDownResume;