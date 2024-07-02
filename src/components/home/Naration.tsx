import { motion } from 'framer-motion'

export const Naration = () => {
    return (
        <div className='text-center text-white my-40'>

            <motion.div
                style={{

                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
            // viewport={{ once: true }}
            >
                <h1 className='text-3xl font-bold p-4'>Hmm, Coba Pikirin deh...</h1>

            </motion.div>
            <motion.div
                style={{

                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            >
                <p className='text-base p-8 '>Jadi mahasiswa emang bisa jadi tantangan tersendiri, tapi jangan khawatir, itu semua bagian dari perjalanan belajar dan berkembang.
                    Berikut beberapa hal yang bikin kehidupan mahasiswa nggak mudah dan bikin lo tetep waras, tapi juga seru!</p>
            </motion.div>

        </div>
    )
}
