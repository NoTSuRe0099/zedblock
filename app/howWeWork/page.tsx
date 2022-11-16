import Image from 'next/image';
import React from 'react';
import howWeWorkImg from '../../assets/img/howWeWork.jpg';

interface IhowWeWork {
  num: string;
  title: string;
  paragraph: string;
}

const howWeWork: IhowWeWork[] = [
  {
    num: '01',
    title: 'Understanding the problem',
    paragraph:
      'We identify the functions that the solution should have. Identify the required output. Find a way to produce the required output. Draw a proper relationship between the input and output.',
  },
  {
    num: '02',
    title: 'Research',
    paragraph:
      "We've been designing products and conducting customer research for over two years. Our products are built to solve real world problems, and we work hard to make sure that you love your products as much as we do.",
  },
  {
    num: '03',
    title: 'Ideation',
    paragraph:
      "ideation is the process of creating new products and/or services. The idea for a product typically comes from a specific customer need, but it can also come from someone else's invention or an idea that occurs to you when faced with a problem.",
  },
  {
    num: '04',
    title: 'Design',
    paragraph:
      "We believe that a website is an essential part of a business. And we are here to help you build one that's tailored to your needs, that best represents your business and its purpose, and which helps drive you towards success.",
  },
  {
    num: '05',
    title: 'Develop',
    paragraph:
      "We believe that a website is an essential part of a business. And we are here to help you build one that's tailored to your needs, that best represents your business and its purpose, and which helps drive you towards success.",
  },
  {
    num: '06',
    title: 'Easy Project Handoff',
    paragraph:
      'Our easy final website handoff process is all about making work flow smoothly through your projects, so you can concentrate on designing and building your final website faster.',
  },
];

const page = () => {
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
              src={howWeWorkImg}
              alt="howWeWork"
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
            How Do We Work
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
          <h1 className="w-max ">WE COME WITH</h1>
        </div>
        <h1 className="text-primary md:ml-[26vmax] ml-[20vmax]">SOLUTIONS</h1>
        <div className="flex items-center gap-2">
          <span className="block w-[10%] h-[1px] "></span>
          <h1>EVEN WHEN THERE IS NO HOPE.</h1>
        </div>
      </div>

      <div className="md:my-14 my-7 w-1 h-1 block"></div>

      <div className="main_container">
        <div className="flex items-center gap-2 mb-10">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[35px] text-2xl text-primary">
            How We Work
          </h1>
        </div>

        <div className="w-full md:pl-[17%] flex flex-col gap-5">
          {howWeWork?.map((item: IhowWeWork, i: number) => {
            return (
              <div
                key={i}
                className="flex md:flex-row flex-col gap-5 border-b border-[#3C3C3C] pb-4"
              >
                <div className="flex gap-5 md:w-[40%] w-full md:ml-10">
                  <span className="text-[#616161] md:text-[22px] text-base font-openSans text-[18px] ">
                    {item?.num}
                  </span>
                  <h1 className="font-nunito font-medium md:text-[22px] text-[16px]">
                    {item?.title}
                  </h1>
                </div>
                <p className="md:w-[60%] w-full md:text-center md:text-[15px] text-[13px] font-openSans font-normal text-[#C3C3C3]">
                  {item?.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
