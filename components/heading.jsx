import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='text-black text-3xl flex flex-col items-center gap-4 py-16' >
        {title}
        <div className='bg-red-600 h-[2px] w-[190px]'></div>
    </div>
  )
}

export default Heading