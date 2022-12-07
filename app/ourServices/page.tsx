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
    title: 'Brand development',
    paragraph:
      'A brand is like an individual- meant to be unique. And what better way to convey your uniqueness than honest storytelling? Zedblock helps brands express their story by our multidisciplinary skill sets across brand strategy, design and quality content writing.',
  },
  {
    img: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    title: 'Strategy and solution',
    paragraph:
      "Initially we understand the requirements and expectations of our clients for a particular project. Then it's time to put your vision into action with our expertise in strategizing. Every brand is unique and so are a brand's problems. We understand this and with industry experts deliver curated solutions that help your brand bloom.",
  },
  {
    img: ourServices3,
    title: 'Market and competitor analysis',
    paragraph:
      'Research is at the core of establishing a solid strategy for brand and communication. We dig a little deeper to understand our clients, the marketplace , the competitors  and pull together a market research report.',
  },
  {
    img: ourServices4,
    title: 'Customer acquisition and conversion',
    paragraph:
      '  A business needs an effective sales funnel for lead generation. We know just how important a sales funnel is for any business, thus we deliver lead acquisition and  conversion strategies that work best for your business.Our plan of action includes understanding the end goal for your business and accordingly aligning lead generation campaign involving digital sales and ROI  measurement.',
  },
  {
    img: ourServices5,
    title: 'Data analytics',
    paragraph:
      'At Zedblock our team of data scientists digs deep into the digital data collected from websites, social media, etc. Our team believes that simplifying complex measurements drives a digital marketing strategy. The goal is to understand customer behaviour for better acquisition techniques. Our team helps brands merge performance analytics and marketing data to obtain ROI driven results, adapt strategy and overall helps them better compete in the market.',
  },
  {
    img: ourServices5,
    title: 'Technical support',
    paragraph:
      'The world is going digital thus brands need a solid foundation for establishing themselves digitally. This is brought to action by the technical support at Zedblock. Our tech team provides complete tech support including website development, SEO, SEM, SMO and SMM.The team of tech experts at Zedblock design websites that are responsive, SEO compliant and most importantly align with your brand guidelines.SEO is a crucial aspect of any digital marketing strategy.A successful SEO strategy requires solid backend support which is given by our tech team. Email marketing is one of the most important parts of a digital marketing campaign.Smooth running and testing of email marketing campaigns is ensured by our tech team',
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
