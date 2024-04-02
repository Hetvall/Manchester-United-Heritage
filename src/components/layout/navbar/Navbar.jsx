import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "inherit.main" }}
          >
            <MenuOpenOutlinedIcon className="options-icon" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Explore our page
          </Typography>
          <Button color="inherit">LogIn / Sing In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
