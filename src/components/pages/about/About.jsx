import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h3"
          sx={{
            mt: "30px",
            textDecoration: "underline",
          }}
        >
          About the author
        </Typography>
        <Typography
          sx={{ mt: "30px" }}
          variant="body1"
        >{`As a Manchester United fan, as all of you visiting this page, this website is dedicated to remember the iconic Uefa Champions League of 1999 won by Manchester United at extra time againts all mighty Bayern Munich from Germany.`}</Typography>
        <Typography
          sx={{ mt: "30px" }}
          variant="body1"
        >{`Borned at March 1999, didn't have the chance to watch them live, but being a fan since 2009 from on has tough me how much I love this football club, watched hundred of videos on internet, watching them play in modern football, supporting the club can make you feel alive, connected to a global community of fans, united by a shared passion for the team. Perhaps it's the excitement and anticipation that each match brings, the adrenaline rush of witnessing your favorite players on the pitch, and the exhilaration of celebrating victories together. Maybe it's the history and tradition of the club, the legendary players who have graced Old Trafford, and the iconic moments etched into the annals of football history. Your love for Manchester United could also stem from personal connections, whether it's memories of watching matches with family and friends, or the bond formed with fellow supporters over shared experiences and triumphs. Ultimately, your love for Manchester United is a deeply personal and multifaceted emotion, shaped by a combination of factors that resonate with you on a profound level.`}</Typography>
        <Typography sx={{ mt: "30px" }} variant="body1">
          {`Please sit down and enjoy this`}{" "}
          <span style={{ fontWeight: "bold" }}>Manchester United fan page</span>
        </Typography>
        <img
          style={{ width: "100%" }}
          src="https://res.cloudinary.com/dsrxguglp/image/upload/v1714449026/skynews-manchester-united-football_6323258_jsygmv.jpg"
          alt="Old Trafford"
        />
      </Box>
    </div>
  );
};

export default About;
