import React from 'react';
import { text } from '../data';
import Image from 'next/image';
import JS from '@/public/JS.jpg'

const About = () => {
  return (
   <section className='bg-green-500 rounded-md p-10 mb-40'>
    <div>
      <h2 className='text-black text-2xl font-bold  my-3'>About Me</h2>
      <p className='text-lg text-black font-[600]'>{text.about}</p>
    </div>

    <div className='flex flex-row items-center gap-4 my-6'>
      <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex justify-center items-center'><Image src={JS} alt='profile' className='w-full h-full object-cover'/></div>
      <div className='text-black'>
        <h1 className='font-[600] text-base'>Bhaskar Bhandari</h1>
        <p className='font-[500] text-sm'>Web developer</p>
      </div>
    </div>
   </section>
  );
}

export default About;
