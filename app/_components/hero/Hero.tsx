import React from 'react';
import Maxwidth from '../MaxWidth';
import Hero1 from './Hero1';
import blob_green from '@/public/blob_green.png'
import Image from 'next/image';


const Hero = () => {
  return (
       <Maxwidth className2 =' relative '>
        <Image src={blob_green} alt="img" className=' absolute right-0 w-[800px] translate-y-[420px] translate-x-[200px] opacity-30 z-[-9999] select-none '/>
         <section className=' mt-[90px] mb-[160px] z-10'>
            <Hero1/>
            {/* <Hero2/> */}
         </section>
       </Maxwidth>
  
  );
}

export default Hero;
