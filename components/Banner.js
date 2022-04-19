import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col-reverse mt-8 sm:flex-row justify-around md:px-20 lg:px-52 ">
        <div className=" flex justify-center md:text-4xl">
          <div className="  flex flex-col ">
            <div className=" text-5xl font-bold font-sans md:text-6xl lg:text-7xl">
              Smart <br /> Consulting <br /> Group.
            </div>
            <div className=" text-xs mt-5 font-sans md:text-sm lg:text-base ">
              We helping client to create technology that uses Blockchain,{" "}
              <br /> AI and IOT with our talented expert.
            </div>
            <div>
              <button className="border-2 border-black mt-4 px-6 py-2 text-xs md:text-sm lg:text-base">
                Consult with an exprt now!
              </button>
            </div>
            <div>
              <p className=" text-xs mt-2 text-slate-400">
                Already a memeber ?{" "}
                <a
                  className=" cursor-pointer text-slate-900 font-semibold"
                  href=""
                >
                  Sign in.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center  ">
          <div className="w-72 md:w-80 lg:w-96 ">
            <img className="  " src="/Img/Right.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
