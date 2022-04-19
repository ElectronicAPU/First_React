import { data } from "autoprefixer";
import { list } from "postcss";
import react, { useState } from "react";

const About = ({ heading, paragraph }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" w-72 pt-6 ">
        <div className="flex justify-between">
          <h1>{heading}</h1>
          <button onClick={() => setShow(!show)}> {show ? "-" : "+"}</button>
        </div>
        <div className={`transition-all text-sm pt-2 duration-1000 ease-in-out overflow-hidden ${show? ` h-24 `: `h-0 `}`}>
         <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default About;
