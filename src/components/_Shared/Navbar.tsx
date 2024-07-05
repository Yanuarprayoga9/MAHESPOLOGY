import { useEffect, useState } from "react";
import { navLink } from "../../data/dummy";
import  logo from "../../assets/logo_full_white.png"


const Navbar = () => {
  

  // const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return (
    <div
      className={`${
        isScroll ? "bg-purple-950  h-[60px] lg:-top-[60px]" : " h-[80px]"
      } lg:px-[72px] px-5   w-full  z-50 fixed   transition-all duration-300 ease-in-out  flex justify-between items-center`}
    >
      <div className="w-[103px] h-[25px] cursor-pointer" onClick={()=>window.location.href='/'} >
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
      <ul className="">
        <li className="flex gap-2 sm:gap-2">
          {navLink.map((item) => {
            console.log({item})
            return (
              <a
                key={item.id}
                href={item.id}
                id={item.id}
                className={`${
                  isScroll ? "text-[14px]" : "text-[18px]"
                } text-sm sm:text-base hover:text-orange transition duration-300 ease-in-out hover:cursor-pointer`}
              >
                {item.name}
              </a>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
