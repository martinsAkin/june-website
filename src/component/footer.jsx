import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../Utils/route';

const Footer = () => {

  const [email, setEmail] = useState("");
  return (
    <>
      <footer className=' bg-[#000000]'>

        <section className='w-full px-20 py-10 h-max flex max-lg:px-8 max-md:px-6 max-md:py-15 gap-20 flex-col 2xl:w-450 2xl:justify-self-center'>
          <div className=' w-full h-full flex gap-[20%] max-md:gap-15 max-md:flex-col max-lg:gap-[8%] '>
            <div className='text-white  w-[35%] max-md:w-full max-lg:w-[50%] '>
              <h1 className='font-extrabold text-[38px] max-md:text-3xl leading-9 '>
                Subscribe to our <br />
                monthly newsletter
              </h1>
              <p className='text-base max-md:text-[19px] max-lg:text-[20px]  my-3 max-w-[90%] max-lg:max-w-full max-md:max-w-full'>
                Be the first to know what’s new at June.
                Subscribe to our newsletter now!
              </p>

              {/* Button */}
              <div className='flex mt-10 max-md:flex-col max-md:gap-3'>
                <input type='Email' placeholder='Email Address' value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 className='bg-white text-black font-normal flex text-start text-base  p-4 max-lg:px-13 max-md:px-5 justify-self-start w-[60%] outline-0 max-md:w-full relative '>
                </input>

                <button className='bg-[#a16afa] text-white font-normal text-center text-base hover:bg-[#8f54f0]  p-4 max-lg:px-13 max-md:w-full w-[40%] relative cursor-pointer '
                onClick={()=>{
                  const Email= input.value
                  alert(`${ email} You've Succefully Subscribe to the Newsletter , click ok to continue and check your mail`);
                }}
                >
                  Subscribe
                </button>
              </div>

            </div>

            {/* List-content */}

            <article className='w-[40%] max-md:w-full max-lg:w-[45%]  h-max flex flex-col  gap-17 max-lg:gap-8 max-md:gap-17'>
              <div className='flex gap-[10%]'>
                <div className='text-white text-[12px] font-medium border-l-2 border-[#a16afa] pl-8  w-[45%] '>
                  PRODUCT
                  <div className='flex flex-col text-base pt-2 font-light leading-7 '>
                    <NavLink to={AppRoutes.solutions} onClick={() => window.scrollTo(0, 0)}  className='hover:text-[#a16afa] w-max'>Solutions</NavLink>
                    <NavLink to={"https://skygrit.juneinfra.com/"} target='_blank' rel='noopener'  className='hover:text-[#a16afa] w-max'>Skygrit</NavLink>
                    <NavLink className='hover:text-[#a16afa] w-max'>Developers</NavLink>
                  </div>
                </div>

                <div className='text-white text-[12px] font-medium border-l-2 border-[#a16afa] pl-8 w-[45%] '>
                  RESOURCES
                  <div className='flex flex-col text-base pt-2 font-light leading-7 '>
                    <NavLink className='hover:text-[#a16afa] w-max'>What’s new?</NavLink>
                    <NavLink className='hover:text-[#a16afa] w-max'>Blogs</NavLink>
                  </div>
                </div>
                
              </div>

               {/* Section-layer  */}

               <div className='flex gap-[10%]'>
                <div className='text-white text-[12px] font-medium border-l-2 border-[#a16afa] pl-8  w-[45%] '>
                  COMPANY
                  <div className='flex flex-col text-base pt-2 font-light leading-7 '>
                    <NavLink to={AppRoutes.about}
                      onClick={() => window.scrollTo(0, 0)}
                     className='hover:text-[#a16afa] w-max '>
                      About Us
                    </NavLink>
                    <NavLink href=""className='hover:text-[#a16afa] w-max '>Careers</NavLink>
                    <NavLink href="" className='hover:text-[#a16afa] w-max'>Events</NavLink>
                  </div>
                </div>

                <div className='text-white text-[12px] font-medium border-l-2 border-[#a16afa] pl-8 w-[45%] max-md:pl-6  '>
                  SUPPORT
                  <div className='flex flex-col text-base pt-2 font-light leading-7 '>
                    <NavLink to={AppRoutes.contact}
                      onClick={() => window.scrollTo(0, 0)}
                       className='hover:text-[#a16afa] w-max '>
                        Contact Us
                    </NavLink>
                    <NavLink className='hover:text-[#a16afa] w-max'>Privacy Policy</NavLink>
                    <NavLink className='hover:text-[#a16afa] w-max'>Terms of Service</NavLink>
                  </div>
                </div>
                
              </div>
            </article>
          </div>
            
            {/* JUNE-SECTION */}
          <div className=' w-full text-white flex justify-between gap-10 max-md:flex-col-reverse max-md:items-start  items-center'>
            <div>
              <p className='font-normal mb-3 text-[12px]'>
                © Copyright 2025 June Infrastructure Technology Limited
              </p>

              <NavLink onClick={() => window.scrollTo(0, 0)}>
                <img src="/June-Logo.svg" alt="" className='w-40 max-lg:w-30 ' />
              </NavLink>
            </div>

            <div>
              <div className='flex  items-center gap-3 '>
                <span className="border-b-2 border-[#a16afa] w-12 block "></span>
                <span className='font-semibold text-[12px]'>EMAIL</span>
              </div>

               <a 
                href='mailto:info@juneinfra.com'
                target='_blank' rel="noopener noreferrer" className='cursor-pointer'
              >
                <p className='text-[20px] hover:text-[#a16afa] font-normal max-lg:text-base max-md:text-2xl'>
                  info@juneinfra.com
                </p>
              </a>
            </div>
            <div>
              <div className='flex  items-center gap-3 '>
                <span className="border-b-2 border-[#a16afa] w-12 block"></span>
                <span className='font-semibold text-[12px]'>PARTNERSHIP</span>
              </div>
              <a 
                href='mailto:partnerships@juneinfra.com'
                target='_blank' rel="noopener noreferrer" className='cursor-pointer'
              >
                <p className='text-[20px] hover:text-[#a16afa] font-normal max-lg:text-base max-md:text-2xl'>
                  partnerships@juneinfra.com
                </p>
              </a>
            </div>

             <div>
              <p className='text-sm text-center max-md:text-start font-normal'>Follow us</p>
              <div className='flex  items-center gap-3 mt-2 '>
                <a href='https://www.instagram.com/june.infra/' target='_blank' rel="noopener noreferrer" className='cursor-pointer'>
                  <img src="/instagram.svg" alt="" />
                </a>

                <a href='https://x.com/Juneinfra' target='_blank' rel="noopener noreferrer" className='cursor-pointer'>
                  <img src="/twitter.svg" alt=""  />
                </a>
                <a href="https://www.linkedin.com/company/juneinfra/" className='cursor-pointer' rel="noopener noreferrer"  target='_blank'>
                  <img src="/linkedln.svg" alt="" />
                </a>
              </div>
            </div>

          </div>

        </section>

        {/* VECTOR-IMG */}

        <div className='w-full max-md:h-20' >
          <img src="/FooterImage.svg" alt="" className="w-full h-full  object-cover" />
        </div>

      </footer>
    </>
  )
}

export default Footer