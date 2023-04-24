import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
function Navbar({ darkMode, setDarkMode }) {
  return (
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
            <button
              className=" bg-gradient-to-r from-blue-400 to-green-300 text-white px-4 py-2 rounded-md ml-8 hover:bg-teal-700"
              href="#"
            >
              Resume
            </button>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
