import Link from 'next/link';
import React from 'react';

const Button1 = ({text,link,icon,href}:{text:string,link?:string,icon?:React.ReactNode,href?:string}) => {
  return (
    <Link href={href?href:'#'} className=' '>
   <button className='border-2 border-green-400 px-4 py-2 rounded-md text-green-400 font-[500] flex flex-row items-center gap-2'>
    {icon}{text}
   </button>
   </Link>
  );
}

export default Button1;
