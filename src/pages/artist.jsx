import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'

import ListItem from '../components/list-item';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const API_KEY = process.env.REACT_APP_API_KEY;

function Artist() {
  
  const {name} = useParams();

  const navigate = useNavigate();
  
  const API_ALBUMS_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json&limit=10`;
  const API_TRACKS_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json&limit=20`;
  
  const {data: albumsData} = useQuery(['artist', 'albums', name], async ({ pageParam = 0 }) => {
    const response = await fetch(API_ALBUMS_URL);
    const json = await response.json();
    return json.topalbums.album;
  })

  const {data: tracksData} = useQuery(['artist', 'tracks', name], async ({ pageParam = 0 }) => {
    const response = await fetch(API_TRACKS_URL);
    const json = await response.json();
    return json.toptracks.track;
  })

  return (
    <div className='dark:bg-gray-800 dark:text-white  flex flex-col w-full justify-center items-center gap-3'>
      <div className='flex flex-col justify-center items-center w-full overflow-x-scroll '>
        <div className='flex flex-row group w-full h-[100px] justify-between items-center border-y border-t-gray-300'>
          <div onClick={() => navigate("/")} className='h-full flex justify-center items-center group-hover:bg-[#d1d8e0]/30 dark:group-hover:bg-white/25'>
                <ArrowLeftIcon tIcon className="h-10 w-10 inline-block p-2 text-black dark:text-white"/>
          </div>  
          <div className='h-full flex justify-end items-center text-end text-4xl md:text-5xl font-semibold p-5 w-full'>
            {name}
          </div>
          <div className='hidden md:inline-text p-1 h-10 w-10'>
          </div>
        </div>
        <div className='w-full p-0'>
          <div className='w-screen flex-shrink-0 snap-x snap-mandatory snap-center flex flex-col items-start justify-start'>
            <ListItem data={albumsData} title="Top 10 Albums" />
            <ListItem data={tracksData} title="Top Songs" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artist