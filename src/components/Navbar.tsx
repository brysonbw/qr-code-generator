import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/Logo';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-2">
          {/** Logo */}
          <Logo className="w-4 h-4" />
          <Link to="/">
            {' '}
            <p className="md:ml-2 ">QR Code Generator</p>
          </Link>

          <button
            className=" cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex flex-grow items-center${
            navbarOpen ? ' flex' : ' hidden'
          }`}
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <button
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="font-medium  hover:underline px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign Up
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="font-medium  hover:underline px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
