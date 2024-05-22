import { Card, CardMedia, Typography } from "@mui/material";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Card sx={{ backgroundColor: "#d90429", p: "30px" }}>
      <Typography
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          color: "#edf2f4",
          fontSize: "60px",
          fontFamily: "fantasy",
        }}
      >
        MANCHESTER UNITED HERITAGE
        <Link to="/">
          <CardMedia
            component="img"
            className="badge"
            image={
              "https://res.cloudinary.com/dsrxguglp/image/upload/v1711690157/Man%20United%20crest.png"
            }
            alt="Man United badge"
            sx={{
              display: { xs: "none", md: "block" },
              width: "120px",
              height: "120px",
              m: "20px",
            }}
          />
        </Link>
      </Typography>
    </Card>
  );
};

export default Header;
