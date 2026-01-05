import React from 'react'
// import { motion } from "framer-motion";
const Card = ({icon,number,title,desc}) => {

  return (
    <div className="w-full h-full bg-[#a16afa0d] rounded-lg hover:shadow-sm hover:scale-105 active:scale-95  p-6 relative ">

      {/* Icon top-right */}
        <img
          src={icon}
          alt="icon"
          className="h-[23%] w-[16%]  absolute top-4 right-4"
        />

      <div className='text-start mt-20'>
        {/* Number */}
        <p className="text-sm font-light text-purple-400 mt-10">{number}</p>

        {/* Title */}
        <h3 className="text-xl font-bold mt-1">{title}</h3>

        {/* Description */}
        <p className="text-[rgba(0,0,0,1)] text-[14px] font-light mt-3 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}










// // Card Component
// const Card = ({ icon, number, title, desc }) => (
//   <div className="bg-white rounded-lg p-6 hover:scale-105 active:scale-95 transition-all duration-200 h-full flex flex-col">
//     <div className="flex items-center gap-3 mb-4">
//       <img src={icon} alt={title} className="w-8 h-8" />
//       <span className="text-gray-400 text-sm font-medium">{number}</span>
//     </div>
//     <h3 className="text-xl font-bold mb-3">{title}</h3>
//     <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
//   </div>
// );
export default Card

// ABOUT CARD
export const CorePillars = ({ imgPath, title, text, cardBg="bg-white", imageSz="w-15"}) => {
 return(
  <section className={`${cardBg} font-inter rounded-md hover:shadow-md cursor-pointer flex flex-col items-center text-center px-6 py-4 gap-2.5 slide-in `} style={{ animationDelay: "0.2s"}} >

    <img src={imgPath} alt='vectorImg' className={`${imageSz}`} />

    <h1 className='font-bold text-l'>{title}</h1>
    <span className='text-gray-600 text-[13px]'>{text}</span>
  </section>
 )
}

// CONTACT-CARD

export const ContactCard = ({ imgPath, title,href, text, cardBg="bg-white", imageSz="w-20"}) => {
 return(
  <a href={href} target='_blank' rel="noopener noreferrer"style={{ animationDelay: "0.2s"}} className={`${cardBg} slide-in hover:shadow-md cursor-pointer font-inter font-normal rounded-lg flex flex-col items-center text-center px-8 pt-4  pb-15 gap-8`}>

    <img src={imgPath} alt='vectorImg' className={`${imageSz} `} />

    <div className='flex flex-col gap-3'>
      <span className='font-bold text-2xl'>{title}</span>
      <span className='text-[#121212] text-[24px]'>{text}</span>
    </div>
  </a>
 )
}


export const Card2 =({icon,role,title,desc})=>{
  return (
    <div className="w-full h-full bg-[#a16afa0d] rounded-lg  flex flex-col hover:shadow-sm hover:scale-105 active:scale-95  p-6 relative ">

      {/* Icon top-right */}
        <img
          src={icon}
          alt="icon"
          className="h-[23%] w-[16%]  absolute top-4 left-4"
        />

      <div className='text-start mb-8 mt-15'>

        {/* Title */}
        <h3 className="text-xl font-bold mt-1">{title}</h3>

        {/* Description */}
        <p className="text-[rgba(0,0,0,1)] text-[13px] font-light mt-3 leading-relaxed">
          {desc}
        </p>
      </div>
      
        {/* Role */}
        <p className="text-sm font-bold text-purple-400 mt-auto">{role}</p>
      
    </div>
  )

}

export const Card3 = ({icon,title,desc})=>{
  return(
    <div className="w-full slide-in  h-48 bg-[#fbf8ff] cursor-pointer hover:shadow-md rounded-lg  flex flex-col  p-6 relative " style={{ animationDelay: "0.2s"}}>

      {/* Icon top-right */}
        <img
          src={icon}
          alt="icon"
          className=" absolute top-4 w-12 h-12 left-6"
        />

      <div className='text-start my-15'>

        {/* Title */}
        <h3 className="text-[18px] font-bold mt-1">{title}</h3>

        {/* Description */}
        <p className="text-[#64728f] text-[11px] font-normal mt-3 leading-relaxed">
          {desc}
        </p>
      </div>
      
    </div>
  )
}


// const cardVariants = {
//   hidden: { opacity: 0, x: -60 }, // slide in from left
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// export const Card3 = ({ icon, title, desc }) => {
//   return (
//     <motion.div
//       variants={cardVariants}
//       className="w-full h-48 bg-[#fbf8ff] rounded-lg flex flex-col p-6 relative"
//     >
//       {/* Icon top-left */}
//       <img
//         src={icon}
//         alt="icon"
//         className="absolute top-4 w-12 h-12 left-6"
//       />

//       <div className="text-start my-15">
//         <h3 className="text-[18px] font-bold mt-1">{title}</h3>
//         <p className="text-[#64728f] text-[13px] font-normal mt-3 leading-relaxed">
//           {desc}
//         </p>
//       </div>
//     </motion.div>
//   );
// };