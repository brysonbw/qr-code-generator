import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PageNotFound() {
  const location = useLocation();
  const pathname = location?.pathname;
  return (
    <div className="flex flex-col justify-items-center text-center">
      <div className="w-9/12 m-auto py-16 my-44 flex items-center justify-center">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold ">404</div>
          <p className="text-2xl my-6  md:text-3xl font-light leading-normal">
            Page Not Found: {pathname}
          </p>
          <p className="mt-3 mb-8" />

          <Link className="hover:underline no-underline" to="/">
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
