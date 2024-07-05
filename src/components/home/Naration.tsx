import { motion } from 'framer-motion';
import dec from '../../assets/Mask group.png';
import planet from '../../assets/Purple Planet-3.png';
import mod from '../../assets/Modular-Coding-Of-Application--Streamline-Manila.png';
export const Naration = () => {
  return (
    <div className="text-center z-10 min-h-screen relative text-white py-24">
      <div className="absolute -top-32 right-4">
        <motion.div
          style={{}}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
        >
          <img src={dec} className="w-[250px]  sm:w-[300px] " />
        </motion.div>
      </div>
      <motion.div
        style={{}}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        <h1 className="text-3xl font-bold p-4">Hmm, Coba Pikirin deh...</h1>
      </motion.div>
      <motion.div
        style={{}}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-base p-8 ">
          Jadi mahasiswa emang bisa jadi tantangan tersendiri, tapi jangan
          khawatir, itu semua bagian dari perjalanan belajar dan berkembang.
          Berikut beberapa hal yang bikin kehidupan mahasiswa nggak mudah dan
          bikin lo tetep waras, tapi juga seru!
        </p>
      </motion.div>
      <div className="relative overflow-hidden w-full  flex justify-center items-center">
        <motion.div
          style={{ transformOrigin: 'bottom' }}
          animate={{
            rotate: [0, 20, 0],
            transition: {
              duration: 30,
              repeat: Infinity,
            },
          }}
          className="relative overflow-hidden"
        >
          <img
            src={planet}
            className="w-[250px] overflow-hidden  sm:w-[300px] "
          />
        </motion.div>
      </div>

      <img
        src={mod}
        className="w-[250px] sm:w-[350px] overflow-hidden absolute bottom-24"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      />
    </div>
  );
};
