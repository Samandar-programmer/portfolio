import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(workData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = workData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className='w-full px-[12%] py-10 scroll-mt-20' id='work'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center mb-2 text-lg font-ovo'>My Work</motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center text-5xl font-ovo'>Projects</motion.h2>
      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Here are some of the projects I have worked on, showcasing my skills in web development and design.
      </motion.p>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.9}}
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 dark:text-black'>
        {currentItems.map((project, index)=>(
          <motion.a 
          whileHover={{scale: 1.02}}
          key={index} style={{backgroundImage: `url(${project.bgImage.src})`}} href={project.link} target='_blank' className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover:shadow-[2px_2px_0_#000] transition duration-500 border border-gray-300 dark:border-gray-700'>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 p-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-500'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
      {/* <motion.a
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.1, delay: 0.5}} href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-whiteText dark:border-white dark:hover:bg-darkHover'>
        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4 inline-block' />
      </motion.a> */}
      <div className='flex justify-center items-center gap-4 mt-6'>
        <motion.button
          initial={{x: -30,opacity: 0}}
          whileInView={{x: 0,opacity: 1}}
          transition={{duration: 1.1, delay: 0.5}}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className='cursor-pointer'
        >
          <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt='arrow icon' className='rotate-180' />
        </motion.button>

        <motion.span
          initial={{y: 20,opacity: 0}}
          whileInView={{y: 0,opacity: 1}}
          transition={{duration: 1.1, delay: 0.5}}>
          Page {page} of {totalPages}
        </motion.span>

        <motion.button
          initial={{x: 30,opacity: 0}}
          whileInView={{x: 0,opacity: 1}}
          transition={{duration: 1.1, delay: 0.5}}
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className='cursor-pointer'
        >
          <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt='arrow icon' />

        </motion.button>
      </div>
    </motion.div>
  )
}

export default Work