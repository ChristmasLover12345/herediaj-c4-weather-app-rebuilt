'use client';

import CurrentWeatherComponent from "@/Components/CurrentWeatherComponent";
import FavoritesComponent from "@/Components/FavoritesComponent";
import FutureWeatherComponent from "@/Components/FutureWeatherComponent";
import InfoDisplayComponent from "@/Components/InfoDisplayComponent";
import { CurrentWeather, forecastWeather, getName } from "@/Services/DataFetches";
import { getFromLocalSeen, removeFromLocalSeen, saveToLocalSeen } from "@/Services/LocalStorage";
import { useEffect, useState } from "react";





export default function Home() {

  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [userSearch, setUserSearch] = useState("")
  const [cityName, setCityName] = useState("")

  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState(0)

  const [minTemp, setMinTemp] = useState(0)
  const [maxTemp, setMaxTemp] = useState(0)
  const [currentIcon, setCurrentIcon] = useState("")
  const [currentTemp, setCurrentTemp] = useState(0)

  const [futureMinTemp1, setFutureMinTemp1] = useState("")
  const [futureMinTemp2, setFutureMinTemp2] = useState("")
  const [futureMinTemp3, setFutureMinTemp3] = useState("")
  const [futureMinTemp4, setFutureMinTemp4] = useState("")
  const [futureMinTemp5, setFutureMinTemp5] = useState("")

  const [futureMaxTemp1, setFutureMaxTemp1] = useState("")
  const [futureMaxTemp2, setFutureMaxTemp2] = useState("")
  const [futureMaxTemp3, setFutureMaxTemp3] = useState("")
  const [futureMaxTemp4, setFutureMaxTemp4] = useState("")
  const [futureMaxTemp5, setFutureMaxTemp5] = useState("")

  const[futureIcon1, setFutureIcon1] = useState("")
  const[futureIcon2, setFutureIcon2] = useState("")
  const[futureIcon3, setFutureIcon3] = useState("")
  const[futureIcon4, setFutureIcon4] = useState("")
  const[futureIcon5, setFutureIcon5] = useState("")

  const [futureDay1, setFutureDay1] = useState("")
  const [futureDay2, setFutureDay2] = useState("")
  const [futureDay3, setFutureDay3] = useState("")
  const [futureDay4, setFutureDay4] = useState("")
  const [futureDay5, setFutureDay5] = useState("")

  // Gets the city name and coordinates
  const getCityName = async (search: string) => {
    let data = await getName(search)

    setLat(data[0].lat)
    setLon(data[0].lon)
    setCityName(data[0].name)
    saveToLocalSeen(data[0].name)

  }

  // Search bar function
  const searchBarFunc = async (key: any, search: string) => {

      if (key === "Enter")
      {
      removeFromLocalSeen(userSearch)
      setUserSearch(search)
      await getCityName(search)
      }
  }

  // This is the onload function, do not comment out until project is done
  // useEffect(() => {

  // const onLoadFunc = async () => {
  //   const box = await getFromLocalSeen()
  //   setUserSearch(box)
  //   await getCityName(box)

  // }

  // onLoadFunc()
  // },[])

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      currentDisplay();
      forecastFunc();
    }
  }, [lat, lon]);

  // Displays the curernt weather and date
  const currentDisplay = async () => {
    let data = await CurrentWeather(lat, lon);
    console.log(data);

    // Setting the time
    const timeSinceEpoch = data.dt * 1000; 
    const currentDate = new Date(timeSinceEpoch);

    const currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    setDay(currentDay[currentDate.getDay()]);
    setMonth(months[currentDate.getMonth()]);
    setYear(currentDate.getFullYear());


    // Setting the current weather
    setCurrentIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    setCurrentTemp(Math.round(data.main.temp - 273.15));
    setMinTemp(Math.round(data.main.temp_min - 273.15));
    setMaxTemp(Math.round(data.main.temp_max - 273.15));


  };

  // Displays a 5 day forecast
  const forecastFunc = async () => {
    const data = await forecastWeather(lat, lon)

    setFutureMinTemp1((((data.list[0].main.temp_min + data.list[1].main.temp_min + data.list[2].main.temp_min + data.list[3].main.temp_min + data.list[4].main.temp_min + data.list[5].main.temp_min + data.list[6].main.temp_min + data.list[7].main.temp_min) / 8)- 273.15).toFixed())
    setFutureMinTemp2((((data.list[8].main.temp_min + data.list[9].main.temp_min + data.list[10].main.temp_min + data.list[11].main.temp_min + data.list[12].main.temp_min + data.list[13].main.temp_min + data.list[14].main.temp_min + data.list[15].main.temp_min) / 8)- 273.15).toFixed())
    setFutureMinTemp3((((data.list[16].main.temp_min + data.list[17].main.temp_min + data.list[18].main.temp_min + data.list[19].main.temp_min + data.list[20].main.temp_min + data.list[21].main.temp_min + data.list[22].main.temp_min + data.list[23].main.temp_min) / 8)- 273.15).toFixed())
    setFutureMinTemp4((((data.list[24].main.temp_min + data.list[25].main.temp_min + data.list[26].main.temp_min + data.list[27].main.temp_min + data.list[28].main.temp_min + data.list[29].main.temp_min + data.list[30].main.temp_min + data.list[31].main.temp_min) / 8)- 273.15).toFixed())
    setFutureMinTemp5((((data.list[32].main.temp_min + data.list[33].main.temp_min + data.list[34].main.temp_min + data.list[35].main.temp_min + data.list[36].main.temp_min + data.list[37].main.temp_min + data.list[38].main.temp_min + data.list[39].main.temp_min) / 8)- 273.15).toFixed())

    setFutureMaxTemp1((((data.list[0].main.temp_max + data.list[1].main.temp_max + data.list[2].main.temp_max + data.list[3].main.temp_max + data.list[4].main.temp_max + data.list[5].main.temp_max + data.list[6].main.temp_max + data.list[7].main.temp_max) / 8)- 273.15).toFixed())
    setFutureMaxTemp2((((data.list[8].main.temp_max + data.list[9].main.temp_max + data.list[10].main.temp_max + data.list[11].main.temp_max + data.list[12].main.temp_max + data.list[13].main.temp_max + data.list[14].main.temp_max + data.list[15].main.temp_max) / 8)- 273.15).toFixed())
    setFutureMaxTemp3((((data.list[16].main.temp_max + data.list[17].main.temp_max + data.list[18].main.temp_max + data.list[19].main.temp_max + data.list[20].main.temp_max + data.list[21].main.temp_max + data.list[22].main.temp_max + data.list[23].main.temp_max) / 8)- 273.15).toFixed())
    setFutureMaxTemp4((((data.list[24].main.temp_max + data.list[25].main.temp_max + data.list[26].main.temp_max + data.list[27].main.temp_max + data.list[28].main.temp_max + data.list[29].main.temp_max + data.list[30].main.temp_max + data.list[31].main.temp_max) / 8)- 273.15).toFixed())
    setFutureMaxTemp5((((data.list[32].main.temp_max + data.list[33].main.temp_max + data.list[34].main.temp_max + data.list[35].main.temp_max + data.list[36].main.temp_max + data.list[37].main.temp_max + data.list[38].main.temp_max + data.list[39].main.temp_max) / 8)- 273.15).toFixed())

    setFutureIcon1(`http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`)
    setFutureIcon2(`http://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`)
    setFutureIcon3(`http://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`)
    setFutureIcon4(`http://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`)
    setFutureIcon5(`http://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`)

    const seconds1 = new Date((data.list[4].dt * 1000));
    const seconds2 = new Date((data.list[12].dt * 1000));
    const seconds3 = new Date((data.list[20].dt * 1000));
    const seconds4 = new Date((data.list[28].dt * 1000));
    const seconds5 = new Date((data.list[36].dt * 1000));

    const dayName1 = seconds1.getDay();
    const dayName2 = seconds2.getDay();
    const dayName3 = seconds3.getDay();
    const dayName4 = seconds4.getDay();
    const dayName5 = seconds5.getDay();

    const futureDay = ["Sunday ", "Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday "]

    setFutureDay1(`${futureDay[dayName1]}`)
    setFutureDay2(`${futureDay[dayName2]}`)
    setFutureDay3(`${futureDay[dayName3]}`)
    setFutureDay4(`${futureDay[dayName4]}`)
    setFutureDay5(`${futureDay[dayName5]}`)

  }


  return (
    <div className="h-screen w-screen bg-[url(/images/weatherdevice.jpg)] flex justify-center items-center bg-cover bg-center bg-no-repeat">

      <div className=" h-full w-[95%] md:h-[95%] grid grid-cols-2 grid-rows-14 gap-2 md:gap-0 md:grid-rows-8 md:grid-cols-4 ">

        

        {/* Seacrh bar */}
        <div className="bg-[#D9D9D9]/60 backdrop-invert backdrop-opacity-10 flex flex-col rounded-[5px] md:w-[85%] row-start-9 md:row-start-1 col-start-1 col-end-3 md:col-end-1">
          <h1 className="text-center text-[40px] text-black">Search</h1>
          <input onKeyUp={(event) => searchBarFunc(event.key, event.currentTarget.value)} type="text" placeholder="Search a city" className=" bg-white text-black ps-2 w-[80%] self-center rounded-[5px] h-[40%]"  />
        </div>

        {/* City name, date, and add favorites */}
       <InfoDisplayComponent day={day} month={month} year={year} placeName={cityName} setPlaceName={setCityName}/>

          {/* current weather display */}
          <CurrentWeatherComponent icon={currentIcon} temp={currentTemp} minTemp={minTemp} maxTemp={maxTemp}/>

          <FavoritesComponent city={cityName} setSearch={setUserSearch} getCityFunc={getCityName} currentDisplayFunc ={currentDisplay} futureDisplay={forecastFunc}/>

          <div className="bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 h-[80%] self-end rounded-[5px] flex flex-row justify-around items-center md:row-start-7 md:row-end-9 md:col-start-1 md:col-end-5">
            <FutureWeatherComponent minTemp={futureMinTemp1} maxTemp={futureMaxTemp1} dayOfTheWeek={futureDay1} icon={futureIcon1}/>
            <FutureWeatherComponent minTemp={futureMinTemp2} maxTemp={futureMaxTemp2} dayOfTheWeek={futureDay2} icon={futureIcon2}/>
            <FutureWeatherComponent minTemp={futureMinTemp3} maxTemp={futureMaxTemp3} dayOfTheWeek={futureDay3} icon={futureIcon3}/>
            <FutureWeatherComponent minTemp={futureMinTemp4} maxTemp={futureMaxTemp4} dayOfTheWeek={futureDay4} icon={futureIcon4}/>
            <FutureWeatherComponent minTemp={futureMinTemp5} maxTemp={futureMaxTemp5} dayOfTheWeek={futureDay5} icon={futureIcon5}/>
            
          </div>

        </div>


      </div>

    
  );
}
