import { useState } from "react";
import Navbar from "./Navbar.jsx";

const NavbarContainer = ({ userLogIn, doSignOut }) => {
  console.log(doSignOut);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Navbar
      open={open}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
      userLogIn={userLogIn}
      doSignOut={doSignOut}
    />
  );
};

export default NavbarContainer;
