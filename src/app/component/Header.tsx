import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
<div>
    
    <div className=' w-[1280px] h-[54px] pr-[64xp] pl-[64px] top-[100px] left-[100px] bg-[#F7F7F7] mb-4 '>

     
      <div className=' flex justify-center items-center font-Roboto w-[1154px] h-[54px] top-[10px]  gap-[32px]   '>

         {/* Left Section: Contact Information  */}

         <div className=' flex gap-4 w-[386px] h-[30px]  ' >
         <p className="w-[215px] h-[21px] text-[14px] leading-[21px] border-solid border-r-[1px] border-[#676767]  ">
         Phone Number: 956 742 455 678
       </p>
         <p className=" w-[149px] text-[14px] leading-[21px] h-[21px]">
         Email:info@ddsgnr.com
        </p>
        
        </div>

             {/* <!-- Right Section: Social Media Icons --> */}

          
             <div className=" flex   gap-[32px] w-[736px] h-[24px] justify-end   md:hidden  "> 
             <div className=' flex gap-3 w-[132px] h-[24px]  '>
       <img src="images/facebook.svg" alt="Facebook" className="w-[24px] h-[24px]" />
       <img src="images/Instagram.svg" alt="Instagram" className="w-[24px] h-[24px]" />
       <img src="images/Twitter.svg" alt="Twitter" className="w-[24px] h-[24px]" />
       <img src="images/vector.svg" alt="LinkedIn" className="w-[24px] h-[24px]" />
      </div>
      </div>
 
           
          </div>
  </div>
  
 <header className=" font -roboto justify-center items-center w-[1280px] h-[72px]  pl-[64px] pr-[64px]  b-[1px] pb-[10px] pt-[10px] bg-[#f7f7f7] border-[1px] border-[#676767] ">
        <div className="w-[1152px] h-[44px] flex items-center justify-between space-between">
         {/* Left Section: Logo */}

          <div className="flex items-center gap-[8px] w">
           <Image
               src="/images/Ddsgnr.svg" 
               alt="Ddsgnr Logo"
               width={130.6} 
               height={41} 
           />
           </div>

           {/* Right Section: Example Placeholder (can be menu, social icons, etc.) */}
           <div>

   

<div className="flex justify-between items-center w-[910px] h-[44px] gap-[32px]  bg-white">
  <ul className="font Roboto flex gap-8 text-black">
    <li><a href="#" className="  border-solid border-b-[1px]  border-black text-[16px] leading-[24px] p-[10px]">Home</a></li>
    <li><a href="#" className=" text-[16px] leading-[24px] p-[10px]">Courses</a></li>
    <li><a href="#" className=" text-[16px] leading-[24px] p-[10px]">Services</a></li>
    <li><a href="#" className=" text-[16px] leading-[24px] p-[10px]">Achievement</a></li>
    <li><a href="#" className=" text-[16px] leading-[24px] p-[10px]">About Us</a></li>
    <li><a href="#" className=" text-[16px] leading-[24px] p-[10px]">Testimonial</a></li>
  </ul>
  <div className="flex gap-4">
    <button className="border border-black px-4 py-2 rounded">Login</button>
    <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
  </div>
</div>


              </div>
          </div>
    </header>
      

   
  
      

</div>
  )
}

export default Header
