'use client';

import CurrentWeatherComponent from "@/Components/CurrentWeatherComponent";
import FavoritesComponent from "@/Components/FavoritesComponent";
import FutureWeatherComponent from "@/Components/FutureWeatherComponent";
import InfoDisplayComponent from "@/Components/InfoDisplayComponent";
import { CurrentWeather, getName } from "@/Services/DataFetches";
import { removeFromLocalSeen, saveToLocalSeen } from "@/Services/LocalStorage";
import { useState } from "react";





export default function Home() {

  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [userSearch, setUserSearch] = useState("")
  const [cityName, setCityName] = useState("")
  const [add2Fav, setAdd2Fav] = useState("")

  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState(0)

  const getCityName = async () => {
    let data = await getName(userSearch)

    setLat(data[0].lat)
    setLon(data[0].lon)
    setCityName(data[0].name)
    saveToLocalSeen(data[0].name)

  }

  const searchBarFunc = async (key: any, search: string) => {

      if (key === "Enter")
      {
      setUserSearch(search)
      removeFromLocalSeen(userSearch)
      getCityName()
      .then(() => {
      currentDisplay() 
      // forecastFunc()
      
      })
      }
    
      

  }

  const currentDisplay = async () => {
    let data = await CurrentWeather(lat, lon);
    console.log(data);

    // Setting the time
    const timeSinceEpoch = data.dt * 1000; 
    const currentDate = new Date(timeSinceEpoch);

    const currentDay = ["Sunday ", "Monday ", "Tuesday,", "Wednesday ", "Thursday ", "Friday ", "Saturday "];
    const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    setDay(currentDay[currentDate.getDay()]);
    setMonth(months[currentDate.getMonth()]);
    setYear(currentDate.getFullYear());


  };

  return (
    <div className="h-screen w-screen bg-[url(/images/weatherdevice.jpg)] flex justify-center items-center bg-cover bg-center bg-no-repeat">

      <div className=" h-full w-[95%] md:h-[95%] grid grid-cols-2 grid-rows-14 gap-2 md:gap-0 md:grid-rows-8 md:grid-cols-4 ">

        {/* Seacrh bar */}
        <div className="bg-[#D9D9D9]/60 backdrop-invert backdrop-opacity-10 flex flex-col rounded-[5px] md:w-[85%] row-start-9 md:row-start-1 col-start-1 col-end-3 md:col-end-1">
          <h1 className="text-center text-[40px] text-black">Search</h1>
          <input type="text" placeholder="Search a city" className=" bg-white text-black ps-2 w-[80%] self-center rounded-[5px] h-[40%]"  />
        </div>

        {/* City name, date, and add favorites */}
       <InfoDisplayComponent day={day} month={month} year={year} placeName={cityName}/>

          {/* current weather display */}
          <CurrentWeatherComponent/>

          <FavoritesComponent />

          <div className="bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 h-[80%] self-end rounded-[5px] flex flex-row justify-around items-center md:row-start-7 md:row-end-9 md:col-start-1 md:col-end-5">
            <FutureWeatherComponent minTemp={123} maxTemp={123} dayOfTheWeek={"Tuesday"}/>
            <FutureWeatherComponent minTemp={123} maxTemp={123} dayOfTheWeek={"Wednesday"}/>
            <FutureWeatherComponent minTemp={123} maxTemp={123} dayOfTheWeek={"Thursday"}/>
            <FutureWeatherComponent minTemp={123} maxTemp={123} dayOfTheWeek={"Friday"}/>
            <FutureWeatherComponent minTemp={123} maxTemp={123} dayOfTheWeek={"Saturday"}/>
            <FutureWeatherComponent minTemp={123} maxTemp={123} dayOfTheWeek={"Sunday"}/>
          </div>

        </div>


      </div>

    
  );
}
