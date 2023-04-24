import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { BrowserRouter, Link } from "react-router-dom";
function Navbar({ darkMode, setDarkMode }) {
  return (
    <BrowserRouter>
      <nav className=" p-8 py-10 mb-12 flex justify-between">
        <h1 className=" text-xl font-burtons dark:text-teal-700 ">
          SamDdeveloper
        </h1>
        <div>
          <BsFillMoonStarsFill
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className=" cursor-pointer text-xl"
          />
        </div>

        <ul>
          <li>
            <motion.div whileTap={{ scale: 0.8 }}>
              <Link
                to="https://drive.google.com/file/d/13yeB0JYDkG2nLfklzjy2SkBb0wjfYY_f/view?usp=share_link"
                target="_blank"
              >
                {" "}
                <button
                  className=" bg-gradient-to-r from-blue-400 to-green-300 text-white px-4 py-2 rounded-md ml-8 hover:bg-teal-700"
                  href="#"
                >
                  Resume
                </button>
              </Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
