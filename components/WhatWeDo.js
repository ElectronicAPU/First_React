import React from "react";

const WhatWeDo = () => {
  return (
    <>
<div className="bg-green-200 flex justify-center p-2">
      <div
        className="bg-red-200 flex flex-col md:flex-row md:justify-between sm:max-w-2xl lg:max-w-4xl"
      >
        <div
          className="m-2 md:w-1/4 flex flex-col items-center text-center md:block md:text-left"
        >
          <div className="w-12">
            <img src="/Img/Icon.png" alt="star icon" className="w-full" />
          </div>
          <div className="my-2 text-3xl">
            <h1>Marketing.</h1>
          </div>
          <div>
            <p>Creating a spacing how people move through.</p>
          </div>
        </div>
        <div
          className="m-2 md:w-1/4 flex flex-col items-center text-center md:block md:text-left"
        >
          <div className="w-12">
            <img src="/Img/Icon.png" alt="star icon" className="w-full" />
          </div>
          <div className="my-2 text-3xl">
            <h1>Dev & Design.</h1>
          </div>
          <div>
            <p>
              Creating a higher spacing how people move through. From its mel
              origins to the digital era.
            </p>
          </div>
        </div>
        <div
          className="m-2 md:w-1/4 flex flex-col items-center text-center md:block md:text-left"
        >
          <div className="w-12">
            <img src="/Img/Icon.png" alt="star icon" className="w-full" />
          </div>
          <div className="my-2 text-3xl">
            <h1>Creativity.</h1>
          </div>
          <div>
            <p>
              Get a full cRontrol of debts in the dsu digital world simplesity.
              labore et dolore magna aliqua
            </p>
          </div>
</div>
      </div>
    </div>

  );
};

export default WhatWeDo;
