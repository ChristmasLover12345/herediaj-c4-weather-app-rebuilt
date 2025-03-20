import React from 'react'

const InfoDisplayComponent = (props: { placeName: string; day: string; month: string; year: number }) => {
  return (
    <div className="bg-[#D9D9D9]/40 backdrop-invert backdrop-opacity-10 justify-self-end flex items-center md:items-end flex-col rounded-[5px] md:w-[90%] md:h-[75%] md:row-start-1 md:row-end-4 md:col-start-3 md:col-end-5">
    <h1 className="md:text-[45px] lg:text-[70px] pe-6">{props.placeName}</h1>
    <h3 className="pe-6 text-[40px]">{`${props.day}/${props.month}/${props.year}`}</h3>
    <div className="text-center bg-[#E4FF4A] text-black border-[2px] rounded-[5px] text-[25px] w-[250px] h-[75px] me-6"> 
    Add/Remove from favorites
    </div>
</div>
  )
}

export default InfoDisplayComponent