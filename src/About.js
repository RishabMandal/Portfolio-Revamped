import React, { useRef, useEffect, useState } from "react";
import { darkmode } from "./App";
import { motion, AnimatePresence } from "framer-motion";
import downloadimage from "./download.png";
import ReactImg from "./react.png";
import HTML from "./html.png";
import CSS from "./css.png";
import JavaScript from "./javascript.png";
import GitHub from "./github.png";
import Tailwind from "./tailwind.png";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useInView } from "react-intersection-observer";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import Footer from "./components/Footer";

// My animation try, Beware
function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const texture1 = useLoader(TextureLoader, Tailwind);
  const texture2 = useLoader(TextureLoader, ReactImg);
  const texture3 = useLoader(TextureLoader, HTML);
  const texture4 = useLoader(TextureLoader, CSS);
  const texture5 = useLoader(TextureLoader, JavaScript);
  const texture6 = useLoader(TextureLoader, GitHub);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.01)
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      // {...propsii}
      // map={propsii}
      {...props}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <OrbitControls />
      <boxBufferGeometry args={[2.5, 2.5, 2.5]} />
      {/* <meshStandardMaterial
        attachArray="material"
        map={texture1}
        color={hovered ? "green" : "white"}
      />
      <meshStandardMaterial
        attachArray="material"
        map={texture2}
        color={hovered ? "green" : "white"}
      />
      <meshStandardMaterial
        attachArray="material"
        map={texture3}
        color={hovered ? "green" : "white"}
      />
      <meshStandardMaterial
        attachArray="material"
        map={texture4}
        color={hovered ? "green" : "white"}
      />
      <meshStandardMaterial
        attachArray="material"
        map={texture5}
        color={hovered ? "green" : "white"}
      />
      <meshStandardMaterial
        attachArray="material-1"
        map={texture6}
        color={hovered ? "green" : "red"}
      /> */}
      <meshStandardMaterial
        attach="material-0"
        map={texture1}
        color={hovered ? "" : "white"}
      />
      <meshStandardMaterial
        attach="material-1"
        map={texture2}
        color={hovered ? "" : ""}
      />
      <meshStandardMaterial
        attach="material-2"
        map={texture3}
        color={hovered ? "" : ""}
      />
      <meshStandardMaterial
        attach="material-3"
        map={texture4}
        color={hovered ? "" : ""}
      />
      <meshStandardMaterial
        attach="material-4"
        map={texture5}
        color={hovered ? "" : ""}
      />
      <meshStandardMaterial
        attach="material-5"
        map={texture6}
        color={hovered ? "" : ""}
      />
    </mesh>
  );
}
//

export default function About() {
  // Vibration, Haptic Feedback while scrolling
  const { ref, inView } = useInView();
  // const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      navigator.vibrate(50);
      // animation.start({
      //   x: 0,
      //   transition: { type: "spring" },
      // });
    }
    if (!inView) {
      // animation.start({
      //   x: "-100vw",
      //   transition: { type: "spring" },
      // });
    }
  }, [inView]);

  return (
    <>
      {/*Context*/}
      <darkmode.Consumer>
        {(dark) => {
          return (
            <>
              {/* The bigger laptop screen part */}
              {/* // */}
              <section
                id="aboutmyself"
                className={`text-gray-600 ${dark.Darkval} pt-12 body-font hidden md:block lg:block font-Rampart`}
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
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                    animate={{ x: 0 }}
                    className="lg:flex-grow md:w-1/2 lg:pr-10 lg:mt-[-150px] md:pr-8 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center"
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
                    <p className="mb-8 leading-relaxed text-lg font-Ubuntu">
                      Rishab Mandal, that's me. Born in India, I am a MERN-Stack
                      Web Developer creating websites for people who know that
                      prioritizing projects leads to profits.
                    </p>
                    <p className="mb-8 leading-relaxed text-lg font-Ubuntu">
                      Because when you show up as your full self, you create
                      space for your clients to do the same. And then everybody
                      wins.
                    </p>
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          navigator.vibrate(50);
                          window.location.href =
                            "https://drive.google.com/file/d/1VlmVWmTcIVSAHyE6OcVj-QYgtRldUGep/view?usp=share_link";
                        }}
                        className={`inline-flex ${
                          dark.Darkval === "bg-white text-black"
                            ? "hover:bg-white"
                            : "hover:bg-black"
                        } font-Ubuntu text-white transition ease-in hover:shadow-xl hover:shadow-red-600/40 bg-red-700 animate-bouncy hover:animate-none border-4 border-red-700 py-2 px-6 focus:outline-none hover:text-red-600 hover:border-4 hover:border-red-600 hover:rounded-xl rounded-xl`}
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
                    transition={{
                      duration: 0.7,
                      delay: 0.6,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    animate={{ x: 0 }}
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-[-150px]"
                  >
                    {/* My try for cube animation  */}
                    <div>
                      <Canvas>
                        <ambientLight intensity={0.7} />
                        <spotLight
                          position={[10, 10, 10]}
                          angle={0.15}
                          penumbra={1}
                        />
                        <pointLight position={[-10, -10, -10]} />
                        <Box position={[0, 0, 0]} />
                      </Canvas>
                    </div>
                  </motion.div>
                </div>
              </section>
              {/* The smaller mobile screen part */}
              {/* // */}
              {/* // */}
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
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
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
                    {/* <p className="mb-8 leading-relaxed">
                      Rishab Mandal, that's me. Born in Mumbai, I am a
                      Full-Stack Web developer and a UI/UX designer.
                    </p> */}
                    <p className="mb-8 leading-relaxed text-lg font-Ubuntu">
                      Rishab Mandal, that's me. Born in India, I am a Full-Stack
                      Web Developer creating websites for people who know that
                      prioritizing projects leads to profits.
                    </p>
                    <p className="mb-8 leading-relaxed text-lg font-Ubuntu">
                      Because when you show up as your full self, you create
                      space for your clients to do the same. And then everybody
                      wins.
                    </p>
                    <div className="flex justify-center">
                      <button
                        className={`inline-flex ${
                          dark.Darkval === "bg-white text-black"
                            ? "hover:bg-white"
                            : "hover:bg-black"
                        } font-Ubuntu text-white hover:shadow-xl hover:shadow-red-600/40 bg-red-700 animate-bouncy hover:animate-none border-4 border-red-700 py-2 px-6 focus:outline-none hover:text-red-600 hover:border-4 hover:border-red-600 hover:rounded-xl rounded-xl`}
                        onClick={() => {
                          navigator.vibrate(50);
                        }}
                      >
                        Download CV
                      </button>
                      <img
                        onClick={() => {
                          navigator.vibrate(50);
                          window.location.href =
                            "https://drive.google.com/file/d/1VlmVWmTcIVSAHyE6OcVj-QYgtRldUGep/view?usp=share_link";
                        }}
                        src={downloadimage}
                        alt=""
                        className="w-8 h-8 my-auto cursor-pointer mx-2"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    // initial={{ x: "100vw" }}
                    // transition={{ duration: 0.7,delay:1 }}
                    // animate={{ x: 0,zIndex:0 }}
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                  >
                    <div
                      onClick={() => {
                        navigator.vibrate([
                          100, 50, 100, 75, 100, 100, 100, 150, 100, 200, 100,
                        ]);
                      }}
                    >
                      <Canvas>
                        <ambientLight intensity={0.7} />
                        <spotLight
                          position={[10, 10, 10]}
                          angle={0.15}
                          penumbra={1}
                        />
                        <pointLight position={[-10, -10, -10]} />
                        <Box position={[0, 0, 0]} />
                      </Canvas>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* QUALIFICATION  */}
              <AnimatePresence>
                <div className={`${dark.Darkval}`}>
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
                    className={` ${dark.Darkval} w-screen text-center px-5 py-24 items-center`}
                  >
                    <h1
                      ref={ref}
                      className={`title-font sm:text-4xl text-3xl my-10 mx-auto font-bold font-Ubuntu ${dark.Darkval}`}
                    >
                      Qualification
                      <br className="hidden lg:inline-block" />
                    </h1>
                    <div className="inline-block mx-auto text-left">
                      <div className="flex my-8 text-lg">
                        <div className="bg-red-600 rounded-full px-3 py-1 h-fit font-semibold">
                          3
                        </div>
                        <div className=" text-red-600 mx-4 hover:scale-110 transition ease-in">
                          BE in Computer Engineering{" "}
                          <p>Thadomal Shahani Engineering College</p>
                        </div>
                      </div>
                      <div className="flex my-8 text-lg">
                        <div className="bg-red-600 rounded-full px-3 py-1 h-fit font-semibold">
                          2
                        </div>
                        <div className=" text-red-600 mx-4 hover:scale-110 transition ease-in">
                          HSC <p>Swami Vivekanand Junior College</p>
                        </div>
                      </div>
                      <div className="flex my-8 text-lg">
                        <div className="bg-red-600 rounded-full px-3 py-1 h-fit font-semibold">
                          1
                        </div>
                        <div className=" text-red-600 mx-4 hover:scale-110 transition ease-in">
                          SSC <p>St. Sebastian's High School</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatePresence>

              <hr className="bg-white" />

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
