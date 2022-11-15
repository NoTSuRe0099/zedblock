import React from 'react';

const SectionBreaker = () => {
  return (
    <div className="flex gap-2 main_container h-max my-10 items-center">
      <div className="w-full h-[1px] bg-secondary"></div>
      <span className="w-[1px] md:h-7 h-5 bg-secondary block"></span>
      <div className="w-full h-[1px] bg-secondary"></div>
    </div>
  );
};

export default SectionBreaker;
