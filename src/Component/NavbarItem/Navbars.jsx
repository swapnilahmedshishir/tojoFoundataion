import React from "react";

const NavbarsNav = () => {
  return (
    <div className="w-full fixed z-10 top-5 flex bg-white justify-around py-2 items-center ">
      {/* logo image  */}
      <div>
        <img src="/assets/Logo.png" alt="tojo funadation logo" />
      </div>
      <div>
        <ul className="flex font-montserrat items-center font-bold">
          <li className="px-5">Home</li>
          <li className="px-5">Focus</li>
          <li className="px-5">Project</li>
          <li className="px-5">About us</li>
          <li className="px-5">Tojo Stars</li>
          <li className="px-5">
            <button className="py-3 px-14 ml-3 bg-gradient-to-r from-g1 to-SkyBlue text-white rounded-3xl">
              Donate
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarsNav;
