import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7cadc370-63fd-473e-9017-c308337cddf8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className='w-full px-[12%] py-10' id='contact'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.3, delay: 0.5}}
      className='text-center mb-2 text-lg font-ovo'>Contact with me</motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-ovo'>Get in touch</motion.h2>
      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        If you have any questions or would like to discuss a project, feel free to reach out. I'm always open to new opportunities and collaborations.
      </motion.p>
      <motion.form
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.9, delay: 0.5}}
      className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 mt-10'>
          <motion.input
          initial={{x: -50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.1}}
          type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-whiteText' name='name' />
          <motion.input
          initial={{x: 50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.2}}
          type="text" placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-whiteText' name='email' />
        </div>
        <motion.textarea
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1.3}}
        rows="6" placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'></motion.textarea>
        <motion.button
        whileHover={{scale: 1.02}}
        transition={{duration: 0.3}}
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' type='submit'>Submit Now <Image src={assets.right_arrow_white} alt="right arrow" className='w-4' /> </motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact