import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import whoWeAre from '../../../public/assets/images/who-we-are.webp'

function AboutUs(props) {
    let listOne = ["Product design", "Web development", "Mobile development", "Quality assurance", "Marketing"]
    let listTwo = ["Project management","Human resources","Sales","Fluffy friends"]
    return (
        <>
        <div className='w-full  bg-neutral '>
            <div className='flex flex-col md:flex-row'>
            <div className='mx-auto container py-20 pl-6 md:pl-52 slg:pl-72'>
            <div className='grid gap-y-10'>
                <h1 className='text-[3.25rem] font-bold'>Who we are</h1>
                <p className='text-base text-darkpurple max-w-md leading-7'> Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the market throughout 20 different countries.</p>
                <div className='hidden md:flex font-bold text-xl gap-x-20'>
                    <div className='flex flex-col gap-y-8'> 
                        {
                            listOne.map((el, i) =>{
                                return <p key={i}>{el}</p>
                            })
                        }
                    </div>
                    <div className='flex flex-col gap-y-6'>
                        {
                            listTwo.map((el, i) =>{
                                return <p key={i}>{el}</p>
                            })
                        }
                    </div>
                </div>
            </div>
            <Button style={"hidden md:block w-48 mt-14"}>Read About Us</Button>
           </div>    
            <div className='px-6 md:px-0 md:mt-20'>
                <Image  src={whoWeAre}/>
                <Button style={"md:hidden w-48 mt-14"}>Read About Us</Button>
            </div>
            </div>
        </div>  
        </>
    );
}

export default AboutUs;