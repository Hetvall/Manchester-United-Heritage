import { CardMedia, CardContent, Typography, Box } from "@mui/material";
import "./KeyMoments.css";

const KeyPlayers = () => {
  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          display: "flex",
          textDecoration: "underline",
          justifyContent: "center",
          m: "30px",
          color: "Black",
        }}
      >
        Key Moments from the game
      </Typography>

      <Box display={{ sx: "flex", md: "flex", alignItems: "center" }}>
        <CardMedia
          className="moments-image"
          component="img"
          height="200"
          image={
            "https://res.cloudinary.com/dsrxguglp/image/upload/v1713840189/basler.jpg"
          }
          alt="Image"
          sx={{ width: 600, height: 300 }}
        />
        <CardContent>
          <Typography variant="h2">{"Bayern's early goal"}</Typography>
          <Typography variant="body1" color="text.secondary">
            {
              "Basler's impact on the final was significant. He opened the scoring in the sixth minute of the match with a stunning free kick from long range, exploiting his renowned ability to strike the ball with power and accuracy. His early goal put Bayern Munich in the lead and set the tone for much of the match."
            }
          </Typography>
        </CardContent>
      </Box>

      <Box display={{ sx: "flex", md: "flex", alignItems: "center" }}>
        <CardMedia
          className="moments-image"
          component="img"
          image={
            "https://res.cloudinary.com/dsrxguglp/image/upload/v1713840083/Beckham.jpg"
          }
          alt="Bekcham"
          sx={{ width: 400, height: 700 }}
        />
        <CardContent>
          <Typography variant="h2">{"David Beckham's corner kick"}</Typography>
          <Typography variant="body1" color="text.secondary">
            {
              "In the 1999 UEFA Champions League final against Bayern Munich, David Beckham's importance was particularly evident in his delivery of set pieces. His accurate corners and free kicks posed a constant threat to Bayern's defense. Notably, Beckham's corner kick in injury time led to Teddy Sheringham's equalizing goal, initiating Manchester United's remarkable comeback. Beckham's precision and composure under pressure played a crucial role in securing the historic victory for Manchester United."
            }
          </Typography>
        </CardContent>
      </Box>

      <Box display={{ sx: "flex", md: "flex", alignItems: "center" }}>
        <CardMedia
          className="moments-image"
          component="img"
          image={
            "https://res.cloudinary.com/dsrxguglp/image/upload/v1713840105/Sheringham.webp"
          }
          alt="Sheringham"
          sx={{ width: 400, height: 220 }}
        />
        <CardContent>
          <Typography variant="h2">{"Teddy Sheringham equalizer"}</Typography>
          <Typography variant="body1" color="text.secondary">
            {
              "Teddy Sheringham played a pivotal role in the historic 1999 UEFA Champions League final between Manchester United and Bayern Munich. As a substitute, he scored the equalizing goal in injury time, setting the stage for Ole Gunnar Solskjaer's dramatic winner moments later. Sheringham's calm finish exemplified his composure under pressure, ultimately helping Manchester United secure an unforgettable comeback victory and complete the historic treble."
            }
          </Typography>
        </CardContent>
      </Box>

      <Box display={{ sx: "flex", md: "flex", alignItems: "center" }}>
        <CardMedia
          className="moments-image"
          component="img"
          image={
            "https://res.cloudinary.com/dsrxguglp/image/upload/v1713840139/solskjaer.jpg"
          }
          alt="solskjaer"
          sx={{ width: 600, height: 500 }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "20px",
          }}
        >
          <Typography variant="h2">
            {"Ole Gunnar Solskjaer wins it at the last gap"}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {
              "Solskjaer's late heroics in the 1999 Champions League final earned him a place in footballing history and cemented his status as a Manchester United legend. His goals in the final minutes of the match completed a remarkable comeback and sealed Manchester United's historic treble-winning season, as they had already won the Premier League and the FA Cup earlier that year."
            }
          </Typography>
        </CardContent>
      </Box>
    </div>
  );
};

export default KeyPlayers;
