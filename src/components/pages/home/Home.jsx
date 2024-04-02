import "./Home.css";
import "@fontsource/roboto/400.css";

const Home = ({ introduction }) => {
  return (
    <div>
      <h1 className="introduction">{introduction}</h1>
      <p className="text-introduction">
        Injury time goals from Manchester United player Teddy Sheringham and Ole
        Gunnar Solskjær cancelled out Mario Basler early goal for Bayern to give
        Manchester United a 2–1 win <br /> and their first European Cup title
        since 1968, their second overall.
      </p>
      <img
        className="home-image"
        src="https://res.cloudinary.com/dsrxguglp/image/upload/v1710981325/dxzyfwe6dkx1njbewvwb.webp"
        alt="Manchester United history"
      />
    </div>
  );
};

export default Home;
