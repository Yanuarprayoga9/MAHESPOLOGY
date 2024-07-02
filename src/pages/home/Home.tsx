import Feature from "../../components/home/FilterSemester";
import HomeComponent from "../../components/home/Home";
import Navbar from "../../components/home/Navbar";
import Penyakit from "../../components/home/Penyakit";
import { motion } from "framer-motion"
import bg from "../../asset/Lovepik_com-400980747-star-decoration.png"
import g from "../../asset/Lovepik_com-611114205-Cosmic Milky Way black hole planet decoration illustration.png"
import { Naration } from "../../components/home/Naration";
const Home = () => {
  return (
    <div className=" transition duration-300 ease-in-out   ">
      {/* <img src={bg} className=" absolute right-0" /> */}
      <motion.div
        style={{ transformOrigin: "top" }}
        whileHover={{scale:1.3}}
        animate={{
          
          rotate: [10,2, 10],
          transition: {
            duration: 3,
            repeat: Infinity,
          },

          
        }}
        className="absolute right-3 bottom-2 w-[800px] "

      >

        <img src={g} className=" absolute right-20 bottom-0 w-80 sm:w-[400px] object-cover object-bottom" />
      </motion.div>


      <motion.div
        style={{ transformOrigin: "top" }}
        animate={{

          rotate: [2, -5, 5],
          transition: {
            duration: 2,
            repeat: Infinity,
          }
        }}
        className="absolute right-0 w-[400px] xl:w-[1000px] sm:w-[700]"
      >
        <div className="absolute left-10 top-20 w-[800px] h-[200px] bg-[#FCFF68] rounded-full md:blur-3xl blur-2xl opacity-20"></div>
        <img className="absolute   object-cover object-bottom" src={bg} />
      </motion.div>

      <Navbar />
      <HomeComponent />
      <Naration/>
      <Feature />
      <Penyakit />
      {/* <Penyakit />
      <Footer /> */}
    </div>
  );
};

export default Home;
