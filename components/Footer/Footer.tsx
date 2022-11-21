import Link from 'next/link';
import React from 'react';
import SectionBreaker from '../SectionBreaker/SectionBreaker';
import zedBlockLogo from '../../assets/img/Zedblock.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className="main_container flex md:flex-row flex-col-reverse">
        <div className="md:w-[50%] w-full">
          <h1 className="md:mb-7 mb-4 font-nunito font-medium md:text-4xl text-2xl text-primary">
            Schedle A Virtual Meet
          </h1>

          <div className="md:mb-6 mb-3">
            <h1 className="md:mb-4 mb-2 font-nunito font-medium md:text-[18px] text-sm text-primary">
              Zedblock Web Solutions
            </h1>
            <h4 className="font-normal md:text-[17px] text-[14px]">
              Sec 48, Gurgaon, India.
            </h4>
          </div>

          <div className="md:mb-6 mb-3">
            <h1 className="md:mb-4 mb-2 font-nunito font-medium md:text-[18px] text-sm text-primary">
              Phone Number
            </h1>
            <h4 className="font-normal md:text-[17px] text-[14px]">
              +91-8989899999
            </h4>
          </div>

          <div className="md:mb-10 mb-5">
            <h1 className="md:mb-4 mb-2 font-nunito font-medium md:text-[18px] text-sm text-primary">
              E-mail
            </h1>
            <h4 className="font-normal md:text-[17px] text-[14px]">
              Loremipsum@gmail.com
            </h4>
          </div>

          <div>
            <h1 className="md:mb-4 mb-2 font-nunito font-medium md:text-[18px] text-sm text-primary">
              Useful Links
            </h1>

            <div className="flex justify-between md:justify-start">
              <div className="flex flex-col md:mr-6">
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px] mb-3"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px] mb-3"
                >
                  How We Do
                </Link>
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px] mb-3"
                >
                  Branding
                </Link>
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px]"
                >
                  AI & ML
                </Link>
              </div>
              <div className="flex flex-col md:mr-6">
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px] mb-3"
                >
                  Who We Are
                </Link>
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px] mb-3"
                >
                  Our Work
                </Link>
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px] mb-3"
                >
                  UI/UX Design
                </Link>
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px]"
                >
                  Data Analysis
                </Link>
              </div>
              <div className="flex flex-col md:mr-6">
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px] mb-3"
                >
                  What We Do
                </Link>
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px] mb-3"
                >
                  Design
                </Link>
                <Link
                  href="/hireADeveloper"
                  className="font-normal md:text-[17px] text-[14px] mb-3"
                >
                  Hire A Developer
                </Link>
                <Link
                  href="/"
                  className="font-normal md:text-[17px] text-[14px] font-openSans"
                >
                  Web Development
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden block">
          <SectionBreaker />
        </div>

        <form className="md:w-[50%] w-full md:pl-[10%]">
          <h1 className="md:mb-7 mb-4 font-nunito font-medium md:text-4xl text-2xl text-primary">
            Contact Us
          </h1>
          <input
            type="text"
            placeholder="Name"
            className="border-b border-secondary bg-transparent outline-none w-full p-2 pl-0"
          />
          <input
            type="email"
            placeholder="E Mail"
            className="border-b border-secondary bg-transparent outline-none w-full p-2 pl-0"
          />{' '}
          <input
            type="text"
            placeholder="Contact Number"
            className="border-b border-secondary bg-transparent outline-none w-full p-2 pl-0"
          />{' '}
          <input
            type="text"
            placeholder="Service Category"
            className="border-b border-secondary bg-transparent outline-none w-full p-2 pl-0"
          />
          <textarea
            placeholder="Your Message, Query or Suggestion"
            className="border-b border-secondary bg-transparent outline-none w-full p-2 pl-0 h-20"
          ></textarea>
          <button className="float-right md:mt-12 mt-6 md:py-[14px] py-2 md:px-[47px] px-6 border-2 border-primary text-primary font-nunito font-medium md:text-xl text-base rounded-xl relative">
            <span className="absolute -top-[2px] left-1/2 transform -translate-x-1/2 block bg-[#272727] h-[2px] w-[50%]"></span>
            Submit Now
          </button>
        </form>
      </div>

      <div className="md:h-[70px] h-8 w-full border-t border-b border-secondary mt-9">
        <div className="flex items-center justify-between main_container h-full">
          <Image
            className="md:w-28 w-20 mt-2"
            src={zedBlockLogo}
            alt="zedblock"
          />
          <h4 className="font-nunito font-normal md:text-sm text-[8px] text-[#E6E6E6]">
            © Copyright 2022.
          </h4>
          <Link
            className="font-nunito font-normal md:text-sm text-[8px] text-[#E6E6E6] b"
            href="/"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
