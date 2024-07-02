import { features } from "../../data/dummy";
const FilterSemester = () => {
  return (
    <div className=" bg-blue-800 h-auto px-5 lg:px-[72px] flex flex-col gap-5 mt-4">
      <h1 className="font-bold text-[16px] lg:text-[20px] text-orange">
        Halo ngab
      </h1>
      <h1 className="font-bold text-2xl lg:text-[30px]">
        Jadi ada 3 tipe mahasiswa nih,lo yang mana
      </h1>
      <div className="flex  flex-wrap ">
        {features.map((item, i) => {
          return (
            <div
              className="flex flex-col gap-3 justify-center items-center col-span-1 "
              key={i}
            >
              <div className="w-[300px] h-[300px] flex justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-[200px] h-full object-contain"
                />
              </div>
              <h1 className="text-[16px] lg:text-[20px] font-bold">
                {item.title}
              </h1>
              <p className="text-center text-text text-[16px] lg:text-[20px] max-w-[400px]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSemester;
