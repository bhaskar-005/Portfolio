import React from 'react';

const SkillCard = ({name , logo}:{name:string , logo:React.ReactNode}) => {
  return (
    <div className='cursor-pointer flex flex-col border-2 border-green-400 text-green-400 group highliteDiv2 transition duration-500 ease-in-out transform rounded-md  text-5xl  justify-center items-center w-[90px] h-[90px]'>
       {logo}
       <h2 className=' hidden group-hover:block transition-all delay-500 text-base'>{name}</h2>
    </div>
  );
}

export default SkillCard;
