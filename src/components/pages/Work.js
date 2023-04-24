import React from "react";
// import design from "./Asset/design.png";
import bean from "../Asset/Macbook-the-bean-machine.png";
import ricky from "../Asset/ipad pro -ricky.png";
import { motion } from "framer-motion";
import { BrowserRouter, Link } from "react-router-dom";

function Work() {
  return (
    <BrowserRouter>
      <div className=" bg-cyan-200 snap-y snap-mandatory dark:bg-gray-900">
        <h1 className=" text-left p-8 text-xl py-2 text-teal-600 font-medium md:text-4xl snap-start ">
          Work
        </h1>
      </div>
      <div className=" bg-cyan-200 dark:bg-gray-900 w-full p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 snap-y snap-mandatory">
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <div className=" bg-teal-300 text-center shadow-lg p-10 rounded-xl my-10 snap-start">
            <img
              src={bean}
              alt="icon"
              className=" object-cover h-48 w-96 "
            ></img>
            <h2 className=" text-center font-bold py-3 ">
              The Bean Machine Coffeeshop
            </h2>
            <Link
              to="https://responsive-web-development-proj.netlify.app"
              target="_blank"
            >
              <h3 className=" text-center font-medium py-1 hover:underline">
                Visit website
              </h3>
            </Link>

            <Link
              to="https://github.com/SamAdeniji/the-bean-machine"
              target="_blank"
            >
              <h3 className=" text-center font-medium py-1 hover:underline">
                view src code
              </h3>
            </Link>
            <p className=" text-center text-gray-600 py-2 font-medium">
              HTML, CSS, Responsive web development
            </p>
          </div>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <div className="  bg-teal-300 text-center shadow-lg p-10 rounded-xl my-10">
            <img
              src={ricky}
              alt="icon"
              className="object-cover h-48 w-96"
            ></img>
            <h2 className=" text-center font-bold py-3">Rick & Morty Wiki</h2>
            <Link to="https://react-bootstrap-api.netlify.app" target="_blank">
              <h3 className=" text-center font-medium py-1 hover:underline">
                Visit website
              </h3>
            </Link>

            <Link
              to="https://github.com/SamAdeniji/Rick-and-Morty"
              target="_blank"
            >
              <h3 className=" text-center font-medium py-1 hover:underline">
                view src code
              </h3>
            </Link>
            <p className="text-center text-gray-600 py-2 font-medium">
              React, Bootstrap, SASS, API, Responsive web development
            </p>
            <link></link>
          </div>
        </motion.a>
      </div>
    </BrowserRouter>
  );
}

export default Work;
