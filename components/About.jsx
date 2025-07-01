import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion, scale } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1,}}
    className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-ovo'>Introduction</motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-ovo'>About Me</motion.h2>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div
        initial={{scale: 0.9, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        transition={{duration: 0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='User' className='rounded-3xl w-full' />
        </motion.div>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo'>
            I am a passionate web developer with a focus on creating dynamic and responsive web applications. My journey in web development began with a curiosity for technology and a desire to build impactful digital experiences.
          </p>

          <motion.ul
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8, delay: .8}}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li whileHover={{scale: 1.01}} key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-whiteText'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-whiteText/90'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
          initial={{y: 20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 1.3, delay: 0.5}}
          className='my-6 text-gray-700 font-ovo dark:text-white'>Tools I use</motion.h4>
          <motion.ul
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.5, delay: 0.6}}
          className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 hover:-translate-y-1 duration-500 rounded-lg cursor-pointer'>
                <Image src={tool} alt="Tool" className='w-5 sm:w-7' />
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About