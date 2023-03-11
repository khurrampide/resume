import React from 'react'
import Heading from './heading'
import {AiOutlineGift} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {BsGlobe2} from 'react-icons/bs'
import {TbPacman} from 'react-icons/tb'
import {MdLocationOn} from 'react-icons/md'


const About = () => {
  return (
    <>
                <div className="flex justify-center">
            <Heading  title="About Me" />
            </div>
        {/* <div className='flex flex-col px-4'> */}

            {/* <div className='bg-green-300 grid grid-cols-1 md:grid-cols-2 gap-[60px]'> */}
            <div className=' flex flex-col md:flex-row  justify-center  gap-[60px]'>
                <div className='flex justify-center'>
                    <img src="/picture.jpg" alt="Picture" width={300} />
                </div>
           
                <div  >
                  <div className='flex items-center justify-between w-[300px]'>
                    <div className='flex flex-col gap-6'>
                      <div className='flex gap-4 items-center font-medium'>
                      <AiOutlineGift className="text-red-600 text-[22px]" />
                      Birthday
                      </div>
                      <div className='flex gap-4 items-center font-medium'>
                      <FiBookOpen className="text-red-600 text-[22px]" />
                      Study
                      </div>
                      <div className='flex gap-4 items-center font-medium'>
                      <BsGlobe2 className="text-red-600 text-[22px]" />
                      Website
                      </div>
                       <div className='flex gap-4 items-center font-medium'>
                      <TbPacman className="text-red-600 text-[22px]" />
                      Interest
                      </div>
                      <div className='flex gap-4 items-center font-medium'>
                      <MdLocationOn className="text-red-600 text-[22px]" />
                      Location
                      </div>
                    </div>

                    <div className='flex flex-col gap-6 text-gray-600'>
                      <div>:</div>
                      <div>:</div>
                      <div>:</div>
                      <div>:</div>
                      <div>:</div>
                      

                    </div>

                    <div className='flex flex-col gap-6 text-gray-600'>
                      <div>21, Oct, 1979</div>
                      <div>IIUI</div>
                      <div>www.pide.org.pk</div>
                      <div>Software Development</div>
                      <div>Islamabad</div>
                    </div>
                  </div>
                  <div className='max-w-[500px]'>
                    <h2 className='font-bold mt-16 mb-4'>I am Khurram Iqbal, Full Stack Developer</h2>
                    <p className='text-gray-600'>Hi, My name is Khurram Iqbal and I am the expert of React, Next.JS and Node JS. TailwindCSS for styling</p>

                  </div>
                </div>
              

            </div>
        {/* </div> */}
    </>
  )
}

export default About