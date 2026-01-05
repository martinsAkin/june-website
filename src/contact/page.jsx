// import { useState } from 'react'

import { ContactCard} from "../component/Card"
import { ExploreWithButton } from "../pages/Explore"

const Contact = () => {
  return (
    <>
    <div className="bg-[rgba(161,106,250,0.1)] pb-20 pt-10 font-inter px-20 max-lg:px-10 max-md:px-6 max-md:h-max max-md:pb-8">
        <section className="2xl:flex 2xl:flex-col 2xl:justify-self-center 2xl:justify-center 2xl:items-center 2xl:w-400">
          <h1 className="text-7xl font-inter text-black my-15 font-black  max-md:text-6xl 2xl:w-full">
            Contact Us
          </h1>
          <section className="flex  h-max gap-0 justify-self-center w-full max-md:flex-col max-md:w-[380px] max-md:items-center max-md:gap-4 max-lg:flex-col max-lg:w-200 max-lg:items-center ">
              <div className="bg-black p-6 overflow-hidden relative h-full w-[50%] text-white max-lg:w-full">
                <img
                  src="/contact_vector.svg"
                  alt="image"
                  className="absolute right-0 top-0 w-60"
                />
                <span className="text-5xl w-65 mt-45 leading-[50px] inline-block pb-4 font-bold">
                  Let's Build The Future Together.
                </span>
                <p className="text-[13px]">Get in touch and let June accelerate your business</p>
              </div>
              <form className="flex flex-col bg-white gap-6 px-10 pt-10 font-light text-[#939393] w-[50%] max-md:pt-6 max-md:px-6 max-md:pb-10 max-lg:pt-6 max-lg:w-full">
                <div>
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    name="name"
                    className="border-b-2 border-gray-400 block w-full h-10 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="border-b-2 border-gray-400 block w-full h-10 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
          
                  <textarea
                    type="text"
                    name="name"
                    placeholder="Type your requests or enquiries here..."
                    className="border-b-2 border-gray-400 block w-full h-25 focus:outline-none focus:border-black"
                  ></textarea>
                </div>
                <button type="submit" className="bg-[rgba(161,106,250,1)] font-semibold cursor-pointer hover:bg-[#813eeef1] active:scale-95  py-3 px-8 text-white w-max text-[12px] max-lg:my-4">Submit</button>
              </form>
          </section>
          <div className="w-full grid grid-cols-3 mt-20 max-md:mt-5 px-0 gap-5 max-md:grid-cols-1 max-md:px-0 max-md:py-6 max-lg:grid-cols-1">
                <ContactCard
                  imgPath={"/Email.svg"}
                  title={"Email"}
                  text={"info@juneinfra.com"}
                  href={"mailto:info@juneinfra.com"}
                  
                />
                <ContactCard
                  imgPath={"/Email.svg"}
                  title={"Partnership"}
                  text={"partnerships@juneinfra.com"}
                  href={"mailto:partnerships@juneinfra.com"}
                />
                <ContactCard
                  imgPath={"/Phone.svg"}
                  title={"Phone Number"}
                  text={"+234(0)7050247379"}
                  href={"https://wa.me/2347050247379"}
                />
              </div>
        </section>

      </div>

        

            <ExploreWithButton
              text={"Ready to Get Started?"}
              desc={"Book a consultation with our team to discuss how June can transform your business."}
              text1={"Book a Consultation"}
              text2={"Join Our Partner Network"}

            />
    </>
  )
}

export default Contact