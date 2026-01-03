import React from 'react'

// const Built = () => {
//   return (
//     <div>
//       <div className='w-full flex justify-center items-center h-max py-8'>

//         {/* Content-section */}
//         <header className=' max-w-125 max-md:max-w-80'>
//           <p className='text-[33px] text-black font-black leading-[38px] max-md:text-[26px] max-md:leading-7  '>
//             Built for Founders, SMEs, and Enterprises
//           </p>
//           <p className='font-normal text-[15px] max-md:text-[15px] max-md:leading-7 mt-4'>
//             A unified cloud platform designed to accelerate startups, strengthen growing businesses, and support enterprise-level performance.
//           </p>
//         </header>

//         {/* Image-section */}
//         <div className="flex flex-wrap w-full gap-0 justify-center my-10 max-md:gap-y-5">
//           <div className="max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%]">
//             <img src="/founder2.svg" alt="" />
//           </div>

//           <div className="max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%] ">
//             <img 
//             src="/Sme.svg" 
//             alt="" 
//             />
//           </div>

//           <div className="-ml-14 max-md:w-[50%] max-md:ml-0 rounded-lg max-lg:w-[20%] max-lg:-ml-8 w-[20%] ">
//             <img 
//             src="/enterprise.svg" 
//             alt="" 
//             />
//           </div>

//           <div className="max-md:w-[50%] rounded-lg max-lg:w-[20%] w-[20%] ">
//             <img 
//             src="/image.svg" 
//             alt="" 
//             />
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Built


// // Built Component
const Built = () => {
  return (
    <div className='w-full py-12 md:py-16'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className='mb-8 md:mb-12 max-w-125 max-md:max-w-3xl'>
          <h2 className='text-3xl md:text-4xl lg:text-[33px] text-black font-black leading-tight mb-4'>
            Built for Founders, SMEs, and Enterprises
          </h2>
          <p className='font-normal text-[15px] max-md:text-[15px] max-md:leading-7 mt-4 '>
            A unified cloud platform designed to accelerate startups, strengthen growing businesses, and support enterprise-level performance.
          </p>
        </header>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <div className="rounded-lg overflow-hidden slide-in " style={{ animationDelay: "0.2s" }}>
            <img src="/founder2.svg" alt="Founders" className="w-full hover-lift object-cover cursor-pointer " />
          </div>

          <div className="rounded-lg overflow-hidden slide-in " style={{ animationDelay: "0.4s" }}>
            <img src="/Sme.svg" alt="SMEs" className="w-full object-cover hover-lift cursor-pointer " />
          </div>

          <div className="rounded-lg overflow-hidden slide-in " style={{ animationDelay: "0.6s" }} >
            <img src="/enterprise.svg" alt="Enterprises" className="w-full hover-lift object-cover cursor-pointer " />
          </div>

          <div className="rounded-lg overflow-hidden slide-in " style={{ animationDelay: "0.8s" }}>
            <img src="/image.svg" alt="Solutions" className="w-full hover-lift object-cover cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built