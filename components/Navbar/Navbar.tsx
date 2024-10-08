'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import phoneIcon from '../../assets/img/phoneImg.png';
import { motion } from 'framer-motion';
import { useIsMedium } from '../../hooks/MediaQuery';
import zedBlockLogo from '../../assets/img/Zedblock.png';

const Navbar = () => {
  const isMedium: boolean = !useIsMedium();
  const pathname = usePathname();
  const [isNavbarActive, setIsNavbarActive] = useState<boolean>(false);
  const [isBackgroundActive, setIsBackgroundActive] = useState<boolean>(false);

  useEffect(() => {
    const changeBackgroundColor = () => {
      if (window?.scrollY >= 60) {
        setIsBackgroundActive(true);
      } else {
        setIsBackgroundActive(false);
      }
    };
    window?.addEventListener('scroll', changeBackgroundColor);
  }, []);

  const navbarLinksVariant = isMedium
    ? {
        opened: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.3 },
        },
        closed: {
          x: '-100%',
          opacity: 0,
          transition: { duration: 0.3 },
        },
        init: {
          opacity: 0,
        },
      }
    : {
        opened: {
          x: 0,
        },
        closed: {
          x: 0,
        },
        init: {
          opacity: 1,
        },
      };

  const linksVariant = isMedium
    ? {
        init: {
          x: '-100%',
          opacity: 0.2,
        },
        open: {
          x: 0,
          opacity: 1,
        },
        close: {
          x: '-100%',
          opacity: 0,
        },
      }
    : {
        init: {
          x: 0,
          opacity: 1,
        },
        open: {
          x: 0,
          opacity: 1,
        },
        close: {
          x: 0,
          opacity: 1,
        },
      };

  return (
    <nav
      className={`w-full md:h-[60px] h-[40px] border-b border-gray-400 flex justify-between items-center fixed inset-0 z-50 ${
        isBackgroundActive &&
        'bg-[#00000083] transition-all duration-200 backdrop-blur-md'
      }`}
    >
      <div className="main_container h-full flex justify-between items-center relative ">
        <Link
          href="/"
          onClick={() => {
            isMedium && setIsNavbarActive(false);
          }}
        >
          <Image
            className="md:w-28 w-20 mt-1"
            src={zedBlockLogo}
            alt="zedblock"
          />
        </Link>
        {
          <motion.div
            variants={navbarLinksVariant}
            animate={isNavbarActive ? 'opened' : 'closed'}
            initial={'init'}
            transition={{ easings: 'easeIn', duration: 0.2 }}
            className={`md:flex md:items-center gap-5 md:flex-row md:relative md:inset-0 md:translate-x-0 md:bg-inherit md:w-auto md:h-auto w-full h-screen bg-[#272727] flex-col fixed top-[40px] left-0 py-10 flex`}
          >
            <Link
              className={`md:font-light hover:text-primary transition-all duration-300 md:w-auto md:mx-0 font-medium w-[90%] mx-auto `}
              href="/"
              onClick={() => {
                isMedium && setIsNavbarActive(false);
              }}
            >
              <motion.span
                className={`${pathname === '/' && 'activeLink'} block`}
                variants={linksVariant}
                initial={'init'}
                animate={isNavbarActive ? 'open' : 'close'}
                transition={{
                  delay: isNavbarActive ? 0.2 : 0,
                  easings: 'easeIn',
                }}
              >
                Home
              </motion.span>
            </Link>
            <Link
              className={`md:font-light hover:text-primary transition-all duration-300 md:w-auto md:mx-0 font-medium main_container`}
              href="/ourServices"
              onClick={() => {
                isMedium && setIsNavbarActive(false);
              }}
            >
              <motion.span
                className={`${
                  pathname === '/ourServices' && 'activeLink'
                } block`}
                variants={linksVariant}
                initial={'init'}
                animate={isNavbarActive ? 'open' : 'close'}
                transition={{
                  delay: isNavbarActive ? 0.3 : 0,
                  easings: 'easeIn',
                }}
              >
                Our Services
              </motion.span>
            </Link>
            <Link
              className={`md:font-light hover:text-primary transition-all duration-300 md:w-auto md:mx-0 font-medium main_container`}
              href="/howWeWork"
              onClick={() => {
                isMedium && setIsNavbarActive(false);
              }}
            >
              <motion.span
                className={`${pathname === '/howWeWork' && 'activeLink'} block`}
                variants={linksVariant}
                initial={'init'}
                animate={isNavbarActive ? 'open' : 'close'}
                transition={{
                  delay: isNavbarActive ? 0.4 : 0,
                  easings: 'easeIn',
                }}
              >
                How We Work
              </motion.span>
            </Link>
            <Link
              className={`md:font-light hover:text-primary transition-all duration-300 md:w-auto md:mx-0 font-medium main_container `}
              href="/ourWork"
              onClick={() => {
                isMedium && setIsNavbarActive(false);
              }}
            >
              <motion.span
                className={`${pathname === '/ourWork' && 'activeLink'} block`}
                variants={linksVariant}
                initial={'init'}
                animate={isNavbarActive ? 'open' : 'close'}
                transition={{
                  delay: isNavbarActive ? 0.5 : 0,
                  easings: 'easeIn',
                }}
              >
                Our Work
              </motion.span>
            </Link>
            <Link
              className={`md:font-light hover:text-primary transition-all duration-300 md:w-auto md:mx-0 font-medium main_container `}
              href="/contactUs"
              onClick={() => {
                isMedium && setIsNavbarActive(false);
              }}
            >
              <motion.span
                className={`${pathname === '/contactUs' && 'activeLink'} block`}
                variants={linksVariant}
                initial={'init'}
                animate={isNavbarActive ? 'open' : 'close'}
                transition={{
                  delay: isNavbarActive ? 0.6 : 0,
                  easings: 'easeIn',
                }}
              >
                Contact Us
              </motion.span>
            </Link>
            <Link
              className={`md:font-light hover:text-primary transition-all duration-300 md:w-auto md:mx-0 font-medium main_container`}
              href="/aboutUs"
              onClick={() => {
                isMedium && setIsNavbarActive(false);
              }}
            >
              <motion.span
                className={`${pathname === '/aboutUs' && 'activeLink'} block`}
                variants={linksVariant}
                initial={'init'}
                animate={isNavbarActive ? 'open' : 'close'}
                transition={{
                  delay: isNavbarActive ? 0.7 : 0,
                  easings: 'easeIn',
                }}
              >
                About Us
              </motion.span>
            </Link>
            <span className="bg-gray-400 md:h-[30px] md:w-[1px] md:mx-0 main_container h-[1px]  block" />
            <Link
              onClick={() => {
                isMedium && setIsNavbarActive(false);
              }}
              href="tel:555-666-7777"
              className="font-light flex items-center gap-2 border  border-gray-400 px-2 py-1 rounded w-max md:mx-0 mx-auto"
            >
              <Image src={phoneIcon} alt="phoneImg" /> Call Us
            </Link>
          </motion.div>
        }
        <button
          onClick={() => setIsNavbarActive((prev: boolean) => !prev)}
          className="flex flex-col justify-between md:hidden w-max h-6 p-2 transition-all duration-700"
        >
          <span className="bg-gray-400 h-[1px] w-5 block"></span>
          <motion.span
            animate={{ x: isNavbarActive ? '100%' : 0 }}
            className={`bg-gray-400 h-[1px] w-1/2 block`}
          ></motion.span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
