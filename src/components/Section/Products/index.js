import React from 'react';
import ProductSection from './ProductSection'
import corrily from '../../../../public/assets/images/Mockup_1.webp'
import finance from '../../../../public/assets/images/Fiona_Thumbnail.webp'
import ukulele from '../../../../public/assets/images/thumbnail.webp'


function index(props) {
    return (
        <>
            <ProductSection
             className={"bg-lightgreen"}
             bgUrl={corrily}
             tags={['PRODUCT DESIGN','QUALITY ASSURANCE' ]}
             title={<>Corrily: Optimize prices <br/>to maximize revenue</>}
             subtitle={<>Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. 
             Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign.</>}
             />
               <ProductSection
             className={"bg-purple"}
             bgUrl={finance}
             tags={['PRODUCT DESIGN','WEB DEVELOPMENT' ]}
             title={<>Fiona: Engage & <br/> Decide</>}
             subtitle={<>Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.</>}
             />
               <ProductSection
             className={"bg-orange"}
             bgUrl={ukulele}
             tags={['PRODUCT DESIGN','WEB DEVELOPMENT','QUALITY ASSURANCE' ]}
             title={<>Ukulele:<br/>The largest ukulele tabs archive</>}
             subtitle={<>Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website.</>}
            />
        </>
    );
}

export default index;