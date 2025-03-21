import React from 'react'

const FutureWeatherComponent = (props: { minTemp: string; maxTemp: string; dayOfTheWeek: string; icon: string }) => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
        <img className='h-[80px] w-[80px] mb-2' src={props.icon} alt="A weather Icon" />
        <h3 className='text-[20px] '>{`${props.minTemp}°C/${props.maxTemp}°C`}</h3>
        <h2 className='text-black text-[25px]'>{props.dayOfTheWeek}</h2>
    </div>
  )
}

export default FutureWeatherComponent