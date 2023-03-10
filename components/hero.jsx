import React from 'react'
import Image from 'next/image'
import Button from "./button"


const Hero = () => {
  return (
    <>
    {/* <Image src="/hero2.jpg" width={400} height={400}/> */}
    <div className='flex justify-center h-screen bg-fixed bg-cover items-center mx-auto  custom-img'>
        <div>
            <div className='max-w-[650px] text-white flex flex-col  justify-center text-center '>
                <h1 className='text-5xl'>I am Khurram Iqbal</h1>
                <h4 className='text-2xl'>Full Stack Developer</h4>
                
                <div className='bg-red-600 w-24 h-[2px] mt-4 '></div>
                <p>I am Web Manager at Pakistan Institute of Development Economics, Islamabad</p>
                <Button className="justify-center" text="View More" link="/" />

            </div>
            
        </div>
        
    </div>

    </>
  )
}

export default Hero