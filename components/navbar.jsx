import React from 'react'
import Link from 'next/link'
import {BiDownload} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='border border-2'>
        <div className='flex mx-16 justify-between items-center py-4 '>
            <div className=' text-[24px]'>Eva Rouse</div>
            <div className=' flex gap-6'>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Portfolio</Link>
                <Link href='/'>Contact</Link>
                
            </div>
            <div className='flex items-center gap-2 px-4 py-2 rounded-lg border border-red-700 text-red-700 hover:bg-red-700 hover:cursor-pointer hover:text-white '>Download CV <BiDownload/></div>
          
        </div>
    </div>
  )
}

export default Navbar