import React from 'react'
import Navbar from '../Layout/Navbar'


const Hero = () => {
  return (
    <>
   
    <div className='bg-[url("../../public/assets/images/noise.png")] bg-dark'>
    <Navbar />
        <div className='mx-auto container'>
        <div className='px-6 md:px-28 slg:px-52 flex flex-col items-start justify-center pt-36 lg:pt-52 gap-y-5 pb-32 lg:pb-52'>
           <h1 className='font-bold text-4xl sm:text-[46px] lg:text-[80px] text-white lg:leading-[105px]'>
           Results focused design & 
           development agency.
           </h1>
           <p className='font-semibold text-darkgray text-xl leading-8 lg:max-w-2xl'>
           Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, we’ll get your product off the ground and build a momentum for your success.
           </p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Hero