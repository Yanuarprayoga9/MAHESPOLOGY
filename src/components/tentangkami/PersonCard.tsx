import { motion } from 'framer-motion';
import { MahasiswaType } from '../../data/materi';



export const PersonCard = (props: MahasiswaType) => {
    const { nama, as, image } = props;
    return (
        <>
            <motion.div

                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 0px 10px 0px rgba(255,255,255,1)',
                }}
                // viewport={{ once: true }}
                className=" m-2 rounded-2xl"
            >
                <div className="flex relative flex-col w-[300px] sm:w-[400px]   justify-center items-center shadow-xl  shadow-purple-950">
                    <div className="w-full h-6/6 flex ">
                        <img
                            src={image}
                            alt=""
                            className=" rounded-xl w-[300px] sm:w-[400px] h-[17rem] object-cover"
                        />
                    </div>
                    <div className='absolute bottom-1 z-10'>
                        <h1 className=" shadow-md  text-xl lg:text-[20px] font-bold">{nama}</h1>
                        <p className="   line-clamp-2 text-text text-sm  max-w-[400px]">
                            {as}
                        </p>
                    </div>
                    <div className='absolute bottom-0 bg-slate-950 opacity-60  rounded-md h-16 w-3/4 mx-auto'></div>
                </div>
            </motion.div>

        </>
    );
};
