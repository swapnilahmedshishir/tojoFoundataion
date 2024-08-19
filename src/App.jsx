import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarsNav from "./Component/NavbarItem/Navbars";
import MainHome from "./Component/Home/MainHome";
import Erro from "./Component/ErroPage/Erro";

const App = () => {
  return (
    <div className="">
      <Router>
        <NavbarsNav></NavbarsNav>
        <Routes>
          <Route exact path="/" element={<MainHome />} />
          <Route path="/home" element={<MainHome />} />

          <Route path="*" element={<Erro />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
