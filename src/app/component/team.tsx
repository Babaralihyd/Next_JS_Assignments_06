import React from 'react';

const courseData = [
  { id: 1, imgSrc: "images/cardpic1.svg", title: "James Nduku", description: "Marketing Coordinator" },
  { id: 2, imgSrc: "images/cardpic2.svg", title: "Joseph Munyambu", description: "Nursing Assistant" },
  { id: 3, imgSrc: "images/cardpic3.svg", title: "Joseph Ngumbau", description: "Medical Assistant" },
  { id: 4, imgSrc: "images/cardpic4.svg", title: "Erick Kipkemboi", description: "Web Designer",  },
  { id: 5, imgSrc: "images/cardpic5.svg", title: "Stephen Kerubo", description: "President of Sales" },
  { id: 6, imgSrc: "images/cardpic6.svg", title: "John Leboo", description: "Dog Trainer" },
];

const ExplorCourse = () => {
  return (
    <div className="p-4">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-[48px] leading-[57.6px] text-center text-black mb-4">Our Team</h1>
        <p className="text-[18px] leading-[27px] text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Card Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course) => (
          <div key={course.id} className="w-[395px] h-[273px] flex flex-col p-4 gap-2">
            <img src={course.imgSrc} alt={`${course.title}'s profile picture`} className="w-32 h-32 object-cover mx-auto" />
            <h1 className="text-[17px] leading-[30px] text-center text-black">{course.title}</h1>
            <p className="text-[15px] leading-[27px] text-center text-black">{course.description}</p>
           <p className="text-[16px] leading-[24px] "></p>

            <div className="mt-4 flex justify-center gap-4">
              <img src="images/vector.svg" alt="LinkedIn" className="w-[24px] h-[24px]" />
              <img src="images/Twitter.svg" alt="Twitter" className="w-[24px] h-[24px]" />
              <img src="images/piclogo.svg" alt="Logo" className="w-[24px] h-[24px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorCourse;
