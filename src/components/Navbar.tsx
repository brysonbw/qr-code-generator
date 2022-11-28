import React from 'react';
import { Link } from 'react-router-dom';
import Github from '../assets/icons/Github';
import Logo from '../assets/logo/Logo';

function Navbar() {
  return (
    <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-2">
          {/** Logo */}
          <Logo className="w-6 h-6" />
          <Link to="/">
            {' '}
            <p className="md:ml-2 ">QR Code Generator</p>
          </Link>

          <div className="leading-none px-3 py-1 md:hidden outline-none focus:outline-none ">
            <Github className="w-6 h-6 fill-white" />
          </div>
        </div>

        <div className="md:flex flex-grow items-center hidden">
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li className="px-5 py-3 flex items-center">
                <a
                  href="https://github.com/brysonbw/qr-code-generator"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <Github className="w-6 h-6 fill-white" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
