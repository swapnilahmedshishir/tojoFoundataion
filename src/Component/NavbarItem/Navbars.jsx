import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const NavbarsNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full relative z-10  flex bg-white justify-between lg:justify-around py-2 items-center shadow-lg px-10 lg:px-0">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src="/assets/Logo.png" alt="Tojo Foundation logo" />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden relative z-10">
          <button
            onClick={toggleMenu}
            className="text-black group rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? (
              <FaXmark className="text-3xl" />
            ) : (
              <IoReorderThreeOutline className="text-3xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white py-4 shadow-md px-10`}
        >
          <ul className="font-montserrat text-left font-bold space-y-4">
            <li className="px-5" onClick={toggleMenu}>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="px-5" onClick={toggleMenu}>
              <NavLink to="/focus">Focus</NavLink>
            </li>
            <li className="px-5" onClick={toggleMenu}>
              <NavLink to="/Project">Project</NavLink>
            </li>
            <li className="px-5" onClick={toggleMenu}>
              <NavLink to="/aboutus">About us</NavLink>
            </li>
            <li className="px-5" onClick={toggleMenu}>
              <NavLink to="/tojoStars">Tojo Stars</NavLink>
            </li>
            <li className="" onClick={toggleMenu}>
              <NavLink to="/donate">
                <button className="btn btn-wide py-3 px-14 bg-gradient-to-r from-g1 to-SkyBlue text-white rounded-3xl">
                  Donate
                </button>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="lg:flex font-montserrat items-center font-bold">
            <li className="px-5">
              <NavLink to="/home" className="hover:text-blue1">
                Home
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to="/focus" className="hover:text-blue1">
                Focus
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to="/Project" className="hover:text-blue1">
                Project
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to="/aboutus" className="hover:text-blue1">
                About us
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to="/tojoStars" className="hover:text-blue1">
                Tojo Stars
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to="/donate">
                <button className="btn btn-wide py-3 px-14 bg-gradient-to-r from-g1 to-SkyBlue text-white rounded-3xl">
                  Donate
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarsNav;
