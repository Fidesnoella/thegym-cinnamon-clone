import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logowhite from '../../../public/assets/icons/logo-white.svg';
import clutch from '../../../public/assets/images/clutch-badge.webp';
import pangea from '../../../public/assets/images/pangea-badge.7734fbc8.svg';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faDribbble, faBehance, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faRss  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

// overflow-x-auto

import Button from '../ui/Button';

function Lists({title, paragraphLists}) {
    return (
        <ul className='grid gap-y-2'>
            <li className='font-bold text-white text-base'><h1>{title}</h1></li>
            {
                paragraphLists.map((paragraph, index) => {
                    return <li key={index} className="text-sm text-darkgray"><p>{paragraph}</p></li>
                })
                
            }
        </ul>
    )
}

function Footer() {
    let tags = ["Home","Projects", "Services", "About Us", "Careers", "Blog"]  
    return (
        <>
         <div className='bg-[url("../../public/assets/images/noise.png")] bg-dark'>
            <div className='mx-auto container'>
                <footer className='px-6 md:px-20 slg:px-52 py-20 text-white'>
                    <div className='flex flex-col md:flex-row gap-x-20'>
                    <div className='grid gap-y-10'>
                        <div>
                           <Image src={logowhite}  className='w-44'/>
                           <div><h4 className='mt-5 md:hidden text-white font-bold text-2xl leading-9'>All software,<br/>zero bullshit.</h4></div>
                        </div>
                        <div>
                        <ul className='text-darkgray font-bold text-base grid grid-cols-2 md:grid-cols-1 gap-y-5'>
                            {tags.map((tag, index) => {
                                return <li key={index}><Link href="#">{tag}</Link></li>
                            })}
                        </ul>
                        </div>
                        <div className='hidden md:block mt-28'>
                            <p className='underline text-sm text-white'>hello@cinnamon.agency</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-20'>
                        <div className='flex flex-col gap-y-20'>
                        <div><h4 className=' hidden md:block text-white font-bold text-[32px] leading-[46px]'>All software, zero bullshit.</h4></div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-20'>
                            <Lists 
                            title={"Zagreb"}
                            paragraphLists={["Slavonska avenija 6,", "10000, Zagreb, Croatia", "+385 99 347 3103"]}
                            />
                            <Lists 
                            title={"New York"}
                            paragraphLists={["500 7th Ave, New York,", "NY 10018, United States"]}
                            />
                            <Lists 
                            title={"Belgrade"}
                            paragraphLists={["Bulevar vojvode Mišića 37", "11000, Belgrade, Serbia"]}
                            />
                        </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-x-40 gap-y-20 md:gap-y-0'>
                            <div className='flex flex-col gap-y-5'>
                                <p className='font-bold text-base'>Our newsletter</p>
                                <div>
                                    <form action="#" className='flex flex-col gap-y-3 '>
                                        <div className='flex flex-col text-darkgray'>
                                        <label for="email">Your Email</label>
                                        <input type="email" name="email" id="email" className='w-full lg:w-60 outline-none bg-transparent border-b-2 border-darkgray' />
                                        </div>
                                        <div><Button style={"w-full lg:w-60"} > Subscribe</Button></div>
                                    </form>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-3 items-center md:items-start '>
                            <Image className='w-60' src={pangea} />
                            <Image src={clutch} />
                            <div className='mt-5 text-center md:hidden'>
                            <p className='underline text-sm text-white'>hello@cinnamon.agency</p>
                           </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='border-b-2 border-darkgray mt-10'></div>
                    <div className='flex flex-col-reverse gap-5 mt-5 md:flex-row justify-center  items-center md:justify-between'>
                        <div className='flex text-base gap-5 items-start text-darkgray'>
                            <p>© 2022 Cinnamon</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className='items-end flex gap-5 '>
                            <Link href="#"><FontAwesomeIcon icon={faLinkedin}/></Link>
                            <Link href="#"><FontAwesomeIcon icon={faDribbble}/></Link>
                            <Link href="#"><FontAwesomeIcon icon={faBehance}/></Link>
                            <Link href="#"><FontAwesomeIcon icon={faInstagram}/></Link>
                            <Link href="#"><FontAwesomeIcon icon={faFacebook}/></Link>
                            <Link href="#"><FontAwesomeIcon icon={faRss}/></Link>
                        </div>
                    </div>
                </footer>
            </div>
         </div>
        </>
    );
}

export default Footer;