import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = ({isDarkMode}) => {
  const truncate = (input) =>
    input?.length > 100 ? `${input.substring(0, 90)}...` : input;
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className='w-full px-[12%] py-10 scroll-mt-20' id='services'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.3, delay: 0.5}}
      className='text-center mb-2 text-lg font-ovo'>What I offer</motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-ovo'>My Services</motion.h2>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.7, delay: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I specialize in creating high-quality, responsive websites and web applications that are tailored to meet the unique needs of each client. My services include:
      </motion.p>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.9, delay: 0.6}}
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 '>
        {serviceData.map(({icon, iconDark, title, description, link}, index)=> (
          <motion.div
          whileHover={{scale: 1.02}}
          key={index} className='flex flex-col items-center justify-center px-8 py-12 border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white dark:border-white'>
            <Image src={isDarkMode ? iconDark : icon} alt="" className='w-10' />
            <h3 className='text-center text-lg my-4 text-gray-700 dark:text-white truncate'>{title}</h3>
            <p className='text-gray-600 text-sm leading-5 dark:text-white/90'>{truncate(description)}</p>
            <a href="link" className='flex items-center gap-2 text-sm mt-5'>
              Read more <Image src={assets.right_arrow} alt='' className='w-4' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services