import React, { useState } from "react";
import NavbarOpen from "./NavbarOpen";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" m-6 flex justify-between">
        <div>
          {" "}
          <img className="" src="/Img/Group.png" />
        </div>
        <div className=" flex items-center">
          <div className=" flex">
            <img className="  " src=" /Img/path823.png" />
            <a className="pl-2 text-xl" href="">
              Login
            </a>
          </div>
          <div onClick={() => setOpen(!open)}>
            <img className=" pl-2 w-10  sm:" src="/Img/menu.png " />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      <div
        className={`transition-all duration-1000 ease-in-out overflow-hidden ${
          open ? `h-52` : `h-0`
        }`}
      >
        {<NavbarOpen />}
      </div>
    </>
  );
};

export default Navbar;
