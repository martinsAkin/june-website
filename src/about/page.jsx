import { CorePillars } from "../component/Card";
import { ExploreWithoutButton } from "../pages/Explore";

const About = () => {
 return (
  <div className="overflow-hidden">
   <section className="bg-[#141414] relative w-full h-max">
      <div className="flex gap-25 justify-center py-30 px-20 items-center max-md:w-full max-md:px-10 max-md:py-10 max-md:gap-20 max-md:pb-20 max-md:h-max max-lg:h-248 max-lg:flex-col max-lg:py-30 max-lg:items-center max-lg:gap-10">
        <div className="text-6xl w-130 h-max text-white font-extrabold max-md:text-4xl max-md:pt-15 max-md:w-75 max-lg:text-6xl max-lg:w-150">
        Africa's <br /> Cloud Backbone for Builders and Businesses
        </div>
        <div className="h-100 w-125 max-md:h-75 max-md:w-80 max-lg:w-135 max-lg:h-90 cursor-pointer">
        <img src="/About-hero.svg" alt="" />
        </div>
      </div>
   </section>

   <section className="bg-white w-full flex flex-col justify-center items-center px-35 2xl:max-w-360 justify-self-center">
    <div className="flex justify-between w-full bg-[#F4F3FF] h-100 mt-15 max-md:flex-col max-md:h-[400px] max-md:w-[350px] max-md:px-10 max-md:items-center max-md:relative max-lg:w-[650px] max-lg:h-[350px]">
     <div className="flex flex-col py-10 pl-10 w-145 gap-16 max-md:w-85 max-md:pl-4 max-lg:gap-15 max-lg:w-150">
      <div>
       <div className="flex items-center gap-4">
        <span className="border-[#a16afa] w-8 border-b-2 inline-block font-black"></span>{" "}
        <span className="font-bold text-2xl max-md:text-[16px]">OUR MISSION{" "}</span>
       </div>
       <p className="pl-12 max-md:text-[12px] max-md:w-76 max-lg:text-[17.5px]">
        Provide founders and businesses with secure, high performance digital
        infrastructure to build, launch, and scale their businesses without
        starting from scratch.
       </p>
      </div>
      <div>
       <div className="flex items-center gap-4">
        <span className="border-[#a16afa] w-8 border-b-2 inline-block font-bold"></span>{" "}
        <span className="font-bold text-2xl max-md:text-[16px]">OUR VISION{" "}</span>
       </div>
       <p className="pl-12 max-md:text-[12px] max-md:w-76 max-lg:text-[17.5px]">
        To power Africa’s future by providing the scalable technology
        infrastructure every founder, small business, and enterprise needs to
        thrive.
       </p>
      </div>
     </div>
     <img src="about_vector.svg" alt="vector" className="h-full max-md:rotate-90 max-md:w-19.5 max-md:ml-12 max-md:absolute max-md:-bottom-40" />
    </div>

     <div className="mt-20 flex w-full justify-between gap-8 max-md:flex-col max-md:items-center max-lg:w-[650px]">
       <div className="w-100 max-md:w-[20rem] max-lg:w-[20rem] cursor-pointer">
        <img src="/SubAbout-hero.svg" alt="image"/>
       </div>
       <article className="w-150 text-xl max-md:w-[20rem] max-md:text-[11px] text-gray-600 max-lg:text-[13px]">
         <h1 className="font-bold text-3xl max-md:text-2xl text-black mb-4">Our Story</h1>
         <p>June was born from a simple truth. Founders and businesses spend too much time and money building core digital infrastructure, including but not limited to payments, identity, workflows, CRM, and compliance. Core systems should accelerate growth, enable scaling and let you focus on your customers.</p>

         <p className="mt-4">
           June is a cloud-native platform that acts as the invisible CTO for Africa's businesses. Launch any venture with ready-made  APIs, plug and play modules and enterprise-grade security, so you can scale confidently and delight your customers, without rebuilding core infrastructure.
         </p>
       </article>
     </div>

       {/* Core Pillars  */}
      <div className=" py-20 gap-8 flex flex-col">
        <p className="font-bold text-4xl text-center">Core Pillars</p>
        <div className="grid grid-cols-4 gap-10 w-full  max-md:grid-cols-1 max-md:w-[350px] max-lg:grid-cols-2 max-lg:w-[650px]">
          <CorePillars 
            imgPath={"/Speed.svg"}
            title={"Speed"}
            text={"Launch products in weeks not months."}
            cardBg="bg-[rgba(244,246,246,1)]"
          />
          <CorePillars 
            imgPath={"/Affordability.svg"}
            title={"Affordability"}
            text={"Cut dev and infrastructure costs by 60-70%."}
            cardBg="bg-[rgba(244,246,246,1)]"
          />
          <CorePillars 
            imgPath={"/Scalability.svg"}
            title={"Scalability"}
            text={"From MVP to enterprise, grow without rebuilding."}
            cardBg="bg-[rgba(244,246,246,1)]"
          />
          <CorePillars 
            imgPath={"/Trust.svg"}
            title={"Trust"}
            text={"Compliance and security at every layer."}
            cardBg="bg-[rgba(244,246,246,1)]"
          />
          
        </div>
      </div>  
   </section>

   <ExploreWithoutButton
    text={"Our Promise"}
    desc={"June is building the digital backbone for Africa's next billion-dollar companies."}
   
   />
  </div>
 );
};

export default About;
