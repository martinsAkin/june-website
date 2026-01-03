import React from 'react'

// Desktop Button
export const Button = ({text, logo}) => {
  return (
    <div className=' flex justify-center gap-x-3 items-center hover:scale-105 active:scale-95 transition-all duration-100  cursor-pointer  px-5 py-3 bg-white w-fit max-md:w-full max-sm:py-3 '>
        <p className='text-base  font-medium font-inter max-sm:text-base text-black'>
          {text}
        </p>
        {logo && <img src={logo} />}
    </div>
  )
} 


// Mobile Button
export const MobileButton = ({text, logo}) => {
  return (
    <a href='mailto:partnerships@juneinfra.com
      ' className=' flex justify-start gap-x-3 items-center hover:scale-105 active:scale-95 transition-all duration-100  cursor-pointer  px-6 py-3 bg-white w-fit max-md:w-full max-sm:py-5 '>
        <p className='text-base  font-medium font-inter max-sm:text-base text-black'>
          {text}
        </p>
        {logo && <img src={logo} />}
    </a>
  )
} 



export const Button2 = ({text1, text2}) => {
  return (
    <section className='flex max-md:flex-col gap-6 '>
      <div className={`bg-[rgba(255,255,255,1)]  flex gap-x-4 items-center hover:scale-105 active:scale-95 transition-all duration-100  cursor-pointer max-md:justify-center px-5 py-3 w-fit max-md:w-full max-sm:py-3  max-sm:px-10`}>
          <p className="text-base capitalize  font-semibold font-inter max-sm:text-base text-black">
            {text1}
          </p>
      </div>
      <div className={`bg-[rgba(161,106,250,1)] flex gap-x-4 items-center hover:scale-105 active:scale-95 transition-all duration-100  cursor-pointer   px-5 py-3 w-fit max-md:w-full max-sm:py-3 max-sm:px-10 text-white`}>
          <p className="text-base capitalize   font-semibold font-inter max-sm:text-base">
            {text2}
          </p>
      </div>
    </section>
  )
} 

