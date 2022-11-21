import Image from 'next/image';
import React from 'react';
import hireADeveloper from '../../assets/img/hireADeveloper.jpg';
import ShopifyImg from '../../assets/img/Shopify.png';
import ReactImg from '../../assets/img/React svg.png';
import LaravelImg from '../../assets/img/Laravel svg.png';
import javascriptImg from '../../assets/img/javascript.png';
import nodejsImg from '../../assets/img/nodejs.png';
import PHPImg from '../../assets/img/PHP.png';

const page = () => {
  return (
    <div>
      <div className="h-screen relative overflow-hidden">
        <div
          className={`bg-gray-800 w-full h-full flex transform transition-all duration-700`}
        >
          <div className="w-full h-full flex-shrink-0 relative ">
            <Image
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              width={1920}
              height={1080}
              alt="hireADeveloper"
            />

            <div className="absolute md:top-[50%] transform md:-translate-y-[50%] bottom-[10%] w-full ">
              <div className="mx-auto max-w-[90%]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-[10%] h-[1px] bg-secondary md:block hidden"></span>
                  <h1 className="md:text-[26px] text-base font-semibold">
                    We have a team of
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-[10%] h-[1px]  md:block hidden"></span>
                  <h1 className="md:text-6xl text-4xl font-nunito font-medium text-primary">
                    25+ Intelligent Developers
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 md:bottom-10 bottom-5 w-full md:h-[25%] ">
          <h4 className="font-normal md:text-xl text-base text-[#DDDDDD] md:mt-0 mt-auto main_container md:pl-[10%] pl-[5%]">
            Hire A Developer
          </h4>

          <div className="bg-gray-600 w-[1px] h-full absolute left-5 bottom-0 md:block hidden">
            <span
              style={{
                height: '33%',
              }}
              className={`w-[1px] bg-primary block  transition-all duration-700 relative`}
            >
              <span className=" text-primary absolute -bottom-[10px] rotate-90 -left-[4.2px] font-light">
                {'>'}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="font-nunito font-medium text-[3vmax] tracking-widest  w-full md:my-10 my-5 main_container">
        <div className="flex items-center gap-2 ">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max ">OUR TEAM IS</h1>
        </div>
        <h1 className="text-primary md:ml-[26vmax] ml-[20vmax]">THE BEST</h1>
        <div className="flex items-center gap-2">
          <span className="block w-[10%] h-[1px] "></span>
          <h1>IN THE MARKET.</h1>
        </div>
      </div>

      <div className="main_container md:pl-[10%]">
        <p className="font-normal font-openSans text-[#C3C3C3] md:text-[17px] text-[13px] mt-[3%] md:my-10 my-5">
          Our Team of developers is skilled in making e-commerce websites,
          shopify store, front-end web development, various frameworks i.e
          react, react JS, Node, Mongo DB, Javascript, PHP, Laravel etc. We have
          developers who can develop apps for not only android but also ios
          using Java, Kotlin, Swift. They can develop apps for both android &
          ios by single code in flutter and react-native which is efficient.
        </p>

        <div className="flex md:my-20 my-10">
          <div className="w-1/2 max-h-[100px] relative ">
            <Image
              className="md:h-[90px] h-[45px] w-auto"
              src={ShopifyImg}
              alt="shopify"
            />
            <h1 className="font-nunito font-medium md:text-[23px] text-[12px]">
              Shopify Developer
            </h1>
          </div>
          <div className="w-1/2 max-h-[100px] relative ml-[15%]">
            <Image
              className="md:h-[90px] h-[45px] w-auto"
              src={ReactImg}
              alt="ReactImg"
            />
            <h1 className="font-nunito font-medium md:text-[23px] text-[12px]">
              React Developer
            </h1>
          </div>
        </div>

        <div className="flex md:my-20 my-10">
          <div className="w-1/2 max-h-[100px] relative ">
            <Image
              className="md:h-[90px] h-[45px] w-auto"
              src={LaravelImg}
              alt="LaravelImg"
            />
            <h1 className="font-nunito font-medium md:text-[23px] text-[12px]">
              Laravel Developer
            </h1>
          </div>
          <div className="w-1/2 max-h-[100px] relative ml-[15%]">
            <Image
              className="md:h-[90px] h-[45px] w-auto"
              src={javascriptImg}
              alt="javascriptImg"
            />
            <h1 className="font-nunito font-medium md:text-[23px] text-[12px]">
              Javascript Developer
            </h1>
          </div>
        </div>

        <div className="flex md:my-20 my-10">
          <div className="w-1/2 max-h-[100px] relative ">
            <Image
              className="md:h-[90px] h-[45px] w-auto"
              src={nodejsImg}
              alt="nodejsImg"
            />
            <h1 className="font-nunito font-medium md:text-[23px] text-[12px]">
              Node JS Developer
            </h1>
          </div>
          <div className="w-1/2 max-h-[100px] relative ml-[15%]">
            <Image
              className="md:h-[90px] h-[45px] w-auto"
              src={PHPImg}
              alt="PHPImg"
            />
            <h1 className="font-nunito font-medium md:text-[23px] text-[12px]">
              PHP Developer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
