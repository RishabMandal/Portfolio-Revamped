import { darkmode } from "./App";
import React from "react";
import arrow from "./arrow.png";
import Picsart_22_03_05_min from "./Picsart_22-03-05_17-17-22-574-min.png";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
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
                <div className="text-2xl font-Ubuntu flex pl-8 mt-1 mb-8">
                  {/* I am a */}
                  <div className="inline text-red-600">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Web Developer")
                          .pauseFor(2000)
                          .deleteAll()
                          .typeString("Programmer")
                          .pauseFor(2000)
                          .deleteAll()
                          .typeString("Your Buddy :) ")
                          .pauseFor(2000)
                          .deleteAll()
                          .typeString("CSE Student")
                          .pauseFor(2000)
                          .deleteAll()
                          .typeString("Active Learner")
                          .pauseFor(2000)
                          .deleteAll()
                          .typeString("Web Developer")
                          .pauseFor(2000)
                          .start();
                      }}
                    />
                  </div>
                </div>
                <p className="font-Ubuntu px-8">
                  Creating beautiful things, <br /> And this is what I love to
                  do !
                </p>
                <div className="flex">
                  <button
                    onClick={() => {
                      navigator.vibrate(50);
                      window.location.href =
                        "https://drive.google.com/file/d/1VlmVWmTcIVSAHyE6OcVj-QYgtRldUGep/view?usp=share_link";
                    }}
                    className={`bg-red-600 ml-8 my-8 hover:shadow-xl hover:shadow-red-600/40 hover:text-red-600 text-white border-2 ${
                      dark.Darkval === "bg-white text-black"
                        ? "hover:bg-white"
                        : "hover:bg-black"
                    } border-red-600 cursor-pointer rounded-xl transition ease-in px-5 py-1`}
                  >
                    Resume
                  </button>
                  <img src={arrow} alt="" className="h-5 w-5 my-auto mx-1" />
                </div>
              </div>
              <div
                className={`${dark.Darkval} min-h-[96vh] hidden md:block lg:block`}
              >
                <motion.section
                  id="home"
                  className={`text-gray-600 body-font ${dark.Darkval}`}
                >
                  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center ">
                    <motion.div
                      initial={{ x: "-100vw" }}
                      transition={{
                        duration: 0.7,
                        type: "spring",
                        bounce: 0.3,
                      }}
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
                      <div className="text-3xl flex font-Ubuntu mt-5 mb-8">
                        {/*I am a  */}
                        <div className="inline text-red-600">
                          <Typewriter
                            // className="text-red-600"
                            onInit={(typewriter) => {
                              typewriter
                                .typeString("Web Developer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Programmer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Your Buddy :) ")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("CSE Student")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Active Learner")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Web Developer")
                                .pauseFor(2000)
                                .start();
                            }}
                          />
                        </div>
                      </div>
                      <p className="mt-4 font-Ubuntu leading-relaxed text-2xl text-red-700">
                        Creating beautiful things,
                      </p>
                      <p className="mb-8 font-Ubuntu leading-relaxed text-2xl text-red-700">
                        And this is what I love to do !
                      </p>
                      <div className="flex">
                        <button
                          onClick={() => {
                            window.location.href =
                              "https://drive.google.com/file/d/1VlmVWmTcIVSAHyE6OcVj-QYgtRldUGep/view?usp=share_link";
                          }}
                          className={`inline font-Ubuntu text-white ${
                            dark.Darkval === "bg-white text-black"
                              ? "hover:bg-white"
                              : "hover:bg-black"
                          } bg-red-700 py-2 px-6 focus:outline-none transition ease-in hover:text-red-600 hover:border-4 hover:bg-white hover:border-red-700 hover:shadow-xl hover:shadow-red-600/40 rounded-xl border-4 border-red-700`}
                        >
                          Resume
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
                      transition={{
                        duration: 0.7,
                        delay: 0.6,
                        type: "spring",
                        bounce: 0.3,
                      }}
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
                <Footer />
              </footer>
            </>
          );
        }}
      </darkmode.Consumer>
    </>
  );
}
