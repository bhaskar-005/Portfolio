import React from 'react';

const Maxwidth = ({children,className,className2}:{children:React.ReactNode,className?:string ,className2?:string}) => {
  return (
    <div className={`flex justify-center w-full ${className} overflow-hidden`}>
       <div className={`w-[1000px] ${className2} lg:px-0 px-4`}>
        {children}
       </div>
    </div>
  );
}

export default Maxwidth;
