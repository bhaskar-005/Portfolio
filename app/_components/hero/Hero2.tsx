import React from 'react';
import Image from 'next/image';
import JS from '@/public/JS.jpg';
import MongoDB from '@/public/MongoDB.png';
import vscode from '@/public/vscode.jpg';
import react from '@/public/react.webp';

const Hero2 = () => {
  return (
    <div className=' mt-4'>
      <div className='flex flex-row'>
          <div className='bg-green-400'><Image src={MongoDB} alt='Mongodb' className=' rounded-xl '  width={100} height={100}  loading='lazy'/></div>
          <div className=' bg-purple-600 ' ><Image src={vscode} alt='Mongodb' className=' rounded-xl '  width={100} height={100}  loading='lazy'/></div>
      </div>
      <div className='flex flex-row'>
         <div><Image src={JS} className=' rounded-xl ' alt='Mongodb' width={100} height={100}  loading='lazy'/></div>
         <div><Image src={react} className=' rounded-xl ' alt='Mongodb' width={100} height={100}  loading='lazy'/></div>
      </div>
    </div>
  );
}

export default Hero2;
