import { removeFromLocalSeen } from '@/Services/LocalStorage';
import React, { useEffect } from 'react'

const FavoritesComponent = (props: {city: string; setSearch: (string: string) => void; getCityFunc: (name: string) => void; currentDisplayFunc: () => void; futureDisplay: () => void; favorites: string[]; updateFavs: () => void;} ) => {
  

  useEffect(() => {
    props.updateFavs()

  },[props.city])

  const favBtn = (name: string) => {
    props.updateFavs()
    removeFromLocalSeen(props.city)
    props.setSearch(name)
    props.getCityFunc(name)
  }

  


  return (
    <div className='bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 flex flex-col items-center rounded-[5px] self-center md:self-auto justify-self-end h-[95%] w-[95%] md:h-auto md:w-[50%] row-start-11 row-end-[15] md:row-start-4 md:row-end-7 md:col-start-4 md:col-end-5'>

        <h2 className='text-black text-[25px] mt-2'>Favorites</h2>
        <div className='w-[80%] h-[2px] bg-black'></div>
        <div className='flex flex-col items-center w-[80%] h-[80%] overflow-y-scroll mt-2'>
 
        {props.favorites.length > 0 ? (
          props.favorites.map((name, index) => (
            <div key={index} onClick={() => favBtn(name)} className='text-center w-full text-[25px] truncate
             text-black py-0.5 border-2 bg-[#D9D9D9]'>{name}</div>
          )
        )) : (
          <h1></h1>
        )}

        </div>

    </div>
  )
}


export default FavoritesComponent