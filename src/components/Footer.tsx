import React from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../utils/siteInfo';

function Footer() {
  return (
    <footer className="text-center mt-auto text-xs">
      <div className="text-center text-gray-400 p-4">
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
