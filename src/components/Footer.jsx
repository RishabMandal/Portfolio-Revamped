import React from "react";
import githubicon from "../githubicon3.png";

const Footer = () => {
  function clickfacebook() {
    if (window.confirm("Proceed to facebook ? ")) {
      window.location.href = "https://www.facebook.com/rishab.mandal.1048";
    }
  }
  function clickinsta() {
    if (window.confirm("Proceed to Instagram ? ")) {
      window.location.href = "https://www.instagram.com/rishab829/";
    }
  }
  function clicklinkedin() {
    if (window.confirm("Proceed to Linkedin ? ")) {
      window.location.href = "https://www.linkedin.com/in/RishabMandal";
    }
  }
  return (
    <div className="bg-black pb-20 md:pb-0 lg:pb-0">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-red-600 font-Ubuntu text-sm text-center sm:text-left">
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
          <a className="text-red-600 cursor-pointer" onClick={clickfacebook}>
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
          <a className="ml-3 text-red-600 cursor-pointer" onClick={clickinsta}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
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
          <a className="ml-3 text-red-600 cursor-pointer">
            <img
              src={githubicon}
              onClick={() => {
                if (window.confirm("Proceed to GitHub ? ")) {
                  window.location.href = "https://github.com/RishabMandal";
                }
              }}
              className="w-6 h-6 -mt-1"
              alt=""
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
