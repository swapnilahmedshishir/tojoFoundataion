import React from "react";
import NavbarsNav from "./Component/NavbarItem/Navbars";
import MainHome from "./Component/Home/MainHome";

const App = () => {
  return (
    <div className="relative">
      <NavbarsNav></NavbarsNav>
      <MainHome></MainHome>
    </div>
  );
};

export default App;
