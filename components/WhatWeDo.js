import React from "react";

const WhatWeDo = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around px-12 mt-16 sm:flex-row md:px-28 lg:px-36 ">
        <div className="px-4 sm: my-4">
          <div className=" ">
            <img className="w-8" src="/Img/Icon.png" alt="" />
          </div>
          <div className="text-lg py-2">
            <h1 className="font-serif font-semibold">Marketing.</h1>
          </div>
          <div>
            <p className="text-xs">
              Creating a spacing how people <br />
              move through.
            </p>
          </div>
        </div>

        <div className="px-4 sm: my-4">
          <div>
            <img className="w-8" src="/Img/Icon.png" alt="" />
          </div>
          <div className="text-lg py-2">
            <h1 className="font-serif font-semibold">Dev & Design.</h1>
          </div>
          <div>
            <p className="text-xs">
              Creating a higher spacing how <br />
              people move through. From its mel <br />
              origins to the digital era.
            </p>
          </div>
        </div>

        <div className="px-4 sm: my-4">
          <div>
            <img className="w-8" src="/Img/5.png" alt="" />
          </div>
          <div className="text-lg py-2">
            <h1 className="font-serif font-semibold">Creativity.</h1>
          </div>
          <div>
            <p className="text-xs">
              Get a full cRontrol of debts in the <br />
              dsu digital world simplesity. labore <br />
              et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
