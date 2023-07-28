import React from 'react';
import Image from 'next/image';

function TechCard({image,title, date, paragraph}) {
    return (
      
        <div className='max-w-xl'>
            <Image src={image} />
            <div className='font-bold text-2xl'><h3>{title}</h3></div>
            <div><p>{date}</p></div>
            <div className='font-bold text-3xl'><p>{paragraph}</p></div>
        </div>
    );
}

export default TechCard;