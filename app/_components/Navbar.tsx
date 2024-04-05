import React from 'react';
import Logo from './Logo';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import blob_green from '@/public/blob_green.png'
import zine from '@/public/zine.png'

export const social = [
    {
        platform: "X",
        url: "https://www.facebook.com/",
        logo: <RiTwitterXLine />,
        
    },
    {
        platform: "github",
        url: "https://www.facebook.com/",
        logo: <FaGithub />,
        
    },
   
      
]

const Navbar = () => {
  return (
     <div className=' flex flex-row justify-between items-center relative'>
       <Image src={zine} alt='img' className=' absolute -translate-y-28 rotate-180 left-0 opacity-30 z-[-9999]  select-none  '/>
       <Logo className=' -rotate-6 my-5 '/>
       <div className='flex flex-row text-2xl gap-6 cursor-pointer '>
         {
            social.map((data)=>(
               <Link key={data.platform} href={data.url} target='_blank' >
                <div key={data.platform}>
                   {data.logo}
                </div>
               </Link>
            ))
         }
       </div>
    </div>
  );
}

export default Navbar;
