import React, { useContext, useRef, useEffect } from "react";
import { darkmode } from "./App";
// import gsap from "gsap";
import { motion } from "framer-motion";
import webimage from "./Webdesignimage.jpg";
import downloadimage from "./download.png";

export default function About() {
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
              {/* The bigger laptop screen part */}
              <section
                id="aboutmyself"
                className={`text-gray-600 ${dark.Darkval} body-font hidden md:block lg:block font-Rampart`}
              >
                {/* <div className="text-center m-10">
        <h1 className="title-font sm:text-4xl text-3xl mb-1 font-bold text-black underline underline-offset-[24px]">
          About myself
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed text-red-600 bg-white px-2">
          who i am
        </p>
      </div> */}
                <div
                  className={`container ${dark.Darkval} mx-auto flex px-5 py-24 md:flex-row flex-col items-center`}
                >
                  <motion.div
                    initial={{ x: "-100vw" }}
                    transition={{ duration: 0.7 }}
                    animate={{ x: 0 }}
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center"
                  >
                    <hr />
                    <h1
                      className={`title-font sm:text-4xl text-3xl mb-1 font-bold font-Ubuntu ${dark.Darkval} underline underline-offset-[24px]`}
                    >
                      About myself
                      <br className="hidden lg:inline-block" />
                    </h1>
                    <p
                      className={`mb-8 font-Ubuntu leading-relaxed text-red-600 ${
                        dark.Darkval === "bg-white text-black"
                          ? "bg-white"
                          : "bg-black"
                      } px-2`}
                    >
                      who i am
                    </p>
                    <p className="mb-8 leading-relaxed">
                      Rishab Mandal, that's me. Born in Mumbai, I am a
                      Full-Stack web developer and a UI/UX designer.
                    </p>
                    <div className="flex justify-center">
                      <button
                        className={`inline-flex ${
                          dark.Darkval === "bg-white text-black"
                            ? "hover:bg-white"
                            : "hover:bg-black"
                        } font-Ubuntu text-white hover:shadow-xl hover:shadow-red-600/40 bg-red-700 animate-bouncy hover:animate-none border-4 border-red-700 py-2 px-6 focus:outline-none hover:text-red-600 hover:border-4 hover:border-red-600 hover:rounded-xl rounded-xl`}
                      >
                        Download CV
                      </button>
                      <img
                        src={downloadimage}
                        alt=""
                        className="w-8 h-8 my-auto mx-2"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ x: "100vw" }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    animate={{ x: 0 }}
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                  >
                    <img
                      className="object-cover object-center rounded-xl"
                      alt="hero"
                      src={webimage}
                    />
                  </motion.div>
                </div>
              </section>
              {/* The smaller mobile screen part */}
              <section
                id="aboutmyself"
                className={`text-gray-600 ${dark.Darkval} md:hidden lg:hidden body-font font-Rampart`}
              >
                {/* <div className="text-center m-10">
        <h1 className="title-font sm:text-4xl text-3xl mb-1 font-bold text-black underline underline-offset-[24px]">
          About myself
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed text-red-600 bg-white px-2">
          who i am
        </p>
      </div> */}
                <div
                  className={`container ${dark.Darkval} mx-auto flex px-5 py-24 md:flex-row flex-col items-center`}
                >
                  <motion.div
                    initial={{ x: "-100vw" }}
                    transition={{ duration: 0.7 }}
                    animate={{ x: 0 }}
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center"
                  >
                    <hr />
                    <h1
                      className={`title-font sm:text-4xl text-3xl mb-1 font-bold font-Ubuntu ${dark.Darkval} underline underline-offset-[24px]`}
                    >
                      About myself
                      <br className="hidden lg:inline-block" />
                    </h1>
                    <p
                      className={`mb-8 font-Ubuntu leading-relaxed text-red-600 ${
                        dark.Darkval === "bg-white text-black"
                          ? "bg-white"
                          : "bg-black"
                      } px-2`}
                    >
                      who i am
                    </p>
                    <p className="mb-8 leading-relaxed">
                      Rishab Mandal, that's me. Born in Mumbai, I am a
                      Full-Stack Web developer and a UI/UX designer.
                    </p>
                    <div className="flex justify-center">
                      <button
                        className={`inline-flex ${
                          dark.Darkval === "bg-white text-black"
                            ? "hover:bg-white"
                            : "hover:bg-black"
                        } font-Ubuntu text-white hover:shadow-xl hover:shadow-red-600/40 bg-red-700 animate-bouncy hover:animate-none border-4 border-red-700 py-2 px-6 focus:outline-none hover:text-red-600 hover:border-4 hover:border-red-600 hover:rounded-xl rounded-xl`}
                      >
                        Download CV
                      </button>
                      <img
                        src={downloadimage}
                        alt=""
                        className="w-8 h-8 my-auto mx-2"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    // initial={{ x: "100vw" }}
                    // transition={{ duration: 0.7,delay:1 }}
                    // animate={{ x: 0,zIndex:0 }}
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                  >
                    <img
                      className="object-cover object-center rounded-xl"
                      alt="hero"
                      src={webimage}
                    />
                  </motion.div>
                </div>
              </section>

              {/* Try  */}
              {/* QUALIFICATION  */}
              <div
                className={` ${dark.Darkval} w-screen text-center px-5 py-24 items-center`}
              >
                {/* <h1
                  className={`title-font sm:text-4xl text-3xl mx-auto font-bold font-Ubuntu ${dark.Darkval} underline underline-offset-[24px]`}
                >
                  Qualification
                  <br className="hidden lg:inline-block" />
                </h1> */}
                <h1
                  className={`title-font sm:text-4xl text-3xl my-10 mx-auto font-bold font-Ubuntu ${dark.Darkval}`}
                >
                  Qualification
                  <br className="hidden lg:inline-block" />
                </h1>
                {/* <p
                  className={`mt-[0.20rem] md:mb-8 lg:mb-8 mb-20 font-Ubuntu leading-relaxed text-red-600 ${
                    dark.Darkval === "bg-white text-black"
                      ? "bg-white"
                      : "bg-black"
                  } px-2`}
                >
                  what i know
                </p> */}
                <ul class="steps steps-vertical">
                  {/* <li class="step step-primary">Register</li>
                  <li class="step step-primary">Choose plan</li> */}
                  {/* <li class="step step-success">Purchase</li> */}
                  <li class="step step-error text-red-600 text-left text-xl my-2"><div className="text-left mx-3"> BE in Computer Engineering <br />Thadomal Shahani Engineering College</div></li>
                  <li class="step step-error text-red-600 text-left text-xl my-2"><div className="text-left mx-3"> HSC <br />Swami Vivekanand Junior College</div></li>
                  <li class="step step-error text-red-600 text-left text-xl my-2"><div className="text-left mx-3"> SSC <br />St. Sebastian's High School</div></li>
                </ul>
              </div>
              {/* // */}
              
              {/* // */}

              <hr />

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
