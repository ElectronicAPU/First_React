import React from "react"; 

const NavbarOpen = () => {
  return (
    <>
      <div className=" flex bg-gray-200  ">
        <ul className=" text-2xl ">
          <li className=" m-2 ">
            <a href="">About</a>
          </li>
          <li className=" m-2">
            <a href="">Case Studies</a>
          </li>
          <li className=" m-2">
            <a href="">Services</a>
          </li>
          <li className=" m-2">
            <a href="">Blog</a>
          </li>
          <li className="">
            <input
              className="  ml-1 bg-transparent"
              type="text"
              placeholder=" Search Here... "
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarOpen;
