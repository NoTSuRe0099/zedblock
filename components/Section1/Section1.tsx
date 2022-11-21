import Image from 'next/image';
import React from 'react';
import section1 from '../../assets/img/section1.jpg';
import eclipseBtn from '../../assets/img/eclipseBtn.png';

interface IitemList {
  num: string;
  text: string;
}
const Section1 = () => {
  const itemList: IitemList[] = [
    {
      num: '01',
      text: 'Website Design',
    },
    {
      num: '02',
      text: 'Website Development',
    },
    {
      num: '03',
      text: 'Test Your Website',
    },
    {
      num: '04',
      text: 'Finally, Sell Online.',
    },
  ];
  return (
    <section className="">
      <div className="font-nunito font-medium text-[3vmax] tracking-widest  w-full md:my-10 my-5 main_container">
        <div className="flex items-center gap-2 ">
          <span className="block w-[10%] h-[1px] bg-gray-600"></span>
          <h1 className="w-max ">GROWING YOUR</h1>
        </div>
        <h1 className="text-primary md:ml-[26vmax] ml-[20vmax]">BUSSINESS</h1>
        <div className="flex items-center gap-2">
          <span className="block w-[10%] h-[1px] "></span>
          <h1>MADE EASY</h1>
        </div>
      </div>
      <div className="flex md:pl-[10%] md:gap-[10%] md:flex-row flex-col md:w-[90%] md:mx-auto">
        <div className="bg-[#AB81AB] md:max-w-[30vmax] w-full h-max px-6 py-8">
          <Image
            className="w-full h-[37vmax] max-h-[409px]  object-cover"
            width={1920}
            height={1080}
            src={section1}
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

          <button className="w-max relative group md:mt-auto mt-5 md:scale-100 scale-75 duration-700">
            <Image src={eclipseBtn} alt="eclipseBtn" />
            <h3 className="font-nunito font-semibold text-[18px] absolute top-1/2 transform -translate-y-1/2 w-max left-1/2 text-primary group-hover:left-[50%] flex items-center  duration-700">
              <span className="hidden group-hover:block w-5 h-[1px] bg-primary "></span>
              <span className="hidden group-hover:block mr-2 "> {'>'} </span>
              Get Started
            </h3>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
