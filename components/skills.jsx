import React from 'react'
import Heading from './heading'

const Skills = () => {
  return (
    <>
        <div className='flex justify-center'>
            <Heading title="My Skills" />
           
        </div>
        <div className=''>
         <p className='text-center mx-auto max-w-[700px] px-4'>I am working at PIDE since 2011. I have done the work in Visual C++, .Net, Wordpress, CSS, TailwindCSS
            MYSql, C, C++, JavaScript, TypeScript, Next.JS.</p></div>

          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12 mx-12  mt-4 mb-16'>
            <div className=''>
              <p>React.js</p>
              <div className='relative bg-gray-400 h-1 mt-2 mb-3'>
                <div className='bg-red-600 h-1 w-[90%]'> </div>
              </div>
              <p>Next.js</p>
              <div className='relative bg-gray-400 h-1 mt-2 mb-3' >
                <div className='bg-red-600 h-1 w-[70%]'> </div>
              </div>
              <p>TailwindCSS.js</p>
              <div className='relative bg-gray-400 h-1 mt-2 mb-3'>
                <div className='bg-red-600 h-1 w-[60%]'> </div>
              </div>

            </div>
            <div>
            <p>Blockchain</p>
              <div className='relative bg-gray-400 h-1 mt-2 mb-3'>
                <div className='bg-red-600 h-1 w-[80%]'> </div>
              </div>
              <p>Metaverse</p>
              <div className='relative bg-gray-400 h-1 mt-2 mb-3'>
                <div className='bg-red-600 h-1 w-[70%]'> </div>
              </div>
            </div>

          </div>
    </>
  )
}

export default Skills