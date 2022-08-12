import { darkmode } from "./App";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
  function clickme() {
    console.log("clicked");
    alert("Sending this message ....");
  }

  return (
    <>
      {/*Context*/}
      <darkmode.Consumer>
        {(dark) => {
          return (
            <>
              <section id="contactme" className={`${dark.Darkval} md:h-[93vh] lg:h-[93vh] body-font`}>
                <div className="container mx-auto flex px-5 py-5 md:py-24 lg:py-24 md:flex-row flex-col items-center">
                  <motion.div
                    initial={{ x: "-100vw" }}
                    transition={{
                      duration: 0.7,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    animate={{ x: 0, position: "" }}
                    className="lg:flex-grow mt-10 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                  >
                    <h1 className="title-font font-Ubuntu sm:text-4xl text-3xl mb-1 font-bold underline underline-offset-[24px]">
                      Contact me
                      <br className="hidden lg:inline-block" />
                    </h1>
                    <p
                      className={`mb-8 leading-relaxed font-Ubuntu text-red-600 ${
                        dark.Darkval === "bg-white text-black"
                          ? "bg-white"
                          : "bg-black"
                      } px-2 sm:ml-[2.75rem]`}
                    >
                      get in touch
                    </p>
                    <p className="mb-4 mt-2 leading-relaxed font-Ubuntu text-lg">
                      Wow Still here ?! Let's Collab ...
                    </p>
                    {/* <h1 className="title-font sm:text-xl text-xl mb-4 font-medium">
                      Name <br /> Rishab Mandal
                    </h1>
                    <h1 className="title-font sm:text-xl text-xl mb-4 font-medium">
                      Address <br />
                      Mumbai, Maharashtra
                    </h1>
                    <h1 className="title-font sm:text-xl text-xl mb-4 font-medium">
                      Email <br /> rishab829@gmail.com
                    </h1> */}
                    <h1 className="title-font sm:text-xl text-xl mb-4 flex font-medium">
                      Feel free to send an email on
                      <div className="ml-2 text-red-700">rishab829@gmail.com</div> 
                    </h1> 
                    <div className="flex justify-center"></div>
                  </motion.div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <form method="POST">
                      <motion.div
                        initial={{ x: "100vw" }}
                        transition={{
                          duration: 0.7,
                          delay: 0.6,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        animate={{ x: 0 }}
                        className="lg:w-[100%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
                      >
                        <h2 className="text-gray-900 text-lg font-bold text-center font-Ubuntu title-font mb-5">
                          Message me
                        </h2>
                        <div className="mb-4">
                          <input
                            type="text"
                            id="full-name"
                            name="name"
                            placeholder="Name"
                            className="w-full placeholder-gray-800 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="w-full placeholder-gray-800 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="text"
                            id="text2"
                            name="message"
                            placeholder="Message.."
                            className="w-full placeholder-gray-800 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 mb-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                        <button
                          type="submit"
                          id="Sendmessage"
                          onClick={clickme}
                          className="text-white bg-red-700 border-4 border-red-600 py-2 px-6 focus:outline-none hover:bg-white hover:text-red-600  hover:rounded-xl font-Ubuntu rounded-xl"
                        >
                          Send message
                        </button>
                        {/* <script>
                            function clickme() {
                                console.log("clicked");
                                // if(confirm("Send this message ? ")){
                                //   location.replace("https://www.instagram.com/rishab829/");
                                // }
                                alert("Sending this message ....");
                            }
                        </script> */}
                      </motion.div>
                    </form>
                  </div>
                </div>
              </section>
              <hr />

              {/* FOOTER Section  */}

              <footer className="text-gray-600 bg-red-600 body-font">
                <div className="bg-black pb-20 md:pb-0 lg:pb-0">
                  <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-red-600 text-sm text-center font-Ubuntu sm:text-left">
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
