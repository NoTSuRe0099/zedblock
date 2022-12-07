/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import beautifulWebsite from '../../assets/img/beautifulWebsite.jpg';
import aboutimg2 from '../../assets/img/aboutimg2.jpg';

interface IitemList {
  num: string;
  text: string;
}

const page = () => {
  const itemList: IitemList[] = [
    {
      num: '350+',
      text: 'Projects Delivered',
    },
    {
      num: '300+',
      text: 'Happy Clients',
    },
    {
      num: '98%',
      text: 'Positive Results',
    },
    {
      num: '15+',
      text: 'Team Members',
    },
  ];

  return (
    <div className="">
      <div className="h-screen relative overflow-hidden">
        <div
          // style={{ transform: `translate(-${curruntIndex * 100}%)` }}
          className={`bg-gray-800 w-full h-full flex transform 
      transition-all duration-700`}
        >
          <div className="w-full h-full flex-shrink-0 relative ">
            <Image
              className="w-full h-full object-cover"
              src={beautifulWebsite}
              alt="beautifulWebsite"
            />

            <div className="absolute md:top-[50%] transform md:-translate-y-[50%] bottom-[10%] w-full ">
              <div className="mx-auto max-w-[90%]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-[10%] h-[1px] bg-secondary md:block hidden"></span>
                  <h1 className="md:text-[26px] text-base font-semibold">
                    We turn best ideas into
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-[10%] h-[1px]  md:block hidden"></span>
                  <h1 className="md:text-6xl text-4xl font-nunito font-medium text-primary">
                    Excellent Products
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 md:bottom-10 bottom-5 w-full md:h-[25%]">
          <h4 className="font-normal md:text-xl text-base text-[#DDDDDD] md:mt-0 mt-auto main_container md:pl-[10%] pl-[5%]">
            About Us
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
      <section className="md:mb-[60px] mb-[30px]">
        <div className="font-nunito font-medium text-[3vmax] tracking-widest  w-full md:my-10 my-5 main_container">
          <div className="flex items-center gap-2 ">
            <span className="block w-[10%] h-[1px] bg-gray-600"></span>
            <h1 className="w-max ">WE HELP YOUR</h1>
          </div>
          <h1 className="text-primary md:ml-[26vmax] ml-[20vmax]">BUSSINESS</h1>
          <div className="flex items-center gap-2">
            <span className="block w-[10%] h-[1px] "></span>
            <h1>GROW MORE.</h1>
          </div>
        </div>
        <div className="flex md:pl-[10%] md:gap-[10%] md:flex-row flex-col md:w-[90%] md:mx-auto">
          <div className="bg-[#AB81AB] md:max-w-[30vmax] w-full h-max px-6 py-8">
            <Image
              className="w-full h-[37vmax] max-h-[409px]  object-cover"
              width={1920}
              height={1080}
              src={aboutimg2}
              alt="section1img"
            />
          </div>
          <div className="md:w-full w-[90%] md:mx-0 mx-auto md:my-0 mt-10 flex flex-col gap-[1.5vmax] ">
            {itemList?.map((item: IitemList, i: number) => {
              return (
                <div
                  key={i + item?.num}
                  className="w-full flex gap-[4vmax] border-b border-gray-600"
                >
                  <h1 className="font-nunito font-medium md:text-[30px] lg:text-[36px] text-[18px] text-[#898C8C] mt-auto">
                    {item?.num}
                  </h1>
                  <h1 className="font-openSans font-normal md:text-[20px] lg:text-[26px] text-base mt-4">
                    {item?.text}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="main_container md:mb-16 mb-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[30px] text-2xl text-primary">
            About Us
          </h1>
        </div>
        <div className="w-full md:px-[10%] flex flex-col gap-5 md:text-[35px] text-2xl">
          <p>
            Established with a vision of providing only the best services to our
            clients, drives Zedblock as a consulting agency to success. Sure
            there
          </p>
          <p>
            are 1000s of consulting agencies but what makes us different is that
            :
          </p>
        </div>
      </section>

      <section className="main_container md:mb-10 mb-5">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[25px] text-xl text-[#BFD3CE]">
            1. You talk , we listen
          </h1>
        </div>
        <div className="w-full md:px-[10%] flex flex-col gap-5">
          <p className="md:py-6 py-3 font-openSans font-normal md:text-[15px] text-sm  text-[#C3C3C3]">
            You know your business best and we understand that. As a consulting
            agency , Zedblock focuses on understanding a client's business goals
            . Then we proceed further with a plan of action involving creative
            solutions to help achieve your goals.
          </p>
        </div>
      </section>

      <section className="main_container md:mb-10 mb-5">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[25px] text-xl text-[#BFD3CE]">
            2. Realistic deadlines
          </h1>
        </div>
        <div className="w-full md:px-[10%] flex flex-col gap-5">
          <p className="md:py-6 py-3 font-openSans font-normal md:text-[15px] text-sm  text-[#C3C3C3]">
            We understand time is money in business and we value your time. Our
            team of experts sets realistic deadlines and delivers on time.
          </p>
        </div>
      </section>

      <section className="main_container md:mb-10 mb-5">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[25px] text-xl text-[#BFD3CE]">
            3. Transparency is key
          </h1>
        </div>
        <div className="w-full md:px-[10%] flex flex-col gap-5">
          <p className="md:py-6 py-3 font-openSans font-normal md:text-[15px] text-sm  text-[#C3C3C3]">
            We value integrity and believe in doing business with utmost
            transparency and honesty with our clients. We never sell to you what
            your business does not need , which aligns with our motto of doing
            the best for our customers.
          </p>
        </div>
      </section>

      <section className="main_container md:mb-10 mb-5">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[25px] text-xl text-[#BFD3CE]">
            4. Holistic marketing approach
          </h1>
        </div>
        <div className="w-full md:px-[10%] flex flex-col gap-5">
          <p className="md:py-6 py-3 font-openSans font-normal md:text-[15px] text-sm  text-[#C3C3C3]">
            Too many cooks spoil the broth and the same is true for any
            business. Too much outsourcing is a tedious task which requires
            constant communication . We understand this and thus offer you a
            holistic marketing approach including all internet marketing
            services like SEO , social media services , PPC management , email
            marketing , content marketing , web marketing .
          </p>

          <p className="font-openSans font-normal md:text-[15px] text-sm text-[#C3C3C3]">
            What started off as a one man company has bloomed into a top
            consulting agency . Zedblock now brings to you uniquely curated
            solutions that are offered by a close-knit team of experts from
            every segment of digital marketing & data analytics. Your growth
            marks our success and we plan to grow together.
          </p>

          <p className="font-openSans font-normal md:text-[15px] text-sm text-[#C3C3C3]">
            Sold already ? Then you're just a click from getting started on your
            project!
          </p>
        </div>
      </section>

      <section className="main_container md:mb-10 mb-5">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[25px] text-xl text-[#BFD3CE]">
            5. Our Vision
          </h1>
        </div>
        <div className="w-full md:px-[10%] flex flex-col">
          <h1>Our team at the Zedblock is founded on 3 things;</h1>
          <br />

          <h1 className="underline text-[#C3C3C3] font-semibold">Integrity</h1>
          <h1 className="underline text-[#C3C3C3] font-semibold">Innovation</h1>
          <h1 className="underline text-[#C3C3C3] font-semibold">Dedication</h1>
          <br />
          <p className="font-openSans font-normal md:text-[15px] text-sm text-[#C3C3C3]">
            We value our clients and strive hard to exceed client expectations.
            We treat your business as if it's our own and work to build a strong
            relationship with you. Our team has SEO consultants and members to
            assist your business in PPC management, Email marketing & social
            media marketing, data analytics, business analytics. A team that
            works relentlessly to accomplish business goals is what makes
            Zedblock, the perfect small business consulting agency.
          </p>
        </div>
      </section>

      <section className="main_container md:mb-10 mb-5">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[25px] text-xl text-[#BFD3CE]">
            6. Our Mission
          </h1>
        </div>
        <div className="w-full md:px-[10%] flex flex-col gap-5">
          <p className="md:py-6 py-3 font-openSans font-normal md:text-[15px] text-sm  text-[#C3C3C3]">
            Zedblock creates a streamlined process integrating modern day
            technology to aid our clients and fulfill their business goals. We
            make a plan of action considering the big picture and delivering
            high quality solutions . We are ROI centric and provide personalized
            solutions to meet your requirements .
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
