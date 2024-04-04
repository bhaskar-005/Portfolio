'use client'
import React from 'react';
import Button2 from './button/Button2';
import Image from 'next/image';
import orbit from '@/public/orbit.svg'
import blob_green from '@/public/blob_green.png'


const Contact = () => {
  return (
    <section className='flex flex-row mt-20 pb-20 relative '>
      <Image src={orbit} alt='img' className='absolute z-[-9999] opacity-10 select-none '/>
      <Image src={blob_green} alt='img' className='absolute z-[-9999] opacity-10 select-none -translate-y-52'/>
      <div className='w-[50%] h-auto flex justify-center items-center'>
        <h1 className='text-5xl'>Say Hello 👋</h1>
      </div>
      <div className='w-[50%] h-full'>
        <form onSubmit={()=>console.log('hi') } className='flex gap-3 flex-col bg-slate-800 px-8 py-16 rounded-xl card'>
           
            <label htmlFor="text">Your Message For Me <span className='text-red-600'>*</span></label>
            <textarea itemID='text' name="" className='bg-slate-800 focus:outline-none mb-6 border-b-2 border-b-green-400 text-xl border-b-rounded-full' id="" cols={20} rows={5}/>
            <label htmlFor="email">Your Email Address <span className='text-red-600'>*</span></label>
            <input id='email' type="text" className='bg-slate-800 mb-10 focus:outline-none  border-b-2 border-b-green-400 text-xl p-2 '/>
             <Button2 text='Submit'/>
        </form>
      </div>
   </section>
  );
}

export default Contact;
