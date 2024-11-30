import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const Hero = () => {
  return (
  
    <div>

    <div className="w-[1280px] h-[800px] bg-[#ffffff] flex items-center justify-between p-8">
  {/* Left Section */}
  <div className="  font-Roboto w-[640px]">
    <h1 className="text-[56px] leading-[67.2px] text-[#000000] mb-4">
      Learn new skills online with ease
    </h1>
    <p className="text-[18px] leading-[27px] mb-8">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
    </p>
    <div className="flex gap-4">
      <button className="border border-black px-6 py-3 rounded">Start Learning Now</button>
      <button className="border border-black px-6 py-3 rounded bg-black text-white">Explore Courses</button>
    </div>
  </div>

  {/* Right Section */}
  <div className=" flex w-[640px] h-[800px] ">
    <Image
      src="images/girls.svg"
      alt="image"
      width={640}
      height={900}
      className="rounded-lg"
    />
  </div>
</div>


<div className='flex  w-[1280px] h-[288px] bg-[#f7f7f7]  py-[80px] px-[64px]  gap-[64px]'>
    {/* Left Section */}
    <div className='w-[320px] h-[64px] text-[24px] leading-[33.6px] text-[#000000] bg-white'>
      <h1 >
        Trusted by 2000+ companies worldwide.

      </h1>

    </div>
 {/* Right Section */}
<div className=' flex gap[19.12px] bg-white w-[880px] h-[56px] py-[8.74px]' >
<img src="images/1.svg" alt="logo" className="w-[123.8px] h-[38.52px]" />
<img src="images/2.svg" alt="logo" className="w-[123.8px] h-[38.52px]" />
<img src="images/3.svg" alt="logo" className="w-[123.8px] h-[38.52px]" />
<img src="images/4.svg" alt="Logo" className="w-[123.8px] h-[38.52px]" />
<img src="images/5.svg" alt="Logo" className="w-[123.8px] h-[38.52px]" />
<img src="images/6.svg" alt="Logo" className="w-[123.8px] h-[38.52px]" />
</div>

</div>

</div>
  )
}

export default Hero
