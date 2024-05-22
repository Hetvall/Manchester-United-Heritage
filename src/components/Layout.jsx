import { useAuth } from "../context";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import NavbarContainer from "./layout/navbar/NavbarContainer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { userLogIn, doSignOut } = useAuth();
  return (
    <div>
      <Header />
      <NavbarContainer userLogIn={userLogIn} doSignOut={doSignOut} />
      <div style={{ minHeight: "calc(100vh - 370px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
