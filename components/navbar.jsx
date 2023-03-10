import React from 'react'
import Link from 'next/link'
import {BiDownload} from 'react-icons/bi'
import {FiMenu} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className=' border-2'>
        <div className='flex mx-16 justify-between items-center py-4 '>
            <div className=' text-[24px]'>Khurram Iqbal</div>
            <div className='hidden md:flex gap-6'>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Portfolio</Link>
                <Link href='/'>Contact</Link>
                
            </div>
            <div className='text-2xl md:hidden'>
              <FiMenu/>
            </div>
            <div className='hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-red-700 text-red-700 hover:bg-red-700 hover:cursor-pointer hover:text-white '>Download CV <BiDownload/></div>
          
        </div>
    </div>
  )
}

export default Navbar