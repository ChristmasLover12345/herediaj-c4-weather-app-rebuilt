import { getFromLocalFav, removeFromLocalFav, saveToLocalFav } from '@/Services/LocalStorage';
import React from 'react'

const InfoDisplayComponent = (props: { placeName: string; day: string; month: string; year: number; setPlaceName: (string: string) => void; updateFavs: () => void }) => {


    
  const favoritesFunc = () => {
    if(getFromLocalFav().includes(props.placeName))
    {
      removeFromLocalFav(props.placeName)
      props.setPlaceName(props.placeName)
    }
    else
    {
      saveToLocalFav(props.placeName)
      props.setPlaceName(props.placeName)
    }


    props.updateFavs()
  }

  return (
    <div className="bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 justify-self-end flex items-center md:items-end flex-col rounded-[5px] self-center w-full h-[80%] md:w-[90%] md:h-[75%] row-start-1 row-end-4 col-start-1 col-end-3 md:col-start-3 md:col-end-5">
    <h1 className="text-[35px] md:text-[45px] lg:text-[70px] md:pe-6">{props.placeName}</h1>
    <h3 className="md:pe-6 text-[30px] md:text-[40px]">{`${props.day}/${props.month}/${props.year}`}</h3>
    <div onClick={favoritesFunc} className="text-center flex flex-col items-center bg-[#E4FF4A] text-black border-[2px] rounded-[5px] px-1 md:px-0 text-[25px] w-80% md:w-[250px] md:h-[75px] md:me-6"> 
    Add/Remove from favorites
    </div>
</div>
  )
}

export default InfoDisplayComponent