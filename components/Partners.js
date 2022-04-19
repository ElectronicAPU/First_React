import React from 'react'

const Partners = () => {
  return (
    <>

<div className="bg-gray-100 mt-16  flex flex-col px-20 flex-wrap py-32 sm:px-24  lg:px-40 ">
      <div className="flex flex-col">
        <div className=" text-slate-300 tracking-widest ">
          <h4 className=" text-xs sm:text-sm md:text-base lg:text-lg">NEWS</h4>
        </div>
        <div className="text-3xl font-serif font-semibold md:text-4xl lg:text-5xl ">
          <h1>Our Partners.</h1>
        </div>
      </div>

      <div>
        <div className=" flex flex-col text-xs sm:text-sm md:text-base lg:text-lg   ">
          <h4 className=" text-slate-300 my-2 tracking-widest">CLOUD PARTNERS</h4>
          <div className="  flex justify-between flex-wrap ">
            <div className=" ">
              <img className=" w-16 sm:w-24  md:w-28  lg:w-40" src="/Img/GC.png" alt="" />
            </div>
            <div className=" ">
              <img className=" w-16 sm:w-24  md:w-28  lg:w-40" src="/Img/DO.png" alt="" />
            </div>
            <div className=" ">
              <img className=" w-16 sm:w-24  md:w-28  lg:w-40" src="/Img/AWV.png" alt="" />
            </div>
            <div className=" ">
              <img className=" w-16 sm:w-24  md:w-28  lg:w-40" src="/Img/IC.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" text-xs sm:text-sm md:text-base lg:text-lg">
          <h4 className=" mt-4 text-slate-300 tracking-widest ">BLOCKCHAIN PARTNERS</h4>
          <div>
            <img className=" w-20 mt-1.5 px-0.5 md:w-36  lg:w-48" src="/Img/OW.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Partners