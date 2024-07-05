import Feature from '../../components/home/FilterSemester';
import HomeComponent from '../../components/home/Home';
import Penyakit from '../../components/home/MateriGayaHIdupContent';
import { motion } from 'framer-motion';
// import bg from '../../asset/Lovepik_com-400980747-star-decoration.png';
import g from '../../asset/Lovepik_com-611114205-Cosmic Milky Way black hole planet decoration illustration.png';
import manyplanet from '../../assets/Frame 1000001726.png';
import { Naration } from '../../components/home/Naration';
import { useState } from 'react';
import { ModalGreet } from '../../components/home/ModalGreet';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full    ">
      <ModalGreet isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <img src={bg} className=" absolute right-0" /> */}
      <motion.div
        style={{ transformOrigin: 'top' }}
        animate={{
          rotate: [60, 5],
          transition: {
            duration: 50,
            repeat: Infinity,
          },
        }}
        className="absolute  right-20 h-full  w-[500px] sm:w-[700px]"
      >
        <img
          className="absolute right-0  -top-8   w-[200px] sm:[700px]   object-cover object-bottom"
          src={g}
        />
      </motion.div>
      <motion.div
        style={{ transformOrigin: 'top' }}
        animate={{
          rotate: [0, 20,0],
          transition: {
            duration: 30,
            repeat: Infinity,
          },
        }}
        className="absolute  bottom-0 h-full  w-full "
      >
        <img
          className="absolute bottom-0   w-full sm:[700px]   object-cover object-bottom"
          src={manyplanet}
        />
      </motion.div>

      {/* <motion.div
        style={{ transformOrigin: 'top' }}
        animate={{
          rotate: [5, -5, 5],
          transition: {
            duration: 7,
            repeat: Infinity,
          },
        }}
        className="absolute  right-20 h-full  w-[500px] sm:w-[700px]"
      >
        <div className="absolute  right-30 w-[400px] sm:w-[700px]  top-20  h-[200px]  bg-yellow-400  opacity-30 rounded-full md:blur-3xl blur-2xl "></div>
        <img
          className="absolute right-0  -top-8   w-[1000px] sm:[700px]   object-cover object-bottom"
          src={bg}
        />
      </motion.div> */}

      <HomeComponent />
      <Naration />
      <Feature />
      <Penyakit />
      {/* <Penyakit />
      <Footer /> */}
    </div>
  );
};

export default Home;
