import { darkmode } from "./App";
import React from "react";
import languageimage from "./languageimage.jpg";
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

export default function Skills() {
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
              <section
                id="Skills"
                className={`text-gray-600 body-font ${dark.Darkval}`}
              >
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                  <h2 className="sm:text-4xl font-bold font-Ubuntu mt-10 text-3xl mb-2 md:w-2/5 font-Rampart ">
                    My Soft Skills
                  </h2>
                  <div className="md:w-3/5 mt-10 md:pl-6">
                    <p className="leading-relaxed text-base">
                      Website and webpage development, Basic android application
                      development through Android Studio, Video editing,
                      Photoshop and photo editing, React JS, Node JS, Express
                      JS, MongoDB.
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
              </section>
              <hr />

              {/* Languages section  */}
              <section
                className={`text-gray-600 ${dark.Darkval} body-font font-Rampart `}
              >
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                      className="object-cover object-center rounded-xl"
                      alt="hero"
                      src={languageimage}
                    />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="font-Ubuntu sm:text-4xl text-3xl mb-4 text-red-600">
                      Languages I am comfortable with
                    </h1>
                    <p className="mb-8 mt-2 leading-relaxed ">
                      Java, C++, HTML, CSS & Javascript, React JS.
                    </p>
                  </div>
                </div>
              </section>
              <hr></hr>

              {/* New Section  */}

              {/* Photos section start (These are the technologies I know) */}
              <div
                className={`flex flex-col ${dark.Darkval} py-16 md:pb-0 lg:pb-0 items-center text-center`}
              >
                <hr />
                <h1
                  className={`title-font sm:text-4xl text-3xl mb-1 font-bold font-Ubuntu ${dark.Darkval} underline underline-offset-[24px]`}
                >
                  My Soft Skills
                  <br className="hidden lg:inline-block" />
                </h1>
                <p
                  className={`md:mb-8 lg:mb-8 mb-20 font-Ubuntu leading-relaxed text-red-600 ${
                    dark.Darkval === "bg-white text-black"
                      ? "bg-white"
                      : "bg-black"
                  } px-2`}
                >
                  what i know
                </p>
              </div>

              {/* new start */}
              <div
                name="skills"
                className={`w-full pb-56 h-screen ${dark.Darkval} `}
              >
                {/* Container */}
                <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                  <div>
                    <p className="py-4">// These are the technologies I know</p>
                  </div>

                  <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="  hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={HTML}
                        alt="HTML icon"
                      />
                      <p className="my-4">HTML</p>
                    </div>
                    <div className="  hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
                      <p className="my-4">CSS</p>
                    </div>
                    <div className="  hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={JavaScript}
                        alt="HTML icon"
                      />
                      <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className="  hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={ReactImg}
                        alt="HTML icon"
                      />
                      <p className="my-4">REACT</p>
                    </div>
                    <div className="  hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={GitHub}
                        alt="HTML icon"
                      />
                      <p className="my-4">GITHUB</p>
                    </div>
                    <div className="  hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={Node}
                        alt="HTML icon"
                      />
                      <p className="my-4">NODE JS</p>
                    </div>
                    <div className="  hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={Mongo}
                        alt="HTML icon"
                      />
                      <p className="my-4">MONGO DB</p>
                    </div>
                    <div className="  hover:scale-110 duration-500">
                      <img
                        className="w-20 mx-auto"
                        src={Tailwind}
                        alt="HTML icon"
                      />
                      <p className="my-4">TAILWIND</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* End of photos section */}

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
