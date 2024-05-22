import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        style={{ width: "30%", marginTop: "30px" }}
        src="https://res.cloudinary.com/dsrxguglp/image/upload/v1716178757/xc56rkxsts3l3t748jqr.jpg"
        alt="Manchester United black & white badge"
      />
      <Typography sx={{ color: "red" }} variant="h5">
        We are sorry, the page you are trying to search does not exist, just as
        Manchester City fans.
      </Typography>
      <Button sx={{ mt: "30px" }} variant="outlined" color="error">
        <Link style={{ textDecoration: "none", color: "red" }} to={"/"}>
          Go back
        </Link>
      </Button>
    </Box>
  );
};

export default ErrorPage;
