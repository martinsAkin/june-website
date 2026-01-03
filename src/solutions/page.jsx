import React from 'react'
import { Card2, Card3 } from '../component/Card'
import { ExploreWithButton} from '../pages/Explore'

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";


// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25, // animate one after the other
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, x: -60 }, // slide from left
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

const Solutions = () => {

  const cards = [
   
    {
      id: 1,
      icon: "/Jet2.svg",
      title: "For Founders",
      desc: "Launch your MVP in days with no code, no CTO, and no servers. Use pre-built packs for Fintech, Ecommerce, Logistics, Education, and beyond.",
      role: "Get Started"
    },
    {
      id: 2,
      icon: "/Jet2.svg",
      title: "For SMEs",
      desc: "Manage customers, payments, workflows, and compliance in one simple dashboard.",
      role: "Learn More"
    },
    {
      id: 3,
      icon: "/Jet2.svg",
      title: "For Enterprises",
      desc: "Integrate June into your existing systems for scalable, compliant, multi-tenant solutions.",
      role: "Contact Sales"
    },
  ]
  return (
      <>
                  
            <section className='bg-[#141414] relative w-full h-max'>
              <div className="flex gap-25 justify-self-center py-30 px-20 items-center max-md:w-screen max-md:px-10 max-md:py-10 max-md:gap-20 max-md:pb-20 max-md:h-max max-lg:h-248 max-lg:flex-col max-lg:py-30 max-lg:items-center max-lg:gap-10">
                {/* Main Content */}
                <section className=' w-full max-w-140 max-lg:max-w-full max-lg:pt-5 h-max text-start space-y-6  text-white max-md:pt-16'>
                  <div className="text-7xl  font-extrabold  font-inter max-md:text-[39px] max-lg:text-6xl lg:leading-[70px] max-md:leading-13">
                    One Platform. Infinite Possibilities.
                  </div>
                  <p className='text-base max-md:text-base font-inter font-normal text-[#fdf9f0]'>
                    June delivers infrastructure that adapts to your business, so you can focus on growth and customers.
                  </p>
                </section>
                {/* IMAGE */}
                <div >
                  <img src="/Solution-vector.svg" className='w-120 h-120 max-lg:w-full max-lg:h-full ' alt="" />
                </div>
              </div>
            </section>

        <section className='px-25 max-lg:px-8 max-md:px-6 2xl:flex 2xl:flex-col 2xl:justify-self-center 2xl:justify-center 2xl:items-center 2xl:w-400'>
          <div className='h-max py-8 w-full'>
            {/* Content-section */}
            <header className='max-w-140 max-md:max-w-full'>
              <p className='text-5xl capitalize text-black font-bold leading-[60px] max-md:text-[42px] max-md:leading-10 '>
                Building for businesses at every stage
              </p>
              <p className='font-normal text-[15px] text-[#121212] max-w-[80%] max-md:max-w-full max-md:text-[20px] max-md:leading-7 mt-4 '>
                From idea to scale, June gives you the infrastructure to launch fast, grow securely, and expand confidently.
              </p>
            </header>
          </div>
          {/* Card-box */}
          <div className="flex flex-wrap max-lg:gap-6 gap-9 max-md:gap-6 my-10">
          {/* Cards */}
              {cards.map((card) => (
                <div key={card.id} className="max-md:w-full flex-col flex cursor-pointer max-lg:w-[48%] w-[31%]">
                  <Card2
                    icon={card.icon}
                    role={card.role}
                    title={card.title}
                    desc={card.desc}
                  />
                </div>
              ))}
          </div>

          {/* Solution-Category */}
           <section className='h-max py-8'>
              <p className='text-5xl capitalize text-black font-semibold leading-[60px] max-md:text-[26px] max-md:leading-7  '>
                <span className='text-[#7d55e5]'>Solution</span> Categories
              </p>
                {/* Card-Section */}
              <div className="grid grid-cols-1 py-10 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <Card3
                  icon={"/fintech.svg"}
                  title={"Fintech Infrastructure"}
                  desc={"Wallets, KYC/AML, payments, automation."}
                />
                <Card3
                  icon={"/commerce.svg"}
                  title={"Commerce Infrastructure"}
                  desc={"Catalogs, checkout, logistics, CRM."}
                />
                <Card3
                  icon={"/compliance.svg"}
                  title={"Compliance & Security"}
                  desc={"Enterprise-grade privacy, encryption, and data sovereignty."}
                />
                <Card3
                  icon={"/industry.svg"}
                  title={"Industry Verticals"}
                  desc={"Flagship verticals (Skygrit → aviation)."}
                />
              </div>
              {/* Observer
                  {(() => {
                    const { ref, inView } = useInView({
                      triggerOnce: true,
                      threshold: 0.2, // start animation when 20% is visible
                    });
                    return (
                      <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        className="grid grid-cols-1 py-10 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                      >
                        <Card3 icon={"/fintech.svg"} title={"Fintech Infrastructure"} desc={"Wallets, KYC/AML, payments, automation."} />
                        <Card3 icon={"/commerce.svg"} title={"Commerce Infrastructure"} desc={"Catalogs, checkout, logistics, CRM."} />
                        <Card3 icon={"/compliance.svg"} title={"Compliance & Security"} desc={"Enterprise-grade privacy, encryption, and data sovereignty."} />
                        <Card3 icon={"/industry.svg"} title={"Industry Verticals"} desc={"Flagship verticals (Skygrit → aviation)."} />
                      </motion.div>
                    );
                  })()} */}
           </section>
        </section>

        <ExploreWithButton 
          text={"Ready to Transform Your Business?"} 
         />    
      </>
  )
}

export default Solutions