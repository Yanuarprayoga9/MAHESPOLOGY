import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="py-40 flex flex-col items-center">
      <div className="">Page Not Found</div>
      <Link to={'/'}> redirect to <span className='underline'>home</span></Link>
    </div>
  );
};

export default NotFound;
