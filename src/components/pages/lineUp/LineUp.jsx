import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const LineUp = () => {
  return (
    <div>
      <Card sx={{ display: "flex", flexDirection: "column", mt: "30px" }}>
        <Box display={{ sx: "flex", md: "flex", alignItems: "center" }}>
          <CardMedia
            component="img"
            height="200"
            image={
              "https://res.cloudinary.com/dsrxguglp/image/upload/v1713840173/LineUp.png"
            }
            alt="line-up"
            sx={{ width: 410, height: 600 }}
          />
          <CardContent>
            <Typography variant="h3" sx={{ textDecoration: "underline" }}>
              {"Manchester United Starting XI (4-4-2 formation)"}
            </Typography>
            <Typography variant="body1" color="text.secondary" component="div">
              <ul>
                <li>Peter Schmeichel (Goalkeeper)</li>
                <li>Gary Neville (Right Back)</li>
                <li>Jaap Stam (Center Back) </li>
                <li>Denis Irwin (Left Back)</li>
                <li>David Beckham (Right Midfield)</li>
                <li>Nicky Butt (Central Midfield)</li>
                <li>Jesper Blomqvist (Forward)</li>
                <li>Ryan Giggs (Left Midfield)</li>
                <li>Dwight Yorke (Forward) </li>
                <li>Andy Cole (Forward)</li>
              </ul>
            </Typography>
            <Typography>
              {`This lineup, orchestrated by manager Sir Alex Ferguson,
              engineered one of the most memorable comebacks in football
              history, securing the UEFA Champions League trophy for Manchester
              United on May 26, 1999, at the Camp Nou in Barcelona, Spain.`}
            </Typography>
            <Typography sx={{ mt: "20px" }}>
              {`Teddy Sheringham (Forward) - Sheringham was a seasoned striker
              with a keen eye for goal and intelligent movement off the ball. He
              played a pivotal role in the comeback, scoring the equalizer as
              soon as he was sub on.
              Ole Gunnar Solskjaer (Forward) - Solskjaer, known as the
              "Baby-faced Assassin," was also a super-substitute who came off
              the bench to score the winning goal in injury time, securing
              Manchester United's historic victory.`}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default LineUp;
