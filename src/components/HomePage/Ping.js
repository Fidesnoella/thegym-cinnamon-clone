import React from 'react'
import Image from 'next/image'
import pinglogo from '../../../public/assets/images/pingLogo.webp'
import Garinprofile from '../../../public/assets/images/GarinProfile.webp'
import arrowRight from '../../../public/assets/images/arrow-right.png'
import arrowLeft from '../../../public/assets/images/arrow-left.webp'
import Link from 'next/link'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Ping = () => {
  return (
    <div className='mx-auto container'>
        <div className='py-28 px-6 md:px-32 slg:px-52'>
        <div className='grid lg:grid-cols-2  gap-10 justify-center items-center'>
        <div className='grid gap-y-5'>
            <h1 className='font-bold text-3xl md:text-[2.5rem] relative'>
            <span className="text-[16.125rem] absolute text-teal -ml-10 mt-10">“</span>
              They’re consistent, and the communication is good.</h1>
            <p className='text-base text-zinc'>When I have a deadline, they would work extra hours on the weekend and after hours.
                Cinnamon gives the impression of being a smaller team that’s focused on customers.</p>
        </div>
        <div className='hidden lg:block lg:ml-40 h-16 w-52'>
           <Image src={pinglogo} />
        </div>
       </div>
       <div className='flex flex-col md:flex-row gap-x-5 mt-10'>
         <div>
            <Image src={Garinprofile}  className='w-20 h-20'/>
         </div>
         <div className='grid gap-y-2'>
            <h3 className='font-bold text-2xl'>Garin Toren,</h3>
            <h4 className='text-base'>CEO, ping</h4>
         </div>
       </div>
       <div className='flex flex-col gap-y-5 md:gap-y-0 md:flex-row justify-between mt-10'>
        <div className='flex gap-10 items-start'>
          <Image src={arrowLeft} />
          <Image src={arrowRight} />
        </div>
        <div className='items-end text-darkBlue'>
          <Link href="#" className='flex items-center gap-3'>
            <FontAwesomeIcon  icon={faChevronRight}/>
            <p className='font-bold border-b-2 border-darkBlue'>VIEW CASE STUDY</p>
          </Link>
        </div>
       </div>
        </div>
      
    </div>
  )
}

export default Ping