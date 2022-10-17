import React from 'react'
import { Link } from "react-router-dom";
import { getColor } from '../../utils/bg-color';

const ArtistMedium = ({ artist, index }) => {

  const listenersNumber = artist.listeners.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1'+".");

  return (
    <Link to={artist.name} className={`flex flex-col justify-between items-start p-3 ${getColor(index)} w-full col-span-2 md:col-span-1 h-56`}>
      <div className='flex flex-row font-cursive justify-between items-center w-full text-white/80 text-end'>
        <div className='text-[40px] md:text-5xl text-end tracking-wide'>#{index+1}</div>
        <div className='flex flex-col font-cursive justify-center items-end'>
          <div className='w-full text-xl'>{listenersNumber}</div>
          <div className='w-full text-sm'>listeners</div>
        </div>
      </div>
      <div className='text-white text-6xl font-extrabold font-sans tracking-tight leading-none'>{artist.name}</div>
    </Link>
  )
}

export default ArtistMedium