import React from 'react';
import Image from 'next/image';
import orbit from '@/public/orbit.svg'
import blob_green from '@/public/blob_green.png'
import ContectForm from './ContectForm';


const Contact = () => {
  
  return (
    <section className='flex sm:flex-row flex-col mt-20 pb-20 relative '>
      <Image src={orbit} alt='img' className='absolute z-[-9999] opacity-10 select-none '/>
      <Image src={blob_green} alt='img' className='absolute z-[-9999] opacity-10 select-none -translate-y-52'/>
      <div className='sm:w-[50%] w-full h-auto flex justify-center items-center'>
        <h1 className='text-5xl sm:block hidden'>Say Hello 👋</h1>
      </div>
      <div className='sm:w-[50%] w-full h-full'>
        <ContectForm/>
      </div>
   </section>
  );
}

export default Contact;
