import React from 'react';
import { Link } from 'react-router-dom';
import Github from '../assets/icons/Github';
import siteInfo from '../utils/siteInfo';

function Footer() {
  return (
    <footer className="text-center mt-auto text-xs">
      <div className="flex flex-col justify-center -mb-2">
        <a href="https://github.com/brysonbw/qr-code-generator">
          <Github />
        </a>
        <a
          className="hover:underline no-underline"
          href="https://github.com/brysonbw/qr-code-generator"
        >
          {siteInfo.message}
        </a>
      </div>

      <div className="text-center text-gray-700 p-4">
        {`© ${new Date().getFullYear()}`}

        <Link className="text-blue-400 hover:underline no-underline" to="/">
          &nbsp;
          {siteInfo.title}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
