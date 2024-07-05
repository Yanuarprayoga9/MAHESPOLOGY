import { AnimatePresence, motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

interface prop {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const driverObj = driver({
  showProgress: true,
  steps: [
    {
      element: '#startnow',
      popover: {
        title: 'Ayo kita mulai🚀🚀🚀 !!!',
        description: 'Klik Tombol start now untuk memulai.',
        side: 'left',
        align: 'start',
      },
    },
    {
      element: '#Maba',
      popover: {
        title: 'Pilih Fase',
        description: 'Pilih mahasiswa semester berapa sekarang lo.',
        side: 'left',
        align: 'start',
      },
    },
    {
      element: '#tentangkami',
      popover: {
        title: 'Tentang Kami',
        description: 'Hmmm.. mungkin ada yang kepo tentang kami.',
        side: 'left',
        align: 'start',
      },
    },
    {
      element: '#letsgo',
      popover: {
        title: 'Lets goooo 🚀🚀🚀 !!!',
        description: '',
        side: 'left',
        align: 'start',
      },
    },
    // {
    //   popover: {
    //     title: 'Selesai',
    //     description:
    //       'enjoyyy',
    //   },
    // },
  ],
});

export const ModalGreet = ({ isOpen, setIsOpen }: prop) => {
  const handleCLick = () => {
    setIsOpen(false);
    driverObj.drive(); // Mulai tour saat tombol diklik
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                Haloo, Selamat datang 👋👋👋
              </h3>
              <p className=" mb-6">
                Halo sobat posey, kalian tau mahespology gak nih?
                <br></br>
                <br></br>
                <span className="font-bold">Mahespology</span>
                <br></br>
                adalah sebuah website yang membahas seputar kehidupan
                perkuliahan mahasiswa. Mulai dari fase menjadi mahasiswa hingga
                tips gaya hidup sehat, semuanya ada di sini.
                <br></br>
                <br></br>
                Jangan lupa kepoin website kita yaa, sobat posey! Dijamin,
                banyak informasi bermanfaat dan inspiratif buat kalian.
                <br></br>
                <br></br>
                <span className="font-bold">
                  apakah anda perlu tour website kami ?{' '}
                </span>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleCLick}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Tentu Saja!
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Tidak usah, deh
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
