import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";
import Header from "./layout/header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
