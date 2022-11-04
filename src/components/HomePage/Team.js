import React from 'react'
import Image from 'next/image'
import team from '../../../public/assets/images/team.webp'
import Button from '../ui/Button'

const Team = () => {
  return (
    <>
    <div className='hidden lg:block w-full relative bg-neutral '>
       <div className='mx-auto container '>
        <div className='px-52  gap-x-20 grid grid-cols-3 py-28'>
        <div className='max-w-xs'>
            <h1 className='text-black font-bold text-[54px] leading-[72px]'>Agile team
            on demand
            </h1>
        </div>
       <div className='flex flex-col gap-y-5'>
        <p className='text-base text-zinc leading-7 max-w-xs'>By hiring and managing talented people with skills specific to your project, 
            we build you a team that’s accomplished, agile and scalable in both directions.</p>
            <Button>See How it Works</Button>
       </div>
        </div>  
       </div>
       <div className='absolute right-0 bottom-0'>
            <Image src={team} />
        </div>
    </div>
    <div className='mx-auto px-6 container pt-11 grid grid-cols-1 gap-y-10 lg:hidden'>
      <div className='max-w-xs'>
            <h1 className='text-black font-bold text-5xl leading-[72px]'>Agile team
            on demand
            </h1>
      </div>
      <div>
            <Image src={team} />
        </div>
        <div className='flex flex-col gap-y-5'>
        <p className='text-base text-zinc leading-7 max-w-xs'>By hiring and managing talented people with skills specific to your project, 
            we build you a team that’s accomplished, agile and scalable in both directions.</p>
        <Button>See How it Works</Button>
       </div>
    </div>
    </>
  )
}

export default Team