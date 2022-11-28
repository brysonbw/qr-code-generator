import React from 'react';
import Logo from '../../assets/logo/Logo';

function Home() {
  return (
    <main className="mt-auto">
      <Logo className="w-40 h-40 mx-auto" />
      <h1 className="text-3xl font-bold text-center">QR Code Generator</h1>

      <div className="text-center mt-5">
        <button
          type="button"
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
        >
          <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
          <span className="relative text-black group-hover:text-white font-[500]">
            Get Started
          </span>
        </button>
      </div>
    </main>
  );
}

export default Home;
