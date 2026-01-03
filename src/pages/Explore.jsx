import React from 'react'
import { Button2 } from '../component/button'

// const Explore = () => {
//   return (
//     <div className=' h-max flex w-full text-white py-20 bg-black justify-center items-center'>
//       {/* Background Image */}
//         <div className='w-full'>
//           <img
//             src="Explore-vector.svg"
//             alt=""
//             className="
//               absolute
//               w-full
//               h-max
//               object-contain
//               object-bottom
//               pointer-events-none
//               z-0
//               max-md:object-cover
//               max-md:h-[55%]
//             "
//           />        
//                 <div className='flex flex-col  gap-10 max-md:justify-center text-center max-md:items-center  '>
//           <p className='font-black text-4xl max-md:text-[40px] leading-12 '>Ready to Explore What June Can Do?</p>
//           <div className='flex  flex-wrap gap-4 justify-center items-center'>
//             <span className='font-light hover:text-gray-300 max-md:text-sm cursor-pointer text-[21px] border-r border-[#ffffff80] p-4'>Explore Solutions</span>
//             <span className='font-light hover:text-gray-300 max-md:text-sm text-[21px] cursor-pointer border-r border-[#ffffff80] p-4'>See Developer Docs</span>
//             <span className='font-light hover:text-gray-300 max-md:text-sm text-[21px] cursor-pointer  p-4'>Contact Sales</span>
//           </div>
//                 </div>
//         </div>
//     </div>
//   )
// }



// Explore Component
const Explore = () => {
  return (
    <div className='relative min-h-[400px] flex w-full text-white py-20 bg-black justify-center items-center overflow-hidden'>
      {/* Background Image */}
      <img
        src="/Explore-vector.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none "
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-8 md:gap-10 text-center items-center'>
          <h2 className='font-black text-[35px] md:text-4xl lg:text-4xl leading-tight max-w-4xl'>
            Ready to Explore What June Can Do?
          </h2>
          
          <div className='flex flex-row max-sm:flex-col flex-wrap gap-2 md:gap-4 justify-center items-center text-sm md:text-base lg:text-lg'>
            <a href="#solutions" className='font-light hover:text-gray-300 cursor-pointer px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#ffffff80] transition-colors'>
              Explore Solutions
            </a>
            <a href="#docs" className='font-light hover:text-gray-300 cursor-pointer px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#ffffff80] transition-colors'>
              See Developer Docs
            </a>
            <a href="#contact" className='font-light hover:text-gray-300 cursor-pointer px-4 py-2 transition-colors'>
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore

export const ExploreWithButton =({text,desc,text1="Book a Demo",text2="Explore Industry Solutions"})=> {
  return(
    <div className='full font-inter h-max flex text-white font-normal py-20 max-md:py-10 max-lg:px-8 max-md:px-5 bg-black justify-center items-center'>

      {/* Background Image */}
        <img
          src="Explore-v.svg"
          alt=""
          className="
            absolute
            object-fit
            w-full
            h-[40%]
            object-center
            pointer-events-none
            z-0
            max-md:object-cover
            max-md:h-[45%]
          "
        /> 

      <blockquote className='flex flex-col  gap-5 max-md:gap-6 max-md:justify-center text-center max-md:items-center  '>
        <h2 className='font-black text-4xl max-md:text-3xl leading-12 '>
          {text}
        </h2> 
        {desc && <p className='font-normal max-md:text-[21px]'>{desc}</p>}

        <div className='flex  flex-wrap gap-4 justify-center items-center'>
          <Button2
            text1={text1} 
            text2={text2}
          />
        </div>
      </blockquote>
    </div>
  )
}



export const ExploreWithoutButton =({text,desc})=> {
  return(
    <div className='w-full h-max font-inter flex text-white py-20 max-lg:px-8 max-md:px-5 bg-black justify-center items-center overflow-hidden'>

      {/* Background Image */}
        <img
          src="Explore-v.svg"
          alt=""
          className="
            absolute
            object-fit
            w-full
            h-[40%]
            object-center
            pointer-events-none
            z-0
            max-md:object-cover
            max-md:h-[45%]
          "
        /> 

      <blockquote className='flex flex-col gap-5 max-md:justify-center text-center max-md:items-center  '>
        <h2 className='font-black text-4xl max-md:text-[40px] leading-12 '>
          {text}
        </h2> 
        {desc && <p className='font-normal max-md:text-[21px]'>{desc}</p>}
      </blockquote>
    </div>
  )
}