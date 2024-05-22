import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import Popover from "@mui/material/Popover";
import "./Navbar.css";
import { useAuth } from "../../../context";
import { useState } from "react";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const Navbar = ({
  handleClick,
  anchorEl,
  handleClose,
  open,
  userLogIn,
  doSignOut,
}) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const id = open ? "simple-popover" : undefined;
  const [logOutAlert, setLogOutAlert] = useState(false);

  const handleLogOut = () => {
    doSignOut().then(() => {
      setLogOutAlert(true);
      setTimeout(() => {
        setLogOutAlert(false);
        navigate("/");
      }, 3000);
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton
            onClick={handleClick}
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "inherit.main" }}
          >
            <MenuOpenOutlinedIcon className="options-icon" />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link to="/keyplayers">
                <Button
                  variant="h6"
                  onClick={handleClose}
                  sx={{ color: "#2b2d42" }}
                >
                  Key Moments
                </Button>
              </Link>

              <Link to="/lineup">
                <Button
                  variant="h6"
                  onClick={handleClose}
                  sx={{ color: "#2b2d42" }}
                >
                  LineUp
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  variant="h6"
                  onClick={handleClose}
                  sx={{ color: "#2b2d42" }}
                >
                  About
                </Button>
              </Link>
            </Box>
          </Popover>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentUser ? (
              <>
                Hello,
                {currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email}
                !
              </>
            ) : (
              "Explore our page"
            )}
          </Typography>

          {userLogIn ? (
            <>
              <Button sx={{ color: "white" }} onClick={handleLogOut}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button sx={{ color: "white" }}>
                <Link className="custom-link" to={"/login"}>
                  Log In
                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link className="custom-link" to={"/register"}>
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {logOutAlert && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          sx={{
            position: "fixed",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1500,
          }}
        >
          You have been successfully logged out.
        </Alert>
      )}
    </Box>
  );
};

export default Navbar;
