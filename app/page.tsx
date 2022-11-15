import React from 'react';
import Image from 'next/image';
import Hero from '../components/Hero/Hero';
import Section1 from '../components/Section1/Section1';
import SectionBreaker from '../components/SectionBreaker/SectionBreaker';
import ourServices1 from '../assets/img/ourServices1.jpg';
import ourServices2 from '../assets/img/ourServices2.jpg';
import ourServices3 from '../assets/img/ourServices3.jpg';
import ourServices4 from '../assets/img/ourServices4.jpg';
import ourServices5 from '../assets/img/ourServices5.jpg';
import ourWork1 from '../assets/img/ourWork1.jpg';
import ourWork2 from '../assets/img/ourWork2.jpg';
import ourWork3 from '../assets/img/ourWork3.jpg';
import testimonial1 from '../assets/img/testimonial1.jpg';
import testimonial2 from '../assets/img/testimonial2.jpg';

interface IourServicesData {
  img: any;
  text: string;
}

interface IourWork {
  img: any;
  text: string;
}

interface IhowWeWork {
  num: string;
  title: string;
  paragraph: string;
}

interface IclientTestimonials {
  img: any;
  message: string;
  clientName: string;
}

const ourServicesData: IourServicesData[] = [
  {
    img: 'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    text: 'Branding',
  },
  {
    img: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    text: 'UI/UX Design',
  },
  {
    img: ourServices3,
    text: 'Website Development',
  },
  {
    img: ourServices4,
    text: 'Data Analysis',
  },
  {
    img: ourServices5,
    text: 'AI & Machine Learning',
  },
];

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

const ourWork: IourWork[] = [
  {
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: 'Real Estate Website Design & Development',
  },
  {
    img: ourWork2,
    text: 'Product Packaging & Shopify Store Development',
  },
  {
    img: ourWork3,
    text: 'Full Stack Website Development for Furniture Store',
  },
];

const clientTestimonials: IclientTestimonials[] = [
  {
    img: testimonial1,
    message:
      "Working with Zedblock has been a pleasure. They've been responsive and thorough, very patient and flexible. I would work with them again in a heartbeat",
    clientName: 'Massimo Vignelli, CEO.',
  },
  {
    img: testimonial2,
    message:
      'They are an awesome company. Good quality, affordable, and great service with custom designs. They provide excellent service with custom designs!',
    clientName: 'Massimo Vignelli, CEO.',
  },
];

const Home = () => {
  return (
    <div className="font-bold font-openSans">
      <Hero />

      <Section1 />

      <SectionBreaker />
      {/* <------ Our Services ------> */}
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
                  // src="https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
                  alt="img"
                />
                <h1 className="text-[#D1E8E2] font-nunito font-medium md:text-2xl text-base md:mx-10 my-2">
                  <span className="text-[#898C8C] md:hidden block">
                    0{i + 1}
                  </span>{' '}
                  {item?.text}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      <SectionBreaker />
      {/* <------ How We Work ------> */}
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

      <SectionBreaker />
      {/* <------ Our Work ------> */}
      <div className="main_container">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[35px] text-2xl text-primary">
            Our Work
          </h1>
        </div>

        <div className="w-full md:pl-[10%] flex flex-col gap-5">
          {ourWork?.map((item: IourWork, i: number) => {
            return (
              <div
                key={i}
                className="flex md:items-center md:flex-row md:even:flex-row-reverse flex-col"
              >
                <Image
                  className="md:w-1/2 h-[40vmax] max-h-[523px] w-full object-cover"
                  width={1920}
                  height={1080}
                  src={item?.img}
                  alt="img"
                />
                <h1 className="text-[#D1E8E2] font-nunito font-medium md:text-2xl text-base md:mx-10 my-2 ">
                  <span className="text-[#898C8C] md:hidden block">
                    0{i + 1}
                  </span>{' '}
                  {item?.text}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      <SectionBreaker />
      {/* <------ Clients’ Testimonials ------> */}
      <div className="main_container">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max font-nunito font-medium md:text-[35px] text-2xl text-primary">
            Clients’ Testimonials
          </h1>
        </div>

        <div className="w-full md:pl-[10%] flex flex-col">
          <div className="md:w-[80%] relative">
            {clientTestimonials?.map((item: IclientTestimonials, i: number) => {
              return (
                <div
                  key={i}
                  className={`flex even:flex-row-reverse relative p-5 md:gap-10 gap-3  ${
                    clientTestimonials?.length - 1 !== i &&
                    'border-dashed border-gray-600 border-b-2'
                  }`}
                >
                  <div className="min-w-[20%]">
                    <Image
                      src={item?.img}
                      alt="testimonialImg"
                      width={128}
                      height={128}
                      className="rounded-full md:h-[6vmax] w-[8vmax] md:w-[6vmax] h-[8vmax] object-cover"
                    />
                  </div>
                  <div className="">
                    <div className="float-right font-openSans md:text-xl text-sm font-normal flex-col gap-4">
                      <h1 className="text-primary">{`"`}</h1>
                      <p>{item?.message}</p>
                      <h1 className="text-primary float-right">{`"`}</h1>
                    </div>
                    <h1 className="font-nunito font-medium md:text-[34px] text-lg text-primary text-center">
                      {item?.clientName}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SectionBreaker />
    </div>
  );
};

export default Home;
