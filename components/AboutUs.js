import React from "react";
import AboutusBottom from "./AboutUs/AboutusBottom";
import AboutusMidle from "./AboutUs/AboutusMidle";
import AboutUsUpper from "./AboutUs/AboutUsUpper";

const AboutUs = () => {
  return (
    <>
      <div className="m-4 md:px-16 lg:px-36">
        <div className="flex mb-2 justify-center text-xs tracking-widest text-slate-300 sm:justify-start">
          <h3 className=" sm:pl-8 lg:pl-12 xl:pl-20">WHY CHOOSES US</h3>
        </div>

        <AboutUsUpper />
        <AboutusMidle />
        <AboutusBottom />
      </div>
    </>
  );
};

export default AboutUs;
