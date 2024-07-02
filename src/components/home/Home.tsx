import StartButton from "./StartButton";

const HomeComponent = () => {
  return (
    <div className=" w-full h-screen home bg-no-repeat bg-cover bg-left md:bg-center flex  items-center px-5 lg:px-[72px] ">
      <div className="max-w-[450px] md:max-w-[500px] lg:max-w-[600px] flex flex-col gap-7">
        <h1 className="font-bold text-[16px] lg:text-[20px] text-orange ">
        MAHESPOLOGY
        </h1>
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold">
          Jadi Lo mahasiswa ?
        </h1>
        <p className="text-text text-[14px] lg:text-[18px]">
          Kayaknya perlu deh buat baca artikel yang ada disini kwkwkwkkwkw
        </p>
        <div>
         <StartButton/>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
