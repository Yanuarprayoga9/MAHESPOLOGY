import { features, semesterFilterdesc } from '../../data/dummy';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FilterSemester = () => {
  const navigate = useNavigate();

  const handleClick = (a: string) => {
    navigate(`/materi?materi=${encodeURIComponent(a)}`);
  };

  return (
    <div className=" py-8 h-auto px-5 lg:px-[72px] flex flex-col gap-5 mt-4">
      <h1 className="font-bold text-[16px] lg:text-[20px] text-orange">
        FASE MAHASISWA
      </h1>
      <motion.div
        style={{}}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <h1 className="font-bold text-2xl lg:text-[30px]">
          Jadi ada 3 fase mahasiswa nih,lo yang mana
        </h1>
      </motion.div>
      <div className="flex p-4  flex-wrap justify-center">
        {features.map((item, i) => {
          return (
            <motion.div
              style={{}}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 10px 0px rgba(255,255,255,1)', // Bayangan putih
              }}
              key={i}
              // viewport={{ once: true }}
              className="m-6 py-8"
              id='Maba'
            >
              <div
                className="flex flex-col p-4 h-[300px] w-[300px]  justify-center items-center shadow-xl  shadow-purple-950"
                onClick={() => handleClick(item.title)}
              >
                <div className="w-[200px] h-[200px] flex justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[200px] h-[200px] object-contain"
                  />
                </div>
                <h1 className="text-[16px] lg:text-[20px] font-bold">
                  {item.title}
                </h1>
                <p className="text-center  text-text text-sm  max-w-[400px]">
                  {semesterFilterdesc[i]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSemester;
