import React from 'react'
import { Link } from "react-router-dom";
import { getColor } from '../../utils/bg-color';

const ArtistSmall = ({ artist, index }) => {

  const listenersNumber = artist.listeners.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1'+".");

  return (
    <Link to={artist.name} className={`flex flex-col justify-between items-start p-2 ${getColor(index)} w-full col-span-1 h-36`}>
      <div className='flex flex-row font-cursive justify-between items-center w-full text-white/80 text-end'>
        <div className='text-[24px] md:text-3xl text-end tracking-tight text-white/60 '>#{index+1}</div>
        <div className='flex flex-col font-cursive justify-center items-end'> 
          <div className='w-full text-sm md:text-lg text-end'>{listenersNumber}</div>
          <div className='w-full text-xs md:text-sm text-end'>listeners</div>
        </div>
      </div>
      <div className='text-white text-2xl md:text-4xl font-extrabold font-sans tracking-tight leading-none '>{artist.name}</div>
    </Link>
  )
}

export default ArtistSmall