import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <BrowserRouter>
      <footer className=" bg-black">
        <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 mt-16 ">
          <Link
            to="https://www.linkedin.com/in/adeniji-oluwasegun-215570130/"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
          <Link to="https://twitter.com/AgbaStack" target="_blank">
            <AiFillTwitterCircle />
          </Link>
        </div>
        <p className=" text-white font-thin font-serif">
          Built from scratch by Sam ©2023 All Rights Reserved
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default Footer;
//
