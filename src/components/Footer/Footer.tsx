import React from 'react';
interface footerProps {

}

 const Footer: React.FC<footerProps>  = ({}) => {
  return (
     <div className=' bg-secondary text-white h-[72px] flex flex-col justify-center items-center'>
      <div>Movie App</div>
      <div>&#169;2021, Movie, Inc. or its affiliates</div>

  </div>
  )
};

export default Footer;
