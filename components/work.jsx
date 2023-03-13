import React from 'react'
import Heading from './heading'
import Image from 'next/image'

const Work = () => {
  return (
    <>
    <section className='container mx-auto pb-10 px-4' >
        <Heading title="Creative Work" />
        <div className='grid grid-cols-3 gap-4'>
            <div className='row-span-2 relative group bg-green-400 '>
                <img src="/picture1.jpg" />
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 
                 transition duration-500 group-hover:opacity-100 grid place-items-center text-white '>
                    Project Title
                </div>
            </div>
                        <div className='row-span-2 relative group bg-green-400 '>
                <img src="/picture2.jpg" />
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 
                 transition duration-500 group-hover:opacity-100 grid place-items-center text-white '>
                    Project Title
                </div>
            </div>
                        <div className='row-span-2 relative group bg-green-400 '>
                <img src="/picture3.jpg" />
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 
                 transition duration-500 group-hover:opacity-100 grid place-items-center text-white '>
                    Project Title
                </div>

            </div>

        </div>
    </section>
    </>
  )
}

export default Work