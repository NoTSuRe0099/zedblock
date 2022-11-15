'use client';
import Image from 'next/image';
import beautifulWebsite from '../../assets/img/beautifulWebsite.jpg';
import buildingFuture from '../../assets/img/buildingFuture.jpg';
import analysingData from '../../assets/img/analysingData.jpg';
import previousBtn from '../../assets/img/previousButton.png';
import nextBtn from '../../assets/img/forwardButton.png';
import { useEffect, useState } from 'react';

interface IHeroData {
  title: string;
  subTitle: string;
  countText: string;
  img: any;
}

const HeroData: IHeroData[] = [
  {
    title: 'Beautiful Website',
    img: beautifulWebsite,
    subTitle: 'For the new Digital World, We help you in',
    countText: '01/Web Development',
  },
  {
    title: 'Building Future',
    img: buildingFuture,
    subTitle: 'For the new Digital World, We help you in',
    countText: '02/Artificial Intelligence',
  },
  {
    title: 'Analysing Data',
    img: analysingData,
    subTitle: 'For the new Digital World, We help you in',
    countText: '03/Data Analysis',
  },
];

const Hero = () => {
  const [curruntIndex, setCurrentIndex] = useState(0);

  const [isHover, setIsHover] = useState<boolean>(false);
  const nextImg = () => {
    if (curruntIndex < HeroData?.length - 1) {
      setCurrentIndex(curruntIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const PrevImg = () => {
    if (curruntIndex > 0) {
      setCurrentIndex(curruntIndex - 1);
    } else {
      setCurrentIndex(HeroData?.length - 1);
    }
  };

  useEffect(() => {
    let imageInterval: any;

    if (HeroData?.length > 1) {
      let counter = 1;
      if (!isHover) {
        imageInterval = setInterval(() => {
          if (HeroData?.length > counter) {
            counter += 1;
          } else if (HeroData?.length === counter) {
            counter = 1;
          }
          // console.log(counter - 1);
          setCurrentIndex(counter - 1);
        }, 3000);
      }
    }
    return () => clearInterval(imageInterval);
  }, [isHover]);

  return (
    <div className="h-screen relative overflow-hidden">
      <div
        style={{ transform: `translate(-${curruntIndex * 100}%)` }}
        className={`bg-gray-800 w-full h-full flex transform 
      transition-all duration-700`}
      >
        {HeroData?.map((item: IHeroData, i: number) => {
          return (
            <div key={i} className="w-full h-full flex-shrink-0 relative ">
              <Image
                className="w-full h-full object-cover"
                src={item?.img}
                alt="beautifulWebsite"
              />

              <div className="absolute md:top-[50%] transform md:-translate-y-[50%] bottom-[15%] w-full ">
                <div className="mx-auto max-w-[90%]">
                  <h3 className="md:text-[26px] text-base font-semibold">
                    {item?.subTitle}
                  </h3>
                  <h1 className="md:text-6xl text-4xl font-nunito font-medium">
                    {item?.title}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute left-0 md:bottom-10 bottom-5 w-full md:h-[25%] h-[10%] ">
        <div className="mx-auto max-w-[90%] flex md:flex-col flex-row justify-between h-full ">
          <h4 className="font-normal md:text-xl text-base text-[#DDDDDD] md:mt-0 mt-auto">
            {HeroData[curruntIndex]?.countText}
          </h4>
          <div className="flex items-center gap-2 md:mt-0 mt-auto">
            <button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              type="button"
              onClick={PrevImg}
            >
              <Image src={previousBtn} alt="prev" />
            </button>
            <div className="bg-gray-600 md:w-[110px] h-[1px] w-1/2 relative flex transition-all ">
              {HeroData?.map((item: IHeroData, i: number) => {
                return (
                  <span
                    key={i}
                    className={`w-1/3 h-[1px] bg-[#FF932E] block transition-all ${
                      i === curruntIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                );
              })}
            </div>

            <button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              type="button"
              onClick={nextImg}
            >
              <Image src={nextBtn} alt="next" />
            </button>
          </div>
        </div>

        <div className="bg-gray-600 w-[1px] h-full absolute left-5 bottom-0 md:block hidden">
          <span
            style={{
              height: `${(curruntIndex + 1) * 33}%`,
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
  );
};

export default Hero;
