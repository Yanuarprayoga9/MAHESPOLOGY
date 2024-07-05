import { motion } from 'framer-motion';
import { GayaHidupDisclosure } from './GayaHidupDisclosure';
import { gayaHidupMateri } from '../../data/materi';

const GayaHidup = () => {
  return (
    <div className="h-auto py-24 min-h-screen w-full px-5 lg:px-[72px] my-8 flex flex-col gap-5">
      <h1 className="font-bold text-[16px] lg:text-[20px] text-orange">
        Haloo, sobat posey
      </h1>
      <h1 className=" text-[24px] lg:text-[30px] font-bold">
        TIPS & TRIK Buat Sobat Posey
      </h1>
      <motion.div
         initial={{ opacity: 0, scale: 0 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
      >
        <p className="text-sm">
          Gaya hidup sehat mahasiswa adalah pola hidup yang mendukung kesehatan
          fisik dan mental. Gaya hidup sehat ini nantinya akan berpengaruh
          banget ke fisik dan pikiran mahasiswa. Sebagai mahasiswa, kita harus
          pintar-pintar mengatur pola makan, rajin olahraga, cukup tidur, jaga
          pertemanan yang positif, dan aktif di berbagai organisasi kampus.
        </p>
      </motion.div>
      <GayaHidupDisclosure materis={gayaHidupMateri} />
    </div>
  );
};

export default GayaHidup;
