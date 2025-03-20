

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[url(/images/weatherdevice.jpg)] flex justify-center items-center bg-cover bg-center bg-no-repeat">

      <div className=" h-full w-[95%] md:h-[95%] grid grid-cols-2 grid-rows-14 gap-2 md:gap-0 md:grid-rows-8 md:grid-cols-4 ">

        {/* Seacrh bar */}
        <div className="bg-[#D9D9D9]/60 backdrop-invert backdrop-opacity-10 flex flex-col rounded-[5px] md:w-[85%] row-start-9 md:row-start-1 col-start-1 col-end-3 md:col-end-1">
          <h1 className="text-center text-[40px] text-black">Search</h1>
          <input type="text" placeholder="Search a city" className=" bg-white text-black ps-2 w-[80%] self-center rounded-[5px] h-[40%]"  />
        </div>
        {/* City name, date, and add favorites */}
        <div className="bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 justify-self-end flex items-center md:items-end flex-col rounded-[5px] md:w-[90%] md:h-[75%] md:row-start-1 md:row-end-4 md:col-start-3 md:col-end-5">
            <h1 className="md:text-[45px] lg:text-[70px] pe-6">Cleveland, Ohio</h1>
            <h3 className="pe-6 text-[40px]">22/22/2222</h3>
            <div className="text-center bg-[#E4FF4A] text-black border-[2px] rounded-[5px] text-[25px] w-[250px] h-[75px] me-6"> 
            Add/Remove from favorites
            </div>
        </div>
          {/* current weather display */}
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

          <div className="bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 h-[90%] self-end rounded-[5px] flex flex-row items-center md:row-start-7 md:row-end-9 md:col-start-1 md:col-end-5">

          </div>

        </div>


      </div>

    
  );
}
