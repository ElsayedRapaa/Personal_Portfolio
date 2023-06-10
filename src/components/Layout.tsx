import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

import useDarkMode from "../hooks/darkMode";

import { Routes, Route } from "react-router-dom";
import Error from "../pages/Error";

const Layout = () => {
  const darkMode = useDarkMode();

  return (
    <div>
      <Navbar darkMode={darkMode.isOpen} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode.isOpen} />} />
        <Route path="/about" element={<About darkMode={darkMode.isOpen} />} />
        <Route
          path="/portfolio"
          element={<Portfolio darkMode={darkMode.isOpen} />}
        />
        <Route
          path="/contact"
          element={<Contact darkMode={darkMode.isOpen} />}
        />
        <Route path="*" element={<Error darkMode={darkMode.isOpen} />} />
      </Routes>
      <Footer darkMode={darkMode.isOpen} />
    </div>
  );
};

export default Layout;
