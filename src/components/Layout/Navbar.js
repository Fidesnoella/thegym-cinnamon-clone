import Image from 'next/image';
import Link from 'next/link';
import logowhite from '../../../public/assets/icons/logo-white.svg';
import menu from '../../../public/assets/icons/mobile-menu-icon-light.svg';
import Button from '../ui/Button';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (  
        <>
        <div className='bg-dark bg-[url("../../public/assets/images/noise.png")] fixed w-full z-50'>
            <nav className="w-full mx-auto container">
                <div className='hidden lg:flex px-28 slg:px-52 justify-between items-center py-5'>
                <div>
                   <Image src={logowhite} className='w-44' />
                </div>
                <div>
                   <ul className='text-white font-bold text-base flex justify-center items-center gap-x-5'>
                    <li className='hover:text-darkBlue'><Link href="#">Projects</Link></li>
                    <li className='hover:text-darkBlue'><Link href="#">Services</Link></li>
                    <li className='hover:text-darkBlue'><Link href="#">About Us</Link></li>
                    <li className='hover:text-darkBlue'><Link href="#">Careers</Link></li>
                    <li className='hover:text-darkBlue'><Link href="#">Blog</Link></li>
                    <li className='w-11 h-11 border-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-darkBlue hover:border-darkBlue'><FontAwesomeIcon icon={faPlay}/></li>
                    <Button>Contact Us</Button>
                   </ul>
                </div>
                </div>
                <div className='flex px-6  justify-between items-center lg:hidden py-10'>
                <div>
                   <Image src={logowhite} className='w-44' />
                </div>
                <div>
                <Image src={menu} />
                </div>
                </div>
            </nav>
        </div>
        </>
    );
}
 
export default Navbar;