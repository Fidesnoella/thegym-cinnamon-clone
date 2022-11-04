import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import job from '../../../public/assets/images/job-application.webp'

function Project(props) {
    return (
        <>
        <div className='w-full relative bg-neutral '>
           <div className='mx-auto containe'>
            <div className='grid text-center justify-center gap-y-5 py-36 md:py-20'>
            <h1 className='hidden md:block font-bold text-[40px]'>Have a project in mind?<br />
              Let's work together.</h1>
            <h1 className='md:hidden font-bold text-[40px]'>Let's work together.</h1>
            <Button
            style={"w-40 mx-auto"}
            >Contact Us</Button>
            </div>
           </div>
           <div className='absolute left-0 bottom-0 w-[220px]'>
                <Image src={job} />
            </div>
       </div>  
        </>
    );
}

export default Project;