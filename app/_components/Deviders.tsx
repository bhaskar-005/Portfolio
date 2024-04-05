import React from 'react';

const Deviders = ({text,id}:{text:string,id?:string} ) => {
  return (
    <span  className="relative flex justify-center">
  <div
    id={id ? id :'#'}
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 text-white px-2 rounded-2xl underline underline-offset-[12px] decoration-green-400 text-2xl bg-[#0F162B] sm:bg-opacity-100 bg-opacity-0  ">{text}</span>
</span>
  );
}

export default Deviders;
