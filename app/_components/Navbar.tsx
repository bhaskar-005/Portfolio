import React from 'react';
import Logo from './Logo';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import blob_green from '@/public/blob_green.png'
import zine from '@/public/zine.png'
import { text } from '../data';

export const social = [
    {
        platform: "X",
        url: "https://twitter.com/BsB02266322",
        logo: <RiTwitterXLine />,
        
    },
    {
        platform: "github",
        url: text.gitHub,
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
            social.map((data,index)=>(
               <Link key={index} href={data.url} target='_blank' >
                <div key={index}>
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
