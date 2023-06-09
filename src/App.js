import "./App.css";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
// import NoPage from "./components/pages/NoPage";
import { useState } from "react";
import Footer from "./components/pages/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="App overflow-hidden">
        <div className=" dark:bg-gray-900 ">
          <div className="bg-green-100 dark:bg-gray-900">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Home />
          </div>
          <Work className="bg-cyan-200 w-screen" />
          <About />
          <Contact className=" bg-black" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
