import React from 'react';
import Image from 'next/image';


const ProductSection = ({className, bgUrl, title, tags, subtitle}) => {   
  return (
    <div className='mx-auto container'>
       <div className='px-6 md:px-28 slg:px-52  mt-16 lg:mt-24 flex flex-col gap-y-5'>
          <div className={` group ${className}`}>
             <Image src={bgUrl} className= "duration-300 group-hover:scale-105 transition-all"/>
          </div>
          <div className='text-xs text-stone flex flex-wrap gap-3 font-bold'>
             {
                tags?.map((el, i) => (
                    <div key={i}>{el}</div>
                ))
             }
          </div>
          <h1 className='text-3xl lg:text-3xl text-black font-bold'>{title}</h1>
          <h2 className='text-base text-stone  max-w-2xl'>{subtitle}</h2>
       </div>
    </div>
  )
}

export default ProductSection