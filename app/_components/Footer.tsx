import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { text } from '../data';
import Link from 'next/link';
import { social } from './Navbar';
import Logo from './Logo';

const Footer = () => {
  return (

<footer >
  <div >
    <div className=' flex justify-between items-center'>
    <div className='my-10 opacity-80 mt-24'>
        <div className='flex items-center gap-2 '>
         <IoIosMail className='text-2xl' />
         <div className='text-lg'>Mail</div>
        </div>
        <p className='font-thin text-gray-400'>Feel free to drop me an email</p>
        <p className='font-[600] hover:underline hover:underline-offset-4 decoration-lime-400'>{process.env.ADMIN_EMAIL}</p>
    </div>
    <Logo className='-rotate-12 sm:block hidden' />
    </div>

    <div className="mt-1 border-t border-gray-600 py-6 ">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">&copy; built from scratch by </span>
           <Link target='_blank' href={text.gitHub} className='text-lime-600 underline underline-offset-2'>Bhaskar Bhandari</Link>
        </p>

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
    </div>
  </div>
</footer>
  );
}

export default Footer;
