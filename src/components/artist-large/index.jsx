import React from 'react'
import { Link } from "react-router-dom";
import { getColor } from '../../utils/bg-color';

const ArtistLarge = ({ artist, index }) => {
  return (
    <Link to={artist.name} className={`flex flex-col justify-between items-start p-3 ${getColor(index)} w-full col-span-2 h-80`}>
      <div className='flex flex-row justify-between items-center w-full font-cursive text-white/80 text-end'>
        <div className='text-6xl md:text-8xl text-end tracking-widest'>#{index+1}</div>
        <div className='flex flex-col font-cursive justify-center items-end'>
          <div className='w-full text-2xl md:text-4xl'>{artist.listeners.replace(/(\d)(?=(\d{3})+$)/g, '$1'+".")}</div>
          <div className='w-full text-lg'>listeners</div>
        </div>
      </div>
      <div className='text-white text-7xl md:text-9xl font-extrabold font-sans tracking-tight leading-none'>{artist.name}</div>
    </Link>
  )
}

export default ArtistLarge