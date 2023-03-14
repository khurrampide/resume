import React from 'react'
import Image from 'next/image'
import Button from "./button"


const Hero = () => {
  return (
    <>
    {/* <Image src="/hero2.jpg" width={400} height={400}/> */}
    <div className='flex flex-col justify-center h-screen bg-fixed bg-cover items-center mx-auto  custom-img'>
        <div>
            <div className='max-w-[650px] text-white flex flex-col  justify-center text-center '>
                <h1 className='text-5xl'>I am Khurram Iqbal</h1>
                <h4 className='text-2xl mb-4'>Full Stack Developer</h4>
                
                {/* <div className='bg-red-600 w-24 h-[2px] mt-4 mx-auto '></div> */}
                <p>Web Manager @ Pakistan Institute of Development Economics, Islamabad</p>
                

            </div>
            {/* <Button className="justify-center mx-auto" text="View More" link="/" /> */}
            
        </div>        
        <div className='btn'>View More...</div>
    </div>

    </>
  )
}

export default Hero