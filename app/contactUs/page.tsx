import Image from 'next/image';
import React from 'react';
import contactUs from '../../assets/img/contactUs.jpg';
import SectionBreaker from '../../components/SectionBreaker/SectionBreaker';

const page = () => {
  return (
    <div className="">
      <div className="h-screen relative overflow-hidden">
        <div
          className={`bg-gray-800 w-full h-full flex transform transition-all duration-700`}
        >
          <div className="w-full h-full flex-shrink-0 relative ">
            <Image
              className="w-full h-full object-cover"
              src={contactUs}
              alt="contactUs"
            />

            <div className="absolute md:top-[50%] transform md:-translate-y-[50%] bottom-[10%] w-full ">
              <div className="mx-auto max-w-[90%]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-[10%] h-[1px] bg-secondary md:block hidden"></span>
                  <h1 className="md:text-[26px] text-base font-semibold">
                    You can
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-[10%] h-[1px]  md:block hidden"></span>
                  <h1 className="md:text-6xl text-4xl font-nunito font-medium text-primary">
                    Feel The Difference
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 md:bottom-10 bottom-5 w-full md:h-[25%] ">
          <h4 className="font-normal md:text-xl text-base text-[#DDDDDD] md:mt-0 mt-auto main_container md:pl-[10%] pl-[5%]">
            Contact Us
          </h4>

          <div className="bg-gray-600 w-[1px] h-full absolute left-5 bottom-0 md:block hidden">
            <span
              style={{
                height: '33%',
              }}
              className={`w-[1px] bg-primary block  transition-all duration-700 relative`}
            >
              <span
                className=" text-primary absolute -bottom-[10px] rotate-90
 -left-[4.2px] font-light"
              >
                {'>'}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="font-nunito font-medium text-[3vmax] tracking-widest  w-full md:my-10 my-5 main_container">
        <div className="flex items-center gap-2 ">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max ">IF YOU HAVE A</h1>
        </div>
        <h1 className="text-primary md:ml-[26vmax] ml-[20vmax]">
          PROJECT IDEA
        </h1>
        <div className="flex items-center gap-2">
          <span className="block w-[10%] h-[1px] "></span>
          <h1>SUBMIT THE FORM.</h1>
        </div>
      </div>

      <SectionBreaker />
    </div>
  );
};

export default page;
