import React from "react";

const AboutUsUpper = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-around  ">
        <div className="pb-2 w-72 lg:w-80 ">
          <p className="text-3xl font-serif font-bold md:text-4xl  ">
            We solve your <br />
            Problem.
          </p>
        </div>
        <div className="w-64">
          <p className="mt-2 text-lg font-serif sm:text-xl">
            We dont sell technology, We give
            <span className="underline text-cyan-500">
              ideas that boosts
            </span>{" "}
            your journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsUpper;
