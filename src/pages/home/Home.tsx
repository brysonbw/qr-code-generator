/* eslint-disable no-console */
/* eslint-disable no-alert */
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Logo from '../../assets/logo/Logo';

function Home() {
  const [url, setUrl] = useState<string>('');
  const [showQRCode, setShowQRCode] = useState<boolean>(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (url !== '') {
      const formValue = {
        url,
      };
      console.log(formValue);
      setUrl('');
      setShowQRCode(true);
    } else {
      alert('Please enter valid URL');
    }
  }

  function clearForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    if (url !== '') {
      setUrl('');
    }
  }

  return (
    <div className="mt-auto">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/** //! Left Side Hero */}
        <section className="mx-auto text-center">
          {!showQRCode ? (
            /* <Logo className="w-40 h-40 mx-auto" /> */
            // TODO: Cleanup URL onSubmit(), input state, & clearForm() Logic
            // Form
            <form onSubmit={onSubmit}>
              <div className="relative mb-4">
                <input
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  className="rounded-lg pl-2 w-56 h-8 text-black"
                  placeholder="Enter URL"
                />
                <button
                  onClick={clearForm}
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center lg:pr-3 pr-8"
                >
                  {url !== '' && <XMarkIcon className="x-5 h-5 text-black" />}
                </button>
              </div>
              <button
                type="submit"
                className="group relative h-12 w-56 font-[500] rounded-lg text-black bg-white text-lg shadow mb-4"
              >
                Generate QR Code
              </button>
            </form>
          ) : (
            // 'Generate Another QR Code' or 'Download' Buttons
            // TODO: Add logic & functionality for 'Download' Button onClick()
            <div className=" justify-evenly w-full relative flex flex-row lg:flex-col text-sm">
              <button
                className="no-underline hover:underline lg:mb-5"
                onClick={(event) => {
                  event.preventDefault();
                  setShowQRCode(false);
                }}
                type="button"
              >
                Generate New Code
              </button>
              <button className="no-underline hover:underline" type="button">
                Download
              </button>
            </div>
          )}
        </section>
        {/** //! Right Side Hero */}
        {
          // TODO: successful onSubmit() == QR Code Renders */
          // TODO: cleanup 'showQRCode' state and conditionally render logic
        }
        <section
          className={
            showQRCode
              ? 'rounded-md mt-8 border-2'
              : 'border-2 border-blue-400  border-dashed rounded-md mt-8'
          }
        >
          {showQRCode ? (
            <Logo className="w-[17rem] h-[17rem]" />
          ) : (
            <div className="w-[17rem] h-[17rem] justify-center items-center justify-items-center flex">
              <div>Your QR Code will appear here</div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Home;
