import { darkmode } from "./App";
import React from "react";
// import Picsart_22-02-28_08-09-42-468.png from "./Picsart_22-02-28_08-09-42-468.png";
// import moon from "./darkmodemoon.jpg";
import arrow from "./arrow.png";
import Picsart_22_03_05_min from "./Picsart_22-03-05_17-17-22-574-min.png";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

export default function Home() {
  function clickfacebook() {
    console.log("clicked");
    if (window.confirm("Proceed to facebook ? ")) {
      window.location.href = "https://www.facebook.com/rishab.mandal.1048";
    }
  }
  function clickinsta() {
    console.log("clicked");
    if (window.confirm("Proceed to Instagram ? ")) {
      window.location.href = "https://www.instagram.com/rishab829/";
    }
  }
  function clicklinkedin() {
    console.log("clicked");
    if (window.confirm("Proceed to Linkedin ? ")) {
      window.location.href = "https://www.instagram.com/rishab829/";
    }
  }
  return (
    <>
      {/*Context*/}
      <darkmode.Consumer>
        {(dark) => {
          return (
            <>
              <div className={`${dark.Darkval} md:hidden lg:hidden`}>
                {/* <div className="bg-red-600 text-right text-white text-2xl pr-3 pt-4">
          <div className="bg-black bg-opacity-25 font-bold pb-2 rounded-xl ml-3 text-right text-white text-2xl pr-4 pt-2">
            Rishab
          </div>
        </div> */}

                {/* Give links here for github, linkedin ,etc  */}

                <div
                  className={`bg-red-600 ${dark.Darkval} rounded-b-2xl text-right text-2xl py-2`}
                >
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 block mx-auto">
                    <img
                      className="object-cover object-center rounded mt-6"
                      alt="hero"
                      src={Picsart_22_03_05_min}
                    />
                  </div>
                  <br />
                </div>
                <div className=" text-2xl font-Ubuntu text-red-600 pl-8 mt-8">
                  Rishab Mandal
                </div>
                <div className="text-2xl font-Ubuntu pl-8 mt-1 mb-8">
                  Web Developer
                </div>
                <p className="font-Ubuntu px-8">
                  Creating beautiful things, <br /> And this is what I love to
                  do !
                </p>
                <div className="flex">
                  <button
                    className={`bg-red-600 ml-8 my-8 hover:shadow-xl hover:shadow-red-600/40 hover:text-red-600 text-white border-2 ${
                      dark.Darkval === "bg-white text-black"
                        ? "hover:bg-white"
                        : "hover:bg-black"
                    } border-red-600 cursor-pointer rounded-xl px-5 py-1`}
                  >
                    Contact Me
                  </button>
                  <img src={arrow} alt="" className="h-5 w-5 my-auto mx-1" />
                </div>
              </div>
              <div className={`${dark.Darkval} hidden md:block lg:block`}>
                <motion.section
                  // initial={{ x: "-100vw" }}
                  // transition={{ duration: 0.7 }}
                  // animate={{ x: 0 }}
                  id="home"
                  className={`text-gray-600 body-font ${dark.Darkval}`}
                >
                  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center ">
                    <motion.div
                      initial={{ x: "-100vw" }}
                      transition={{ duration: 0.7 }}
                      animate={{ x: 0, position: "" }}
                      className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                    >
                      <h1 className="title-font font-Lobster sm:text-6xl text-6xl mb-4 mt-5 ">
                        Hey,
                        <br className="hidden lg:inline-block" />
                      </h1>
                      <h1 className="title-font font-Lobster sm:text-6xl text-6xl mb-4 ">
                        I'am Rishab
                        <br className="hidden lg:inline-block" />
                      </h1>
                      <div className="text-3xl font-Ubuntu mt-5 mb-8">
                        Web Developer
                      </div>
                      <p className="mt-4 font-Ubuntu leading-relaxed text-2xl text-red-700">
                        Creating beautiful things,
                      </p>
                      <p className="mb-8 font-Ubuntu leading-relaxed text-2xl text-red-700">
                        And this is what I love to do !
                      </p>
                      <div className="flex">
                        <button
                          className={`inline font-Ubuntu text-white ${
                            dark.Darkval === "bg-white text-black"
                              ? "hover:bg-white"
                              : "hover:bg-black"
                          } bg-red-700 py-2 px-6 focus:outline-none hover:text-red-600 hover:border-4 hover:bg-white hover:border-red-700 hover:shadow-xl hover:shadow-red-600/40 rounded-xl border-4 border-red-700`}
                        >
                          Contact Me
                        </button>
                        <img
                          src={arrow}
                          alt=""
                          className="h-5 w-5 my-auto mx-2"
                        />
                      </div>
                      <div className="flex justify-center"></div>
                    </motion.div>
                    <motion.div
                      initial={{ x: "100vw" }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                      animate={{ x: 0 }}
                      className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                    >
                      <img
                        className="object-cover object-center rounded mt-[3.75rem]"
                        alt="hero"
                        src={Picsart_22_03_05_min}
                      />
                    </motion.div>
                  </div>
                </motion.section>
              </div>
              <hr></hr>

              {/* FOOTER Section  */}

              <footer className="text-gray-600 bg-red-600 body-font">
                <div className="bg-black pb-20 md:pb-0 lg:pb-0">
                  <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-red-600 text-sm text-center sm:text-left">
                      © 2022 Rishab —
                      <a
                        href="https://github.com/RishabMandal"
                        rel="noopener noreferrer"
                        className="text-white ml-1"
                        target="_blank"
                      >
                        @Rishab
                      </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                      <a
                        className="text-red-600 cursor-pointer"
                        onClick={clickfacebook}
                      >
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      {/* <!-- <a className="ml-3 text-white cursor-pointer">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a> --> */}
                      <a
                        className="ml-3 text-red-600 cursor-pointer"
                        onClick={clickinsta}
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a
                        className="ml-3 text-red-600 cursor-pointer"
                        onClick={clicklinkedin}
                      >
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          ></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </footer>
            </>
          );
        }}
      </darkmode.Consumer>
    </>
  );
}
