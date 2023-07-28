import React from 'react';
import Freelance from '../../../../public/assets/images/Freelance_VS.webp'
import TechCard from './TechCard';
import Image from 'next/image';

function index(props) {

    const cards = [

       {
        image: Freelance,
        title: "Sales",
        date: "13/11/22",
        paragraph: "Differences in Hiring an Agency vs. Freelancers 2.0"
       },
       {
        image: Freelance,
        title: "Sales",
        date: "13/11/22",
        paragraph: "Differences in Hiring an Agency vs. Freelancers 2.0"
       },
       {
        image: Freelance,
        title: "Sales",
        date: "13/11/22",
        paragraph: "Differences in Hiring an Agency vs. Freelancers 2.0"
       }
      
    ]

    return (
        <div className='mx-auto container'>
            <div className='inline-flex  gap-x-8 w-full h-full px-6 sm:px-20 slg:px-52 py-16 overflow-x-scroll scrollbar-hide'>
                {
                    cards.map((card, index) => {
                        return(
                            <TechCard {...card } key={index}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default index;