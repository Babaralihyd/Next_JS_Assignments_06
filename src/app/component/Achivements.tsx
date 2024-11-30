import React from 'react';
import { Button } from "@/components/ui/button";


const Achievements = () => {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 h-screen gap-8 p-8 ">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[57.6px] text-center text-black mb-4">
          Our Achievements
        </h1>
        <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      {/* Achievements Data Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
        {/* Courses */}
        <div className="flex flex-col items-center">
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold">+200</h2>
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">Courses</p>
        </div>

        {/* Mentors */}
        <div className="flex flex-col items-center">
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold">50k</h2>
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">Mentors</p>
        </div>

        {/* Students */}
        <div className="flex flex-col items-center">
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold">370k</h2>
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">Students</p>
        </div>

        {/* Recognition */}
        <div className="flex flex-col items-center">
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold">100+</h2>
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">Recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
