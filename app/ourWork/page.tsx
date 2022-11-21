'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ourWorkHero from '../../assets/img/ourWorkHero.jpg';
import ourWork1 from '../../assets/img/ourWork1.jpg';
import ourWork2 from '../../assets/img/ourWork2.jpg';
import ourWork3 from '../../assets/img/ourWork3.jpg';
import SectionBreaker from '../../components/SectionBreaker/SectionBreaker';

interface IourWork {
  img: any;
  title: string;
  paragraph1: string;
  paragraph2: string;
}

const ourWork: IourWork[] = [
  {
    img: ourWork1,
    title: 'Real Estate Website Design & Development',
    paragraph1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ut ultricies sit et porttitor. Arcu quam massa, fermentum sit adipiscing mattis massa. Sit cras consectetur et varius tortor, aliquam facilisi orci. Tristique vitae lobortis libero in in proin. Accumsan, elit libero, purus ipsum laoreet. Malesuada nullam feugiat non volutpat eu. Vitae ipsum velit vestibulum cursus nulla. Tempus suspendisse euismod sagittis sed leo quis. Vel neque, justo egestas sit facilisis. Sit ultrices mauris ornare dolor nulla consequat. Vitae eget faucibus quam sem amet ipsum dignissim. In laoreet vivamus at turpis nulla pretium in. Nibh consectetur massa, nec quam. Porta ut maecenas accumsan congue neque elit, laoreet. Nunc habitasse amet laoreet sed tincidunt ullamcorper commodo vulputate. Odio non venenatis, egestas arcu sed morbi neque facilisi leo. Maecenas non in.',
    paragraph2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada eget diam auctor nunc sapien massa, etiam malesuada mauris. In quisque amet malesuada velit vitae tellus quis dictumst diam. Id pellentesque feugiat nam tempor quis nam luctus orci. Urna viverra sociis aliquet vivamus venenatis elementum sem cras. Mollis sapien, ultrices urna lectus integer ultricies morbi purus. Id nulla ut eu at hendrerit. Hendrerit amet elit, ornare cursus in. Nisl ac non feugiat et quis neque sit enim ligula. Faucibus viverra tempor, morbi amet sit at. Morbi eget vestibulum, egestas diam.',
  },
  {
    img: ourWork2,
    title: 'Product Packaging & Shopify Store Development',
    paragraph1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ut ultricies sit et porttitor. Arcu quam massa, fermentum sit adipiscing mattis massa. Sit cras consectetur et varius tortor, aliquam facilisi orci. Tristique vitae lobortis libero in in proin. Accumsan, elit libero, purus ipsum laoreet. Malesuada nullam feugiat non volutpat eu. Vitae ipsum velit vestibulum cursus nulla. Tempus suspendisse euismod sagittis sed leo quis. Vel neque, justo egestas sit facilisis. Sit ultrices mauris ornare dolor nulla consequat. Vitae eget faucibus quam sem amet ipsum dignissim. In laoreet vivamus at turpis nulla pretium in. Nibh consectetur massa, nec quam. Porta ut maecenas accumsan congue neque elit, laoreet. Nunc habitasse amet laoreet sed tincidunt ullamcorper commodo vulputate. Odio non venenatis, egestas arcu sed morbi neque facilisi leo. Maecenas non in.',
    paragraph2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada eget diam auctor nunc sapien massa, etiam malesuada mauris. In quisque amet malesuada velit vitae tellus quis dictumst diam. Id pellentesque feugiat nam tempor quis nam luctus orci. Urna viverra sociis aliquet vivamus venenatis elementum sem cras. Mollis sapien, ultrices urna lectus integer ultricies morbi purus. Id nulla ut eu at hendrerit. Hendrerit amet elit, ornare cursus in. Nisl ac non feugiat et quis neque sit enim ligula. Faucibus viverra tempor, morbi amet sit at. Morbi eget vestibulum, egestas diam.',
  },
  {
    img: ourWork3,
    title: 'Full Stack Website Development for Furniture Store',
    paragraph1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ut ultricies sit et porttitor. Arcu quam massa, fermentum sit adipiscing mattis massa. Sit cras consectetur et varius tortor, aliquam facilisi orci. Tristique vitae lobortis libero in in proin. Accumsan, elit libero, purus ipsum laoreet. Malesuada nullam feugiat non volutpat eu. Vitae ipsum velit vestibulum cursus nulla. Tempus suspendisse euismod sagittis sed leo quis. Vel neque, justo egestas sit facilisis. Sit ultrices mauris ornare dolor nulla consequat. Vitae eget faucibus quam sem amet ipsum dignissim. In laoreet vivamus at turpis nulla pretium in. Nibh consectetur massa, nec quam. Porta ut maecenas accumsan congue neque elit, laoreet. Nunc habitasse amet laoreet sed tincidunt ullamcorper commodo vulputate. Odio non venenatis, egestas arcu sed morbi neque facilisi leo. Maecenas non in.',
    paragraph2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada eget diam auctor nunc sapien massa, etiam malesuada mauris. In quisque amet malesuada velit vitae tellus quis dictumst diam. Id pellentesque feugiat nam tempor quis nam luctus orci. Urna viverra sociis aliquet vivamus venenatis elementum sem cras. Mollis sapien, ultrices urna lectus integer ultricies morbi purus. Id nulla ut eu at hendrerit. Hendrerit amet elit, ornare cursus in. Nisl ac non feugiat et quis neque sit enim ligula. Faucibus viverra tempor, morbi amet sit at. Morbi eget vestibulum, egestas diam.',
  },
];

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurruntIndex] = useState<number>(0);

  return (
    <div>
      <div className="h-screen relative overflow-hidden">
        <div
          className={`bg-gray-800 w-full h-full flex transform transition-all duration-700`}
        >
          <div className="w-full h-full flex-shrink-0 relative ">
            <Image
              className="w-full h-full object-cover"
              src={ourWorkHero}
              alt="ourWorkHero"
            />

            <div className="absolute md:top-[50%] transform md:-translate-y-[50%] bottom-[10%] w-full ">
              <div className="mx-auto max-w-[90%]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-[10%] h-[1px] bg-secondary md:block hidden"></span>
                  <h1 className="md:text-[26px] text-base font-semibold">
                    Your
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-[10%] h-[1px]  md:block hidden"></span>
                  <h1 className="md:text-6xl text-4xl font-nunito font-medium text-primary">
                    #1 Website Agency
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 md:bottom-10 bottom-5 w-full md:h-[25%] ">
          <h4 className="font-normal md:text-xl text-base text-[#DDDDDD] md:mt-0 mt-auto main_container md:pl-[10%] pl-[5%]">
            Our Work
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
          <h1 className="w-max ">WE ARE</h1>
        </div>
        <h1 className="text-primary md:ml-[26vmax] ml-[20vmax]">
          BEST AT WHAT WE DO.
        </h1>
        <div className="flex items-center gap-2">
          <span className="block w-[10%] h-[1px] "></span>
          <h1>SEE YOURSELF.</h1>
        </div>
      </div>

      <div className="main_container md:pl-[10%]">
        <div className="md:mb-6 mb-3">
          <div className="flex md:flex-row flex-col">
            <Image
              className="md:w-1/2 h-[40vmax] max-h-[523px] w-full object-cover"
              width={1920}
              height={1080}
              src={ourWork[currentIndex]?.img}
              alt="ourWork1"
            />
            <div className="md:ml-[3%]">
              <h1 className="font-medium font-nunito md:text-2xl text-base text-primary md:mb-12 mb-6">
                {ourWork[currentIndex]?.title}
              </h1>
              <p className="font-normal font-openSans text-[#C3C3C3] md:text-[17px] text-[13px]">
                {ourWork[currentIndex]?.paragraph1}
              </p>
            </div>
          </div>
          <p className="font-normal font-openSans text-[#C3C3C3] md:text-[17px] text-[13px] mt-[3%]">
            {ourWork[currentIndex]?.paragraph2}
          </p>
        </div>
      </div>

      <div className="main_container flex items-center justify-center gap-2 md:my-4 my-2">
        {ourWork?.map((item: any, i: number) => {
          return (
            <div
              key={i}
              className="md:w-[2px] w-[1px] md:h-[2px] h-[1px] border-2 border-primary  rounded-full md:p-2 p-1 relative"
              onClick={() => setCurruntIndex(i)}
            >
              {i === currentIndex && (
                <span className="md:w-2 w-1 md:h-2 h-1 bg-primary block rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              )}
            </div>
          );
        })}
      </div>

      <SectionBreaker />
    </div>
  );
};

export default page;
