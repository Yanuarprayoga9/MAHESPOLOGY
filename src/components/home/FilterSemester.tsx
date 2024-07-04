import { features } from '../../data/dummy';
import { motion } from 'framer-motion';

const FilterSemester = () => {
  return (
    <div className="  h-auto px-5 lg:px-[72px] flex flex-col gap-5 mt-4">
      <h1 className="font-bold text-[16px] lg:text-[20px] text-orange">
        Halo ngab
      </h1>
      <h1 className="font-bold text-2xl lg:text-[30px]">
        Jadi ada 3 tipe mahasiswa nih,lo yang mana
      </h1>
      <div className="flex  flex-wrap justify-center">
        {features.map((item, i) => {
          return (
            <motion.div
              style={{}}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1 }}
              // viewport={{ once: true }}
            >
              <div
                className="flex flex-col gap-3 justify-center items-center  "
                key={i}
              >
                <motion.div
                  
                  whileHover={{ 
                    scale:1.3
                   }}
                  // viewport={{ once: true }}
                >
                  <div className="w-[300px] h-[300px] flex justify-center">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[200px] h-full object-contain"
                    />
                  </div>
                </motion.div>
                <h1 className="text-[16px] lg:text-[20px] font-bold">
                  {item.title}
                </h1>
                <p className="text-center text-text text-[16px] lg:text-[20px] max-w-[400px]">
                  {item.desc}
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
