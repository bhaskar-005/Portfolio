import React from 'react';
import logo from '@/public/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({className}:{className?:string}) => {
  return (
   <Link href={'/'}>
       <div className={`sm:w-[150px] w-[130px] ${className} `}>
      <Image src={logo} loading='lazy' alt="logo" className='w-full h-full invert-0 dark:invert ' />
    </div>
   </Link>
  );
}

export default Logo;
