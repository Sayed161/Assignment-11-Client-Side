import React from "react";
import image from "../assets/Images/LOGO.png";
import { Link, useLocation } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const Authlinks = (
    <>
      <Link
        to="login"
        className="self-start lg:self-center px-0 py-0 lg:px-8 lg:py-3 lg:font-semibold lg:rounded flex items-center justify-center lg:bg-orange-600 lg:text-white"
      >
        Login <LuLogIn className="ml-2 text-xl" />
      </Link>
      <Link
        to="register"
        className="self-start lg:self-center px-0 py-0 lg:px-8 lg:py-3 lg:font-semibold lg:rounded lg:bg-red-600 lg:text-white"
      >
        Sign up
      </Link>
    </>
  );

  const Links = (
    <>
      <Link
        to="/"
        className={`flex items-center px-4 ${
          isActive("/") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Home
      </Link>
      <Link
        to="/availble-foods"
        className={`flex items-center px-4 ${
          isActive("/availble-foods") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Available Foods
      </Link>
      <Link
        to="/add-foods"
        className={`flex items-center px-4 ${
          isActive("/add-foods") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Add Food
      </Link>
      <Link
        to="/my-foods"
        className={`flex items-center px-4 ${
          isActive("/my-foods") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Manage My Foods
      </Link>
      <Link
        to="/requests"
        className={`flex items-center px-4 ${
          isActive("/requests") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        My Food Request
      </Link>
    </>
  );
  return (
    <>
      <style>
        {`
  .active-link {
	font-weight:bold;
	position:relative;
  }
 
  .active-link::after{
  content:'';
  position: absolute;
  bottom:0;
  left:0;
  height:4px;
  width:100%;
  background:linear-gradient(90deg,orange,red,yellow,red,orange);
  background-size:200% auto;
  animation: borderColorChange 4s linear infinite;
  }
  @keyframes borderColorChange {
  0% { background-position:0% 0%; }

  100% { background-position:100% 0%; }
  
}
 `}
      </style>
      <header className="p-4 bg-yellow-400">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src={image} alt="" className="w-25" />
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex text-white font-semibold">
            {Links}
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex gap-5">
            {Authlinks}
          </div>
          <button className="p-4 lg:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
                {Authlinks}
              </ul>
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
