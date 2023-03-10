import React from 'react'
import Heading from './heading'

const About = () => {
  return (
    <>
        <div className='flex flex-col px-4 py-10'>
            <Heading title="About Me" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                <div>
                    <img src="/picture.jpg" alt="Picture" width={300} />
                </div>

            </div>
        </div>
    </>
  )
}

export default About