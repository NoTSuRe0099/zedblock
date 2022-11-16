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
            {itemList.map((item: IitemList, i: number) => {
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
          <h1 className="w-max font-nunito font-medium md:text-[35px] text-2xl text-primary">
            Our Services
          </h1>
        </div>
        <div className="w-full md:px-[10%] flex flex-col gap-5">
          <p className="md:py-6 py-3 font-openSans font-normal md:text-[15px] text-sm text-center text-[#C3C3C3]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
            scelerisque cursus aliquam pellentesque porta ornare consectetur
            etiam ultrices. Sed luctus mauris eu a tellus tortor non egestas
            diam. Tristique nunc viverra turpis id nibh et sit. Sed sit praesent
            volutpat cras lorem turpis ut sit enim. Eget nulla purus, sit in sed
            enim augue risus malesuada.
          </p>
          <p className="py-6 font-openSans font-normal md:text-[15px] text-sm text-center text-[#C3C3C3]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mattis
            convallis aenean viverra at viverra. Gravida augue amet pulvinar
            sed. Blandit nibh imperdiet purus nunc adipiscing. Eu a ultricies
            sem dignissim sit aliquam vivamus molestie volutpat. Enim tincidunt
            eu bibendum ut. Eleifend tristique amet amet adipiscing et at
            aliquam velit. Hendrerit ultricies diam sit placerat pellentesque
            vitae. Feugiat blandit viverra feugiat pulvinar. Vel porttitor at
            sed gravida morbi ullamcorper in senectus proin. Iaculis dolor
            blandit amet blandit nisi in maecenas. Lorem cursus etiam maecenas
            egestas lobortis fermentum, tincidunt posuere. Tristique nisl non
            vel cursus ornare. A non a purus nunc habitasse ultricies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
