import React from 'react';
import { Button } from "@/components/ui/button"

const ExplorCourse = () => {
  return (
    <div className="grid grid-row-2 md:grid-cols-1 md:grid-rows-2 md:flex-auto h-screen gap-4 p-4">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[48px] leading-[57.6px] text-center text-black mb-4">
          Explore Courses By Category
        </h1>
        <p className="text-[18px] leading-[27px] text-center text-gray-600">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/*1= Course Cards Section */}
      <div className="flex items-center justify-center">
  <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <img src="images/Frame 290.svg" alt="logo" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] leading-[30px] text-black">
          Design & Development
        </h2>
        <p className="text-[18px] leading-[27px] text-gray-700">
          50+ Courses Available
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <img src="images/Frame 291.svg" alt="logo" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] leading-[30px] text-black">
        Marketing
        </h2>
        <p className="text-[18px] leading-[27px] text-gray-700">
        Text/Medium/Normal
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <img src="images/Frame 292.svg" alt="logo" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] leading-[30px] text-black">
        Development
        </h2>
        <p className="text-[18px] leading-[27px] text-gray-700">
          30+ Courses Available
        </p>
      </div>
    </div>
  </div>
  </div>



  {/* 2- Course Cards Section */}
  <div className="flex items-center justify-center">
  <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <img src="images/Frame 293.svg" alt="logo" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] leading-[30px] text-black">
        Communication
        </h2>
        <p className="text-[18px] leading-[27px] text-gray-700">
          50+ Courses Available
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <img src="images/Frame 294.svg" alt="logo" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] leading-[30px] text-black">
        Digital Marketing
        </h2>
        <p className="text-[18px] leading-[27px] text-gray-700">
          50+ Courses Available
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <img src="images/Frame 295.svg" alt="logo" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] leading-[30px] text-black">
        Self Development
        </h2>
        <p className="text-[18px] leading-[27px] text-gray-700">
          50+ Courses Available
        </p>
      </div>
    </div>
  </div>
  </div>



    {/* Course Cards Section */}
    <div className="flex items-center justify-center">
  <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <img src="images/Frame 296.svg" alt="logo" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] leading-[30px] text-black">
        Business
        </h2>
        <p className="text-[18px] leading-[27px] text-gray-700">
          50+ Courses Available
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <img src="images/Frame 297.svg" alt="logo" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] leading-[30px] text-black">
        Finance
        </h2>
        <p className="text-[18px] leading-[27px] text-gray-700">
          50+ Courses Available
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <img src="images/Frame 298.svg" alt="logo" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] leading-[30px] text-black">
        Consulting
        </h2>
        <p className="text-[18px] leading-[27px] text-gray-700">
          50+ Courses Available
        </p>
      </div>
    </div>
  </div>
  </div>
  <div className="flex justify-center items-center ">
  <Button variant="outline">View All Courses</Button>
</div>
 

</div>
  );
};

export default ExplorCourse;
