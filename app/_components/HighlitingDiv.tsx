import React from 'react';

const HighlitingDiv = ({text}:{text:string}) => {
  return (
    <div className='highliteDiv text-sm'>
      {text}
    </div>
  );
}

export default HighlitingDiv;
