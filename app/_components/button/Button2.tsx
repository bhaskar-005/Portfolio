import React from 'react';

const Button2 = ({text,link,icon}:{text:string,link?:string,icon?:React.ReactNode}) => {
    return (
     <button className='bg-green-500 font-[500] px-4 py-2 rounded-md hover:bg-green-400 text-black flex flex-row items-center gap-2 justify-center'>
      {icon}{text}
     </button>
    );
  }

export default Button2;
