import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header">
        MANCHESTER UNITED HERITAGE
        <img
          className="badge"
          src="https://res.cloudinary.com/dsrxguglp/image/upload/v1711690157/Man%20United%20crest.png"
          alt="Man United badge"
        />
      </h1>
    </div>
  );
};

export default Header;
