import { darkmode } from "./App";
import React, { useEffect } from "react";
// import languageimage from "./languageimage.jpg";
import projectimage1 from "./Picsart_22-08-10_21-49-15-590.png";
import projectimage2 from "./projectimage2.jpg";
import projectimage3 from "./projectimage3.png";
// From here starts new portion
import HTML from "./html.png";
import CSS from "./css.png";
import JavaScript from "./javascript.png";
import ReactImg from "./react.png";
import Node from "./node.png";
// import FireBase from './firebase.png';
// import AWS from './aws.png';
import GitHub from "./github.png";
import Tailwind from "./tailwind.png";
import Mongo from "./mongo.png";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "./components/Footer";

export default function Skills() {

  // Vibration, Haptic Feedback while scrolling
  const { ref, inView } = useInView();
  // const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      navigator.vibrate(50);
    }
    if (!inView) {
    }
  }, [inView]);

  return (
    <>
      {/*Context*/}
      <darkmode.Consumer>
        {(dark) => {
          return (
            <>
              <AnimatePresence>
                {/* <section
                  id="Skills"
                  className={`text-gray-600 body-font ${dark.Darkval}`}
                >
                  <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <h2 className="sm:text-4xl font-bold font-Ubuntu mt-10 text-3xl mb-2 md:w-2/5 font-Rampart ">
                      My Soft Skills
                    </h2>
                    <div className="md:w-3/5 mt-10 md:pl-6">
                      <p className="leading-relaxed text-base font-Ubuntu">
                        Web development, Basic android application development
                        through Android Studio, Video editing, Photoshop and
                        photo editing, C, Java, React JS, Node JS, Express JS,
                        MongoDB.
                      </p>
                      <div className="flex md:mt-4 mt-6">
                        <a className="text-red-600 inline-flex items-center cursor-pointer ">
                          <button className="inline-flex font-Ubuntu text-white bg-red-700 py-2 px-6 focus:outline-none hover:text-red-600 hover:border-4 hover:bg-white hover:border-red-700 hover:shadow-xl hover:shadow-red-600/40 border-4 border-red-700 rounded-xl">
                            Read more
                          </button>

                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </section> */}
                {/* New Section  */}
                {/* Photos section start (These are the technologies I know) */}
                <div
                  className={`flex flex-col ${dark.Darkval} mt-16 pt-16 items-center text-center`}
                >
                  {/* <hr /> */}
                  <h1
                    className={`title-font sm:text-4xl text-3xl font-bold font-Ubuntu ${dark.Darkval} underline underline-offset-[24px]`}
                  >
                    My Soft Skills
                    <br className="hidden lg:inline-block" />
                  </h1>
                  <p
                    className={`mt-[0.20rem] md:mb-8 lg:mb-8 mb-20 font-Ubuntu leading-relaxed text-red-600 ${
                      dark.Darkval === "bg-white text-black"
                        ? "bg-white"
                        : "bg-black"
                    } px-2`}
                  >
                    what i know
                  </p>
                </div>
                {/* new start */}{" "}
                <div>
                  <div
                    name="skills"
                    className={`w-full pb-56 ${dark.Darkval} `}
                  >
                    <div className="max-w-[1000px] mx-auto py-4 pb-4 flex flex-col justify-center w-full h-full">
                      <div>
                        <p className="py-4 pl-4 text-red-600">
                          // These are the technologies I know
                        </p>
                      </div>

                      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                        <div className="  hover:scale-110 duration-500">
                          <img
                            className="w-20 mx-auto"
                            src={HTML}
                            alt="HTML icon"
                          />
                          <p className="my-4 font-Ubuntu">HTML</p>
                        </div>
                        <div className="  hover:scale-110 duration-500">
                          <img
                            className="w-20 mx-auto"
                            src={CSS}
                            alt="HTML icon"
                          />
                          <p className="my-4 font-Ubuntu">CSS</p>
                        </div>
                        <div className="  hover:scale-110 duration-500">
                          <img
                            className="w-20 mx-auto"
                            src={JavaScript}
                            alt="HTML icon"
                          />
                          <p className="my-4 font-Ubuntu">JAVASCRIPT</p>
                        </div>
                        <div className="  hover:scale-110 duration-500">
                          <img
                            className="w-20 mx-auto"
                            src={ReactImg}
                            alt="HTML icon"
                          />
                          <p className="my-4 font-Ubuntu">REACT</p>
                        </div>
                        <div className="  hover:scale-110 duration-500">
                          <img
                            className="w-20 mx-auto"
                            src={GitHub}
                            alt="HTML icon"
                          />
                          <p className="my-4 font-Ubuntu">GITHUB</p>
                        </div>
                        <div className="  hover:scale-110 duration-500">
                          <img
                            className="w-20 mx-auto"
                            src={Node}
                            alt="HTML icon"
                          />
                          <p className="my-4 font-Ubuntu">NODE JS</p>
                        </div>
                        <div className="  hover:scale-110 duration-500">
                          <img
                            className="w-20 mx-auto"
                            src={Mongo}
                            alt="HTML icon"
                          />
                          <p className="my-4 font-Ubuntu">MONGO DB</p>
                        </div>
                        <div className="  hover:scale-110 duration-500">
                          <img
                            className="w-20 mx-auto"
                            src={Tailwind}
                            alt="HTML icon"
                          />
                          <p className="my-4 font-Ubuntu">TAILWIND</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* // */}
                <div
                  className={`flex flex-col ${dark.Darkval} items-center text-center`}
                >
                  <h1
                    className={`title-font sm:text-4xl text-3xl font-bold font-Ubuntu ${dark.Darkval} underline underline-offset-[24px]`}
                  >
                    Projects
                    <br className="hidden lg:inline-block" />
                  </h1>
                  <p
                    className={`mt-[0.20rem] md:mb-8 lg:mb-8 mb-20 font-Ubuntu leading-relaxed text-red-600 ${
                      dark.Darkval === "bg-white text-black"
                        ? "bg-white"
                        : "bg-black"
                    } px-2`}
                  >
                    my work
                  </p>
                </div>
                {/* 1st project  */}
                <motion.section
                  className={`text-gray-600 ${dark.Darkval} body-font font-Rampart `}
                >
                  <motion.div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      exit={{
                        x: "-100%",
                        opacity: 0,
                        transition: { duration: 0, delay: 0 },
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                      ref={ref}
                      className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
                    >
                      <motion.img
                        onClick={() => {
                          window.location.href =
                            "https://rishabmandal.github.io/Login-Page/";
                        }}
                        className="object-cover object-center rounded-xl cursor-pointer"
                        alt="hero"
                        src={projectimage1}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ x: "100%", opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      exit={{
                        x: "100%",
                        opacity: 0,
                        transition: { duration: 0, delay: 0 },
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                      className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                    >
                      <h1 className="font-Ubuntu sm:text-4xl text-3xl mb-4 text-red-600">
                        Login and Register Page
                      </h1>
                      <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                        Technologies used: HTML, CSS & Javascript, React JS.
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.section>
                {/* 2nd project  */}
                <motion.section
                  className={`text-gray-600 ${dark.Darkval} body-font font-Rampart `}
                >
                  <motion.div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      exit={{
                        x: "-100%",
                        opacity: 0,
                        transition: { duration: 0, delay: 0 },
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                      ref={ref}
                      // className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
                      className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                    >
                      {/* <motion.img
                        onClick={() => {
                          window.location.href =
                            "https://rishabmandal.github.io/Login-Page/";
                        }}
                        className="object-cover object-center rounded-xl cursor-pointer"
                        alt="hero"
                        src={projectimage2}
                      /> */}
                      <h1 className="font-Ubuntu sm:text-4xl text-3xl mb-4 text-red-600">
                        Personal Password Manager
                      </h1>
                      {/* <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                        Made with React JS, Tailwind CSS & Framer Motion.
                      </p> */}
                      <p className="mb-2 mt-6 mr-2 leading-relaxed font-Ubuntu">
                        PersonalPass is a password manager that helps users
                        securely store and manage their login credentials for
                        various online accounts. It helps users manage their
                        account security by providing alerts for potential
                        security issues and offering suggestions for creating
                        stronger passwords.
                      </p>
                      <p className="mb-8 mt-2 mr-2 leading-relaxed font-Ubuntu">
                        Technologies used : JavaScript, Tailwind CSS, React JS,
                        Framer Motion, Firebase
                      </p>
                    </motion.div>
                    <motion.div
                      // ref={ref2}
                      initial={{ x: "100%", opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      exit={{
                        x: "100%",
                        opacity: 0,
                        transition: { duration: 0, delay: 0 },
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                      // className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                      className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
                    >
                      {/* <h1 className="font-Ubuntu sm:text-4xl text-3xl mb-4 text-red-600">
                        Personal Password Manager
                      </h1>
                      <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                        Made with React JS, Tailwind CSS & Framer Motion.
                      </p> */}
                      <motion.img
                        onClick={() => {
                          window.location.href =
                            "https://rishabmandal.github.io/Personal-Password-Manager/#";
                        }}
                        className="object-cover object-center rounded-xl cursor-pointer"
                        alt="hero"
                        src={projectimage2}
                      />
                    </motion.div>
                  </motion.div>
                </motion.section>
                {/* 3rd project  */}
                <motion.section
                  className={`text-gray-600 ${dark.Darkval} body-font font-Rampart `}
                >
                  <motion.div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      exit={{
                        x: "-100%",
                        opacity: 0,
                        transition: { duration: 0, delay: 0 },
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                      ref={ref}
                      className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
                    >
                      <motion.img
                        onClick={() => {
                          window.location.href =
                            "https://rishabmandal.github.io/Hangman-Game/";
                        }}
                        className="object-cover object-center rounded-xl cursor-pointer"
                        alt="hero"
                        src={projectimage3}
                      />
                    </motion.div>
                    <motion.div
                      // ref={ref2}
                      initial={{ x: "100%", opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      exit={{
                        x: "100%",
                        opacity: 0,
                        transition: { duration: 0, delay: 0 },
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                      className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                    >
                      <h1 className="font-Ubuntu sm:text-4xl text-3xl mb-4 text-red-600">
                        Hangman Game
                      </h1>
                      {/* <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                        Made with React JS & Tailwind CSS.
                      </p> */}
                      <p className="mb-4 mt-2 leading-relaxed font-Ubuntu">
                        Designed a word game in which player has to guess a word
                        that the other player has thought of, by guessing the
                        letters in it. Every time they guess a wrong letter,
                        part of a picture of a person being hanged is drawn, and
                        if the picture is completed the person guessing has
                        lost.
                      </p>
                      <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                        Technologies used : JavaScript, Tailwind CSS, React JS
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.section>
                {/* End of photos section */}
                <hr className="bg-white"/>
                {/* FOOTER Section  */}
                <footer className="text-gray-600 bg-red-600 body-font">
                  <Footer />
                </footer>
              </AnimatePresence>
            </>
          );
        }}
      </darkmode.Consumer>
    </>
  );
}
