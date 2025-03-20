import React from 'react'

const CurrentWeatherComponent = () => {
  return (
    <div className="bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 rounded-[5px] flex flex-col items-center justify-self-center md:w-[55%] md:row-start-4 md:row-end-7 md:col-start-1 md:col-end-5">
    <h1 className="text-white text-center text-[50px] ">Current Weather</h1>
    <div className="w-full h-[78%] flex flex-row">
      <img className="h-[90%] w-[45%] self-center" src="/images/king-von-rapper.gif" alt="Weather Icon" />
      <div className="flex flex-col items-center justify-center h-full w-[55%]">
        <h1 className="text-center text-[75px]">152*</h1>
        <div className="flex flex-row justify-around w-full">
          <div className="flex flex-col">
            <h3 className="text-black text-center text-[25px]">Min</h3>
            <h3 className="text-black text-center text-[25px]">temperature</h3>
            <h3 className="text-center text-[25px]">132*</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-black text-center text-[25px]">Max</h3>
            <h3 className="text-black text-center text-[25px]">temperature</h3>
            <h3 className="text-center text-[25px]">132*</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CurrentWeatherComponent