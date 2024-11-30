import React from 'react';
import { Button } from "@/components/ui/button";

const courseData = [
  {
    id: 1,
    imgSrc: "images/course1.svg",
    title: "UX/UI Design 201",
    category: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400"
  },
  {
    id: 2,
    imgSrc: "images/course2.svg",
    title: "Programmimg",
    category: "Introduction to Python",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400"
  },
  {
    id: 3,
    imgSrc: "images/course3.svg",
    title: "Business",
    category: "Data Analysis for Beginners",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400"
  },


  {
    id: 4,
    imgSrc: "images/course4.svg",
    title: "Art",
    category: "Art Specialization",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400"
  },


  {
    id: 5,
    imgSrc: "images/course5.svg",
    title: "Law",
    category: "Rule of Law",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros..",
    price: "$400"
  },



  {
    id: 6,
    imgSrc: "images/course6.svg",
    title: "Tech",
    category: "Introduction to webflow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400"
  }
];

const ExplorCourse = () => {
  return (
    
    <div className="p-4">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-[48px] leading-[57.6px] text-center text-black mb-4">
          Courses
        </h1>
        <p className="text-[18px] leading-[27px] text-center text-gray-600">
          Your Ultimate Guide to learning
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center items-center w-full gap-12 bg-white mx-auto mb-8">
        <ul className="font-Roboto flex gap-6 text-black text-center">
          <li><a href="#" className="border-solid border-b-[1px] border-black text-[16px] leading-[24px] p-[10px]">Popular</a></li>
          <li><a href="#" className="text-[16px] leading-[24px] p-[10px]">Recommended</a></li>
          <li><a href="#" className="text-[16px] leading-[24px] p-[10px]">Best Price</a></li>
        </ul>
      </div>

      {/* Card Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map(course => (
          <div key={course.id} className="w-full h-[534px] gap-6 bg-[#F7F7F7] rounded-[5px] flex flex-col p-4">
            <img src={course.imgSrc} alt={course.title} className="w-full h-[300px] object-cover" />
            <h1 className="text-[14px] leading-[21px] text-black">{course.category}</h1>
            <h1 className="text-[24px] leading-[33.6px] text-black">{course.title}</h1>
            <p className="text-[16px] leading-[24px] text-black">{course.description}</p>

            <div className="mt-4 flex gap-4">
              <Button className=" flexpx-4 py-2 rounded border">Enroll Now</Button>
              <Button className="px-4 py-2 rounded bg-gray-200">{course.price}</Button>
            </div>
          </div>
        ))}
          


        
      </div>
      <div className='text-center gap-2 p-10'>
             <Button variant="outline">View All Courses</Button>
             </div>
    </div>


  );
};

export default ExplorCourse;

