import React, { useState } from "react";
import About from "./About";
import { list } from "./AboutApi";

const AboutusMidle = () => {
  const [data, setData] = useState(list);
  return (
    <>
      <div className=" flex-wrap pt-8 justify-around sm:flex  ">
        <div>
          <img className=" w-80 " src="/Img/blockchainAi.png" />
        </div>
        <div className=" ">
          <section >
            {data.map((curElem) => {
              const { id } = curElem;
              return <About key={id} {...curElem}/>;
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutusMidle;
