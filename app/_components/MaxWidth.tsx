import React from 'react';

const Maxwidth = ({children,className,className2}:{children:React.ReactNode,className?:string ,className2?:string}) => {
  return (
    <div className={`flex justify-center w-full ${className}`}>
       <div className={`w-[1000px] ${className2}`}>
        {children}
       </div>
    </div>
  );
}

export default Maxwidth;
