import { getFromLocalFav, removeFromLocalSeen } from '@/Services/LocalStorage';
import React, { useEffect, useState } from 'react'

const FavoritesComponent = (props: {city: string; setSearch: any; getCityFunc: any; currentDisplayFunc: any; futureDisplay: any} ) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFromLocalFav())

  },[props.city])

  const favBtn = (name: string) => {
    removeFromLocalSeen(props.city)
    props.setSearch(name)
    props.getCityFunc()
    .then(() => {
      props.currentDisplayFunc()
      props.futureDisplay()
    })
    
  }

  


  return (
    <div className='bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 flex flex-col items-center rounded-[5px] justify-self-end md:w-[50%] md:row-start-4 md:row-end-7 md:col-start-4 md:col-end-5'>

        <h2 className='text-black text-[25px] mt-2'>Favorites</h2>
        <div className='w-[80%] h-[2px] bg-black'></div>
        <div className='flex flex-col items-center w-[80%] h-[80%] overflow-y-scroll mt-2'>
 
        {favorites.length > 0 ? (
          favorites.map((name) => (
            <div onClick={() => favBtn(name)} className='text-center w-full text-[25px] text-black py-0.5 border-2 bg-[#D9D9D9]'>{name}</div>
          )
        )) : (
          <h1></h1>
        )}

        </div>

    </div>
  )
}


export default FavoritesComponent