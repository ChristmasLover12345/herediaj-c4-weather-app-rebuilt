import React from 'react'

const FavoritesComponent = () => {
  return (
    <div className='bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 flex flex-col items-center rounded-[5px] justify-self-end md:w-[50%] md:row-start-4 md:row-end-7 md:col-start-4 md:col-end-5'>

        <h2 className='text-black text-[25px] mt-2'>Favorites</h2>
        <div className='w-[80%] h-[2px] bg-black'></div>
        <div className='flex flex-col items-center w-[80%] h-[80%] overflow-y-scroll mt-2'>
 
        </div>

    </div>
  )
}

export default FavoritesComponent