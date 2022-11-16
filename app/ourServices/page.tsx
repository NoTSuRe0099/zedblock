import Image from 'next/image';
import React from 'react';
import beautifulWebsite from '../../assets/img/beautifulWebsite.jpg';
import ourServices3 from '../../assets/img/ourServices3.jpg';
import ourServices4 from '../../assets/img/ourServices4.jpg';
import ourServices5 from '../../assets/img/ourServices5.jpg';
import SectionBreaker from '../../components/SectionBreaker/SectionBreaker';

interface IourServicesData {
  img: any;
  title: string;
  paragraph: string;
}
const ourServicesData: IourServicesData[] = [
  {
    img: 'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    title: 'Branding',
    paragraph:
      'Branding design describes how a brand chooses to visually represent their brand identity to the public. When talking about branding design, it typically refers to key brand elements such as the logo, color scheme, typography, and other design components that makes a brand stand out from competitors.',
  },
  {
    img: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    title: 'UI/UX Design',
    paragraph:
      'UX design focuses on the interaction that a human user has with everyday products and services. The goal of UX design is to make using these products and services, both digital or physical, easy, logical, and fun.UI (User Interface) design is the user-centered approach to designing the aesthetics of a digital product',
  },
  {
    img: ourServices3,
    title: 'Website Development',
    paragraph:
      'Web Dev refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. The basic tools involved in web development are programming languages called HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript.',
  },
  {
    img: ourServices4,
    title: 'Data Analysis',
    paragraph:
      'Data analysis is a process of inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. It  is used in different business, science, and social science domains.',
  },
  {
    img: ourServices5,
    title: 'AI & Machine Learning',
    paragraph:
      'Artificial intelligence generally refers to processes and algorithms that are able to simulate human intelligence, including mimicking cognitive functions such as perception, learning and problem solving. Machine learning and deep learning (DL) are subsets of AI.',
  },
];
const OurServices = () => {
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
                    We design themes that will make
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-[10%] h-[1px]  md:block hidden"></span>
                  <h1 className="md:text-6xl text-4xl font-nunito font-medium text-primary">
                    You Fall For.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 md:bottom-10 bottom-5 w-full md:h-[25%] ">
          <h4 className="font-normal md:text-xl text-base text-[#DDDDDD] md:mt-0 mt-auto main_container md:pl-[10%] pl-[5%]">
            Our Sevices
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
          <h1 className="w-max ">OUR MOTIVE IS TO</h1>
        </div>
        <h1 className="text-primary md:ml-[26vmax] ml-[20vmax]">
          MAKE YOUR BUSINESS
        </h1>
        <div className="flex items-center gap-2">
          <span className="block w-[10%] h-[1px] "></span>
          <h1>GROW MORE.</h1>
        </div>
      </div>

      <div className="main_container">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[35px] text-2xl text-primary">
            Our Services
          </h1>
        </div>

        <div className="w-full md:pl-[10%] flex flex-col gap-5">
          {ourServicesData?.map((item: IourServicesData, i: number) => {
            return (
              <div
                key={i}
                className="flex md:items-center md:flex-row md:even:flex-row-reverse flex-col"
              >
                {/* <Image className="md:w-1/2" src={item?.img} alt={item?.text} /> */}
                <Image
                  className="md:w-1/2 h-[13vmax] max-h-[220px] w-full object-cover"
                  width={1920}
                  height={1080}
                  src={item?.img}
                  alt="img"
                />
                <div
                  className={`md:w-1/2  ${
                    (i + 1) % 2 !== 0 ? 'md:pl-[2.6vw]' : 'md:pr-[2.6vw]'
                  } `}
                >
                  <h1 className="md:text-primary text-[#D1E8E2] font-nunito font-medium md:text-2xl text-base my-2 flex">
                    <span className="text-[#898C8C] md:hidden block mr-2">
                      0{i + 1}
                    </span>
                    {item?.title}
                  </h1>
                  <p className="font-openSans font-normal md:text-base text-sm text-[#C3C3C3]">
                    {item?.paragraph}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SectionBreaker />
    </div>
  );
};

export default OurServices;
