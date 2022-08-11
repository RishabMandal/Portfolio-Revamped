import { createContext, useState, useEffect } from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Qualification from "./Qualification";
import Skills from "./Skills";
import { Audio, Puff } from "react-loader-spinner";

const darkmode = createContext();

function App() {
  useEffect(() => {
    // COPY TEXT IS TURNED OFF THROUGH index.html

    // PREVENTING RIGHT CLICK MENU

    window.addEventListener(
      "contextmenu",
      (e) => {
        alert(
          "** ** Right click is disabled ** **\n\nAny attempt made to enable it without the direct consent of RISHAB MANDAL may result in LEGAL ACTION against YOU."
        );
        e.preventDefault();
      },
      false
    );

    // PREVENTING F12 / INSPECT MENU

    document.onkeydown = function (e) {
      if (e.keyCode == 123) {
        alert(
          "** ** LEGAL NOTICE ** ** \nAll site content, including files, images, video, animations, transitions and written content are the property of RISHAB MANDAL.\n\n Any attempts to mimic said content, or use it as your own without the direct consent of RISHAB MANDAL may result in LEGAL ACTION against YOU.\n\nPlease exit this area immediately.          "
        );
        return false;
      }
      if (e.keyCode == 44) {
        alert(
          "** ** Taking Screenshot is NOT allowed ** ** \n\nAll site content, including files, images, video, animations, transitions and written content are the property of RISHAB MANDAL.\n\n Any attempts to mimic said content, or use it as your own without the direct consent of RISHAB MANDAL may result in LEGAL ACTION against YOU.\n\nPlease exit this area immediately.          "
        );
        return false;
      }
    };
  }, []);

  // Dark Mode
  // const [Darkval, setdarkval] = useState("bg-white text-black"); // Context
  const [Darkval, setdarkval] = useState("bg-black text-white"); // Context

  const [loadingscreen, setLoadingscreen] = useState("h-[100vh]");
  const [contentscreen, setContentscreen] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setLoadingscreen("hidden");
      setContentscreen("");
    }, 2000);
  
  }, [])
  

  return (
    <>
      <div className={`${loadingscreen} justify-end py-20 bg-black`}>
        <div className="block mx-[30vw] md:mx-[45vw] mt-[30vh]">
          <Puff
            height="180"
            width="180"
            radius="9"
            color="red"
            ariaLabel="three-dots-loading"
            // wrapperStyle
            // wrapperClass
          />
        </div>
      </div>

      <darkmode.Provider value={{ Darkval, setdarkval }}>
        {/*Context*/}
        <div className={`${contentscreen}`}>
          <Navbar />
        </div>
        {/* <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Qualification /> // Put this in about
        </div>
        <div>
          <Portfolio /> // Put this in about
        </div>
        <div>
          <Contact />
        </div> */}
      </darkmode.Provider>
    </>
  );
}

export default App;
export { darkmode };
