import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Menu, MenuItem } from "@mui/material";;

const DropDownResume = ({ UserResumes }) => {
  const dropdownContent = UserResumes.map((val) => (
    <MenuItem key={val.id} component={NavLink} to={`/resumes/${val.id}`} className={'w-100 text-center'}>{val.docName}</MenuItem>
  ));
  dropdownContent.push(
    <MenuItem key="newResume" component={NavLink} to={'/'} className={'w-100 text-center'}>+ new Resume</MenuItem>
  );

  return (
    <div>
      <Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        className="w-100"
      >
        Your resumes ({UserResumes.length})
      </Button>
      <Menu
        id="dropdown-menu"
        keepMounted
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {dropdownContent}
      </Menu>
    </div>
  );
};

export default DropDownResume;