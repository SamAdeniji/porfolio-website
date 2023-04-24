import React from "react";

function Contact() {
  return (
    <section className="snap-y snap-mandatory ">
      <div className="snap-start">
        <h1 className=" text-left p-8  text-xl py-2 text-teal-600 font-medium md:text-4xl">
          Contact me
        </h1>
        <form className=" bg-cyan-200 rounded px-8 font-light mb-2 p-4 dark:bg-yellow-200 mx-20 md:mx-60 lg:mx-80">
          <div className=" grid grid-cols-2 ">
            <input
              type="text"
              placeholder="Name"
              className=" border-2 rounded px-2"
            ></input>
            <input
              type="text"
              placeholder="Email"
              className=" border-2 rounded px-2"
            ></input>
          </div>
          <div className=" grid grid-rows-2">
            <input
              type="text"
              placeholder="Subject"
              className=" border-2 rounded px-2 "
            ></input>
            <input
              type="text"
              placeholder="Message"
              className=" border-2 rounded px-2 p-5"
            ></input>
          </div>
        </form>
      </div>
      <button
        className=" rounded bg-teal-600 hover:bg-teal-700 text-white font-light py-2 px-4 mb-4 "
        onClick={() => {
          alert("Thank you!");
        }}
      >
        Send message!
      </button>
    </section>
  );
}

export default Contact;
