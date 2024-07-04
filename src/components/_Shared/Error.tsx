import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="py-40 flex flex-col items-center">
      <div className="">SOMETHING WENT WRONG</div>
      <Link to={'/'}> redirect to <span className='underline'>home</span></Link>
    </div>
  );
};

export default Error;
