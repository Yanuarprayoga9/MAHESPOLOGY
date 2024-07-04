import { motion } from 'framer-motion'
import React from 'react'
import { MateriType } from '../../data/materi'


export const MateriCard = (props:MateriType) => {
    const {title,desc,image,category} = props
  return (
   <motion.div
              style={{}}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1 }}
              whileHover={{ 
                scale:1.1,
                boxShadow: '0px 0px 10px 0px rgba(255,255,255,1)' // Bayangan putih
              }}
              // viewport={{ once: true }}
              className='m-6 py-8'
            >
              <div
                className="flex flex-col p-4 h-[300px] w-[400px]  justify-center items-center shadow-xl  shadow-purple-950"
                
              >
          
                  <div className="w-[200px] h-[200px] flex justify-center">
                    <img
                      src={image}
                      alt=""
                      className="w-[200px] h-[200px] object-contain"
                    />
                  </div>
                <h1 className="text-[16px] lg:text-[20px] font-bold">
                  {title}
                </h1>
                <p className="text-center line-clamp-2 text-text text-sm  max-w-[400px]">
                  {desc}
                </p>
              </div>
            </motion.div>
  )
}
