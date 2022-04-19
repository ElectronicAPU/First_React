import React from 'react'

const Testimonials = () => {
  return (
    <>

<div className="flex flex-col mt-24 sm:flex-row justify-around px-8 md:px-14 lg:px-48">
      <div className="flex justify-center ">
        <div className="w-64 m-2 md:w-72 lg:w-80">
          <img src="/Img/boy.png" alt="" />
        </div>
      </div>
      <div className=" mt-6 flex justify-center">
        <div className=" w-64 flex flex-col justify-center md:w-80 lg: ">
          <div className=" ">
            <img className="w-10 lg:w-12 " src="/Img/Icon.png" alt="" />
          </div>
          <div className=" mt-4">
            <p className=" text-lg font-serif font-extralight lg:text-2xl">
              “Certainly from my perspective, 
              Dream City has been a great 
              success—with <u className="text-sky-300">CPIOT Platform  </u> giving us that
              enterprise-level of 
              assured quality on top.”
            </p>
          </div>
          <div className=" flex  mt-2">
            <p>——</p>
            <div>
              <h3 className=" ml-2 text-sm font-serif">Meetun Norsha</h3>
              <h4 className=" ml-2 text-xs text-slate-500">INDIA</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Testimonials