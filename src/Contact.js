import { darkmode } from "./App";
import React from "react";
import { motion } from "framer-motion";
import githubicon from "./githubicon3.png";
import Footer from "./components/Footer";

export default function Contact() {
  function clickme() {
    // console.log("clicked");
    alert("Sending this message ....");
  }

  return (
    <>
      {/*Context*/}
      <darkmode.Consumer>
        {(dark) => {
          return (
            <>
              <section
                id="contactme"
                className={`${dark.Darkval} md:h-[93vh] lg:h-[93vh] body-font`}
              >
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
                    <h1 className="title-font sm:text-xl text-xl mb-4 flex flex-wrap font-medium">
                      Feel free to send an email on
                      <div className="lg:ml-2  text-red-700">
                        rishab829@gmail.com
                      </div>
                    </h1>
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
                      </motion.div>
                    </form>
                  </div>
                </div>
              </section>
              <hr className="bg-white"/>

              {/* FOOTER Section  */}

              <footer className="text-gray-600 bg-red-600 body-font">
                <Footer/>
              </footer>
            </>
          );
        }}
      </darkmode.Consumer>
    </>
  );
}
