import React from 'react'
import Card from '../component/Card';




const cards = [
   
    {
      id: 1,
      icon: "/Jet.svg",
      number: "01",
      title: "Build Faster",
      desc: "Transform your concept into a functional product at record speed with a streamlined process designed for clarity, collaboration, and rapid execution.",
    },
    {
      id: 2,
      icon: "/piggy.svg",
      number: "02",
      title: "Save Smarter",
      desc: "Slash infrastructure spending by up to 70% with optimized deployment and smarter resource management.",
    },
    {
      id: 3,
      icon: "/telegram.svg",
      number: "03",
      title: "Scale Seamlessly",
      desc: "Start small, scale big. From startup to enterprise, you get one powerful backbone to run your business seamlessly.",
    },
    {
      id: 4,
      icon: "/verified.svg",
      number: "04",
      title: "Stay Compliant",
      desc: "We treat compliance as the foundation, not a feature. NDPR, GDPR, ISO 27001, and PCI-DSS come built in to keep your data and users secure.",
    },
    
  ];

const WhyJune = () => {
  return (
    <div>
      <div className="w-full  h-max pt-20 flex items-center justify-center max-md:pt-10 text-center">
          {/* Content */}
        <section className=" w-full font-inter space-y-4 mx-auto lg:flex lg:flex-col lg:justify-self-center lg:justify-center lg:items-center">
            {/* header */}
          <div className=' flex flex-col items-center justify-center'>
            <p className="text-4xl font-extrabold max-md:text-4xl">Why June?</p>
            <p className='text-[18px]  max-md:text-[17px] font-normal my-5 max-lg:max-w-full max-w-[52%] '>
              With June, you gain more than technology. You gain a partner committed
              to powering transformation across the continent.
            </p>
          </div>

          <blockquote className='flex flex-col lg:flex-row gap-8'>
            <div className='w-[40%] max-lg:w-full max-lg:justify-center  pt-15 pl-10 max-md:py-5  max-md:gap-15  flex flex-col gap-30 bg-[#f4eeff]'>
              <p className='text-3xl font-bold text-start w-[340px] max-md:w-[260px] '>
                At June, we go beyond digital solutions. We create the backbone that Africa’s industries depend on. 
              </p>

              <button className='bg-black hover:scale-105 active:scale-95 cursor-pointer flex text-white text-sm py-4 px-4 justify-self-start w-max'>
                Book a Free Discovery Call
              </button>
            </div>

            <div className='lg:flex-1'>
              <img src="/Why.svg" alt="" className="w-full"/>
            </div>
          </blockquote>

          {/* Card-box */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:justify-self-center lg:justify-center lg:items-center max-w-7xl mx-auto">

            {/* Purple Card */}
            <div className="max-md:w-full rounded-lg p-6 hover:scale-105 active:scale-95  bg-[#a16afa]">
              <p className='text-start text-5xl font-black cursor-pointer text-white leading-15 mt-9'>
                Our <br />
                Major <br />
                Highlights
              </p>
            </div>

            {/* Cards */}
            {cards.map((card) => (
              <div key={card.id} className="max-md:w-full cursor-pointer">
                <Card
                  icon={card.icon}
                  number={card.number}
                  title={card.title}
                  desc={card.desc}
                />
              </div>
            ))}

            {/* Purple Card */}
            <div className="max-md:w-full rounded-lg hover:scale-105 active:scale-95 p-6 bg-[#a16afa]">
              <p className='text-start text-sm text-white font-medium'>
                Let's worry about the execution,<br />
                while you focus on getting <br />
                impactful results.
              </p>

              <button className='bg-white cursor-pointer  hover:scale-105 active:scale-95 flex text-center text-sm py-3 px-10 max-lg:px-13 justify-self-start w-max relative mt-30' onClick={()=>{
                 alert("You've successfully booked a demo!");
              }}>
                Book a demo
              </button>
            </div>
            
          </div>
      
        </section>

      </div>
    </div>
  )
}

















// // WhyJune Component
// const WhyJune = () => {
//   const cards = [
//     {
//       id: 1,
//       icon: "/Jet.svg",
//       number: "01",
//       title: "Build Faster",
//       desc: "Transform your concept into a functional product at record speed with a streamlined process designed for clarity, collaboration, and rapid execution.",
//     },
//     {
//       id: 2,
//       icon: "/piggy.svg",
//       number: "02",
//       title: "Save Smarter",
//       desc: "Slash infrastructure spending by up to 70% with optimized deployment and smarter resource management.",
//     },
//     {
//       id: 3,
//       icon: "/telegram.svg",
//       number: "03",
//       title: "Scale Seamlessly",
//       desc: "Start small, scale big. From startup to enterprise, you get one powerful backbone to run your business seamlessly.",
//     },
//     {
//       id: 4,
//       icon: "/verified.svg",
//       number: "04",
//       title: "Stay Compliant",
//       desc: "We treat compliance as the foundation, not a feature. NDPR, GDPR, ISO 27001, and PCI-DSS come built in to keep your data and users secure.",
//     },
//   ];

//   return (
//     <div className="w-full py-12 md:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className='flex flex-col items-center justify-center text-center mb-12 md:mb-16'>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Why June?</h2>
//           <p className='text-base md:text-lg font-normal max-w-3xl'>
//             With June, you gain more than technology. You gain a partner committed
//             to powering transformation across the continent.
//           </p>
//         </div>

//         {/* Blockquote Section */}
//         <div className='flex flex-col lg:flex-row gap-6 md:gap-8 mb-12 md:mb-16'>
//           <div className='w-full lg:w-2/5 p-6 md:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-[#f4eeff] rounded-lg'>
//             <p className='text-2xl md:text-3xl font-bold text-start'>
//               At June, we go beyond digital solutions. We create the backbone that Africa's industries depend on.
//             </p>

//             <button className='bg-black hover:scale-105 active:scale-95 cursor-pointer text-white text-sm py-3 px-6 w-fit'>
//               Book a Free Discovery Call
//             </button>
//           </div>

//           <div className='w-full lg:w-3/5'>
//             <img src="/Why.svg" alt="Why June" className="w-full h-full object-cover rounded-lg"/>
//           </div>
//         </div>

//         {/* Card Grid */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {/* Purple Card - Our Major Highlights */}
//           <div className="rounded-lg p-6 md:p-8 hover:scale-105 active:scale-95 transition-all duration-200 bg-[#a16afa] flex items-center justify-center min-h-[200px]">
//             <p className='text-4xl md:text-5xl font-black cursor-pointer text-white leading-tight'>
//               Our <br />
//               Major <br />
//               Highlights
//             </p>
//           </div>

//           {/* Feature Cards */}
//           {cards.map((card) => (
//             <div key={card.id} className="cursor-pointer">
//               <Card
//                 icon={card.icon}
//                 number={card.number}
//                 title={card.title}
//                 desc={card.desc}
//               />
//             </div>
//           ))}

//           {/* Purple Card - Book a Demo */}
//           <div className="rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 p-6 md:p-8 bg-[#a16afa] flex flex-col justify-between min-h-[200px]">
//             <p className='text-sm md:text-base text-white font-medium mb-6'>
//               Let's worry about the execution,<br />
//               while you focus on getting <br />
//               impactful results.
//             </p>

//             <button 
//               className='bg-white cursor-pointer hover:scale-105 active:scale-95 text-center text-sm py-3 px-8 w-fit' 
//               onClick={() => {
//                 alert("You've successfully booked a demo!");
//               }}
//             >
//               Book a demo
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default WhyJune
