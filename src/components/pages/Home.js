import React from "react";
import { motion } from "framer-motion";
// import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
// import { IoMenuOutline } from "react-icons/";

function Home() {
  const handleType = (count: 15) => {
    // access word count number
    // console.log(count);
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };

  return (
    <main className=" w-screen h-screen">
      <section className="">
        <section className=" text-left p-8 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0 }}
          >
            <h2 className=" p-8  text-4xl py-2 text-teal-600 font-medium md:text-8xl  ">
              <span>Hello!</span>
              <br />
              <span>I am </span>
              <span>Sam,</span>
              <br />
              <span className="">Web Developer</span>
            </h2>
          </motion.div>
          <br />
          <span className=" p-8 text-2xl py-2 text-gray-500 md:text-3xl header-gradient  ">
            Front-end Developer
          </span>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto"></p>
        </section>
        <section className=" px-16 text-gray-500 text-left md:text-3xl lg:text-6xl">
          <Typewriter
            words={[
              "LEARNING NEW THINGS",
              "SOLVING NEW PROBLEMS",
              "I HAVE NO FEAR OF FAILURE",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </section>
      </section>
      <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 mt-16 ">
        {/*<AiFillTwitterCircle />
          <AiFillLinkedin /> */}
      </div>
      <div></div>
    </main>
  );
}

export default Home;
