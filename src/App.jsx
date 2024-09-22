import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarsNav from "./Component/NavbarItem/Navbars";
import MainHome from "./Component/Home/MainHome";
import Erro from "./Component/ErroPage/Erro";
import Footer from "./Component/FooterSection/Footer";

const App = () => {
  return (
    <div className="font-montserrat">
      <Router>
        <NavbarsNav></NavbarsNav>
        <Routes>
          <Route exact path="/" element={<MainHome />} />
          <Route path="/home" element={<MainHome />} />

          <Route path="*" element={<Erro />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
