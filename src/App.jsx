import Layout from "./components/Layout";
import Home from "./components/pages/home/Home";
import LineUp from "./components/pages/lineUp/LineUp";
import KeyMoments from "./components/pages/keyMoments/KeyMoments";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
import About from "./components/pages/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/auth/authenticator/LogIn";
import Register from "./components/auth/register/RegisterContainer";
import { AuthProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={
                <Home introduction={"1999 UEFA Champions League Winners"} />
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<LogIn />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LineUp" element={<LineUp />} />
            <Route path="/KeyPlayers" element={<KeyMoments />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
