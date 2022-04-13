import React from "react";
import "../styling/Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./AboutApp";
import AddTodo from "./AddTodo";
import App from "../App";

const NavBar = () => {
  /* const [clicked, setClicked] = useState(false);

  const tampilNavbar = () => {
    setClicked(!clicked);
  };
 */
  return (
    <div className="my-3 bg-mint-color w-3/4 flex justify-center rounded-full">
      <div>
        <nav>
          <ul className="font-sans flex justify-center h-10 items-center px-10 underline">
            <li className="mx-5 ">
              <Link className="items-center" to="/">Home</Link>
            </li>
            <li className="mx-5 ">
              <Link className="items-center" to="/about-app">About App</Link>
            </li>
            <li className="mx-5 ">
              <Link className="items-center" to="/about-creator">About Creator</Link>
            </li>
            {/* <li className="">
              {<Link className="flex items-center" to="about">
                About{" "}
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>{" "}
              </Link>}
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
