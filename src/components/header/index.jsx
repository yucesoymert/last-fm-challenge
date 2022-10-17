import React from 'react'
import  Toggle  from '../toggle'

function Header() {
    return (
        <div className='dark:bg-gray-800 sticky top-0 flex flex-row justify-between items-center h-[52px] py-10 w-full bg-white mx-auto px-5'>
            <div className='w-11 h-6 mr-5 hidden md:inline-flex'></div>
            <p className='text-3xl font-semibold text-[#DB2A4E]'>last.fm</p>
            <Toggle />
        </div>
    )
}


export default Header