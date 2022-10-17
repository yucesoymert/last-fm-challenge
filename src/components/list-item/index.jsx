import React from 'react'

const ListItem = ({ data, title }) => {
    return (
      <div className={`flex flex-col justify-start items-start rounded-sm font-sans w-full`}>
        <div className='flex justify-start md:justify-center items-center text-2xl font-semibold border-y border-b-gray-300 border-t-gray-300 text-black dark:text-white py-2 w-full px-3'>
          {title}
        </div>
        <div className='w-full md:w-[650px] bg-[#d1d8e0]/10 p-3 md:pb-8 md:mx-auto flex flex-row items-center border'>
          <div className='w-9'>#</div>
          <div className='w-full flex justify-between items-center'>
            <div className='text-start '>Name</div>
            <div>Scrobbles</div>
          </div>
        </div>
        <div className="w-full h-full  md:w-[650px] bg-[#d1d8e0]/30 p-3 md:pb-8 md:mx-auto "> 
          {data?.map(( titles, albumIndex ) => {
            return (
              <div key={albumIndex} className="flex flex-row justify-between items-center font-semibold">
                <div className="flex-none pr-2 w-9 dark:text-white/75 text-gray-500 text-center ">
                  {albumIndex+1}
                </div>
                <div className='flex-2 py-1 grow w-fit'>
                  {titles.name}
                </div>
                <div className='flex-none'>
                  {titles.playcount.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1'+".")}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  
  export default ListItem