import React from 'react';
import Service from './Service'
import product from '../../public/assets/images/product-design.webp'
import development from '../../public/assets/images/development.webp'  
import assurance from '../../public/assets/images/quality-assurance.webp'
import marketing from '../../public/assets/images/marketing-and-growth.webp'
import Button from '../../ui/Button';

function index(props) {
    return (
        <div className='bg-[url("../../public/assets/images/noise.png")] bg-dark'>
        <div className='mx-auto container'>
          <div className='px-6 md:px-32 slg:px-52 mt-32 gap-y-5 lg:gap-y-0 grid lg:grid-cols-3 py-28'>
            <div>
               <h1 className='text-white font-bold text-[54px]'>Our services</h1>
            </div>
            <div className='col-span-2 grid md:grid-cols-2 gap-20'>
             <Service 
             icon={product}
             title={'Product Design'}
             paragraph={'Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes'}
             />
             <Service
             icon={development}
             title={'Development'}
             paragraph={'By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it`Ss a fully-fledged digital solution'}
             />
             <Service
             icon={assurance}
             title={'Quality assurance'}
             paragraph={'Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing.'}
             />
             <Service
             icon={marketing}
             title={'Marketing & growth'}
             paragraph={'By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people'}
             />
             <Button>See Our Services</Button>
            </div>
          </div>
        </div>
       </div>
    );
}

export default index;