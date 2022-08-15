import { darkmode } from "./App";
import React, { createContext, useState } from "react";
// import moon from "./darkmodemoon.jpg";
// import moon2 from "./darkmodemoon2.jpg";
import moon3 from "./moon3.png";
import cross from "./cross.png";
import menuicon from "./icons-circled-menu.png";
import RM from "./RM.png"
import {
  HashRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import { motion } from "framer-motion";

export default function Navbar() {
  const [hide, setHide] = useState("hidden");
  return (
    <>
      {/*Context*/}
      <darkmode.Consumer>
        {(dark) => {
          return (
            <>
              <Router>
                <motion.header
                  className={`${dark.Darkval} z-10 fixed top-0 w-screen body-font hidden md:block lg:block`}
                >
                  <div className="container mx-auto font-Ubuntu flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
                      <motion.span
                        whileHover={{ scale: 1.3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        className="ml-[-15px] font-bold text-xl text-red-700"
                      >
                        {/* Portfolio */}
                        <img src={RM} alt="" />
                      </motion.span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                            : "mr-5 hover:text-red-700 cursor-pointer "
                        }
                        to="/"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                            : "mr-5 hover:text-red-700 cursor-pointer "
                        }
                        to="/About"
                      >
                        About
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                            : "mr-5 hover:text-red-700 cursor-pointer "
                        }
                        to="/Skills"
                      >
                        Skills
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                            : "mr-5 hover:text-red-700 cursor-pointer "
                        }
                        to="/Contact"
                      >
                        Contact me
                      </NavLink>
                    </nav>
                    <motion.button className="inline-flex items-center px-3 focus:outline-none rounded text-base md:mt-0">
                      {/* Dark Mode */}

                      <motion.img
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src={moon3}
                        alt=""
                        className="w-6"
                        onClick={() => {
                          navigator.vibrate(50);
                          if (dark.Darkval === "bg-white text-black") {
                            dark.setdarkval("bg-black text-white");
                          } else {
                            dark.setdarkval("bg-white text-black");
                          }
                        }}
                      />
                    </motion.button>
                  </div>
                  {/* <hr />
                  <hr /> */}
                </motion.header>

                {/* Smaller navbar upper part */}

                <div
                  className={`md:hidden ${dark.Darkval} fixed z-10 bg-opacity-0 bottom-3 w-screen lg:hidden text-left text-2xl pt-4`}
                >
                  <div
                    className={`${dark.Darkval} ${
                      hide === "hidden" ? "" : "hidden"
                    } items-right justify-center font-Ubuntu border-4 border-red-700 font-bold pb-2 rounded-xl mx-3 pl-3 text-left text-2xl pt-2`}
                  >
                    Rishab
                    <button className="inline-flex float-right mx-3 my-1 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
                      {/* Dark Mode */}
                      <img
                        // src={moon2}
                        src={menuicon}
                        alt=""
                        className="w-6"
                        onClick={() => {
                          navigator.vibrate(50);
                          if (hide === "hidden") {
                            setHide("");
                            // setHide2("hidden");
                          } else {
                            setHide("hidden");
                          }
                        }}
                      />
                    </button>
                    <button className="inline-flex float-right mx-3 my-1 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
                      {/* Dark Mode */}
                      <img
                        src={moon3}
                        alt=""
                        className={`w-6 ${dark.Darkval}`}
                        onClick={() => {
                          navigator.vibrate(50);
                          if (dark.Darkval === "bg-white text-black") {
                            dark.setdarkval("bg-black text-white");
                          } else {
                            dark.setdarkval("bg-white text-black");
                          }
                        }}
                      />
                    </button>
                  </div>

{/*                  New Navbar at the bottom (lower part) */}

                  <div
                    className={`md:hidden ${dark.Darkval} ${hide} bg-opacity-0 fixed bottom-3 w-screen lg:hidden text-left text-2xl pt-4`}
                  >
                    {/* New Navbar at the bottom  */}
                    <div
                      className={`border-4 border-red-700 ${dark.Darkval} rounded-xl mx-3`}
                    >
                      <nav className="md:ml-auto font-Ubuntu flex flex-wrap items-center py-3 text-xl justify-center">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                              : "mr-5 hover:text-red-700 cursor-pointer "
                          }
                          to="/"
                        >
                          Home
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                              : "mr-5 hover:text-red-700 cursor-pointer "
                          }
                          to="/About"
                        >
                          About
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                              : "mr-5 hover:text-red-700 cursor-pointer "
                          }
                          to="/Skills"
                        >
                          Skills
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                              : "mr-5 hover:text-red-700 cursor-pointer "
                          }
                          to="/Contact"
                        >
                          Contact me
                        </NavLink>
                        <button className="inline-flex float-right mx-3 my-1 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
                          {/* Dark Mode */}
                          <img
                            src={cross}
                            alt=""
                            className="w-6"
                            onClick={() => {
                              navigator.vibrate(50);
                              setHide("hidden");
                            }}
                          />
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route exact path="/About" element={<About />} />
                  <Route exact path="/Skills" element={<Skills />} />
                  <Route exact path="/Contact" element={<Contact />} />
                  {/* <Route exact path="/weather" element={<Weather />} /> */}
                </Routes>
              </Router>
            </>
          );
        }}
      </darkmode.Consumer>
    </>
  );
}
