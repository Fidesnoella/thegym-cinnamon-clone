import React from 'react'
import Image from 'next/image'

const Service = ({icon, title, paragraph}) => {
  return (
    <div className='grid gap-y-5 items-start w-64'>
        <Image src={icon} />
        <h5 className='text-2xl text-white font-bold'>{title}</h5>
        <p className='text-base text-darkgray font-medium'>{paragraph}</p>
    </div>
  )
}

export default Service