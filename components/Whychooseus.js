import React from "react";

const Whychooseus = () => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-around px-8 md: px-16 lg:px-52">
        <div className="flex justify-center w-full ">
          <div className=" ">
            <div className="w-8 pt-4">
              <img src=" /Img/Video Button.png" alt="" />
            </div>
            <div className="text-4xl mt-3 font-sans font-semibold">
              <h1>
                Why Choose <br />
                Code Partner?
              </h1>
            </div>
            <div className=" mt-4 text-xs">
              <p>
                So how does it work? Let&apos;s check our Getting Started
                tutorial for detailed info.
              </p>
            </div>
            <div className=" mt-4 text-xs font-medium ">
              <ul className=" ">
                <li className=" ">
                  <img src=" /Img/Path 8.png" alt="" />
                  <p>
                    Provides professional service with ease and single point of
                    contact.
                  </p>
                </li>
                <li>
                  <img src="/Img/Path 8.png" alt="" />
                  <p>Takes complete responsibility from start to end.</p>
                </li>
                <li>
                  <img src="/Img/Path 8.png" alt="" />
                  <p>Dedicated Relationship Manager in place.</p>
                </li>
              </ul>
            </div>
            <div className=" text-xs max-w-xs mt-2 text-center py-3 text-white bg-gray-800 rounded-sm">
              <button>Consult with an exprt now!</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" w-80 md:w-96 xl:w-96 ">
            <img className=" " src="/Img/Secondary.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychooseus;
