import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:border-b-[0.5px] border-b-white' : ''}`}>
        <a href="#home">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt='' />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? "" : "bg-white/[var(--bg-opacity)] [--bg-opacity:50%] dark:border dark:border-darkText/50 dark:bg-transparent"} dark:text-white`}>
          <li><a href="#home" className='font-ovo'>Home</a></li>
          <li><a href="#about" className='font-ovo'>About Me</a></li>
          <li><a href="#services" className='font-ovo'>Services</a></li>
          <li><a href="#work" className='font-ovo'>My Work</a></li>
          <li><a href="#contact" className='font-ovo'>Contact me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50 dark:text-white'>Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' /></a>
          <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 -right-64 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          <li><a href="#home" onClick={closeMenu} className='font-ovo'>Home</a></li>
          <li><a href="#about" onClick={closeMenu} className='font-ovo'>About Me</a></li>
          <li><a href="#services" onClick={closeMenu} className='font-ovo'>Services</a></li>
          <li><a href="#work" onClick={closeMenu} className='font-ovo'>My Work</a></li>
          <li><a href="#contact" onClick={closeMenu} className='font-ovo'>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar