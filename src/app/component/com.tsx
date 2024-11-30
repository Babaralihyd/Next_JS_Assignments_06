import React from 'react'

const com = () => {
  return (
    <div>

<div
  className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-[150px] px-6 lg:px-12 py-8 bg-gray-100"
  data-aos="flip-down"
>
  {/* Text Section */}
  <div className="text-center lg:text-left">
    <h1 className={` font-semibold text-[18px] lg:text-[20px] text-black`}>
      Subscribe to our newsletter
    </h1>
    <p
      className={` font-normal text-[14px] lg:text-[16px] text-gray-600 mt-2`}
    >
      Stay updated with the latest news and offers.
    </p>
  </div>

  {/* Input Section */}
  <div className="flex flex-col items-center lg:items-end gap-4">
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 w-full">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 border border-[#000000] text-[#505050] rounded-md w-full lg:w-[300px]"
      />
      <button className="px-4 py-2 border border-black rounded-md bg-black text-white hover:bg-gray-800">
        Subscribe
      </button>
    </div>
    <p className="text-[12px] lg:text-[14px] text-center lg:text-right text-gray-500 mt-2">
      By subscribing, you agree to our <a href="#" className="text-blue-600">Privacy Policy</a>.
    </p>
  </div>
</div>

      
    </div>
  )
}

export default com
