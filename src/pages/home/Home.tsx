import { QRCodeCanvas } from 'qrcode.react';
import React, { useRef, useState } from 'react';
import Logo from '../../assets/logo/Logo';

function Home() {
  const [url, setUrl] = useState<string>('');
  const qrCodeRef = useRef(null as HTMLElement | null);

  function downloadQRCode(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const canvas = qrCodeRef.current?.querySelector('canvas');
    const image = canvas?.toDataURL('image/png');
    const anchor = document.createElement('a');
    anchor.href = image as string;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl('');
  }

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      size={275}
      value={url}
      className="rounded-md mt-8 border-2 w-[17rem] h-[17rem]"
      level="H"
    />
  );

  return (
    <div className="mt-auto">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/** //! Left Side Hero */}
        <section className="mx-auto text-center">
          <Logo className="w-40 h-40 mx-auto" />
          <form onSubmit={downloadQRCode}>
            <div className="relative mb-4">
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="rounded-lg pl-2 w-56 h-8 text-black"
                placeholder="Enter URL"
              />
            </div>
            <button
              type="submit"
              className="group relative h-12 w-56 font-[500] rounded-lg text-black bg-white text-lg shadow mb-4"
            >
              Download
            </button>
          </form>
        </section>
        {/** //! Right Side Hero */}
        <section
          className={
            url ? '' : 'border-2 border-blue-400  border-dashed rounded-md mt-8'
          }
        >
          {url ? (
            <div ref={qrCodeRef as React.RefObject<HTMLDivElement>}>
              {qrcode}
            </div>
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
