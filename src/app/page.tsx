

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[url(/images/weatherdevice.jpg)] flex justify-center items-center bg-cover bg-center bg-no-repeat">

      <div className=" h-full w-[98%] md:w-[95%] md:h-[95%] grid grid-rows-8 grid-cols-4 ">

        <div className="bg-[#D9D9D9]/60 backdrop-invert backdrop-opacity-10 flex flex-col rounded-lg md:w-[85%]">
          <h1 className="text-center md:text-[40px] text-black">Search</h1>
          <input type="text" placeholder="Search a city" className=" bg-white text-black md:w-[80%] self-center h-[40px]"  />
        </div>

      </div>

    </div>
  );
}
