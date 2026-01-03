import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppRoutes } from '../Utils/route'
import {Button} from '../component/button'
import MobileSidebar from './MobileSidebar'
import ProductDropdownCard from './ProductDropdownCard'

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: AppRoutes.about },
  { name: "Solutions", path:AppRoutes.solutions },
  { name: "Products", path: null, dropdown:true },
  { name: "Contact", path: AppRoutes.contact },
];

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false);
  const closeDropdown = () => setProductOpen(false);


  return (

   <> 
      <nav className="fixed top-0 left-0 z-50 w-full py-2 text-white px-20 max-md:px-4 max-lg:px-10 bg-black/70 backdrop-blur-md">
        <section className='flex items-center justify-between 2xl:w-400 2xl:right-0 2xl:justify-self-center'>
          <Link to={AppRoutes.home} onClick={closeDropdown} >
            <section className="flex items-center font-bold ">
              <div className="overflow-hidden w-30 max-sm:w-25">
                <img src="/June-Logo.svg" className="w-full " />
              </div>
            </section>
          </Link>
          {/* NAV ITEMS — MAPPED */}
          <div className="max-lg:hidden flex items-center gap-6 text-white">
           {navLinks.map((link, index) => {
            if (link.dropdown) {
              return (
                <button
                  key={index}
                  onClick={() => setProductOpen(!productOpen)}
                  className="font-medium text-white text-base  px-4 py-2 flex items-center gap-2 hover:text-gray-300"
                >
                  {link.name}
                  <img
                    src="/dropdown.svg"
                    className={`transition-transform duration-300 ${productOpen ? "rotate-180" : ""}`}
                  />
                </button>
                      );
                    }
            return (
              <NavLink
                key={index}
                to={link.path}
                onClick={closeDropdown}
                className={({ isActive }) =>
                  `font-medium text-white text-base px-4 py-2 ${
                    isActive ? "bg-[#a16afa]" : "hover:text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
          </div>
          {/* Mobile menu button */}
          <div
            className="max-lg:block hidden cursor-pointer "
            onClick={() => setMenuOpen(true)}
          >
          <img src="/menu.svg" alt="" />
          </div>
          <a
            href="mailto:partnerships@juneinfra.com"
            target="_blank"
            className="max-lg:hidden"
          >
            <Button text={"Get in Touch"} logo={"/arrow-right.svg"}/>
          </a>
        </section>
      </nav>  

      {/* PRODUCT DROPDOWN */}

      {productOpen && (
        <div className="fixed top-[65px] left-0 w-full flex justify-center z-9999">
          <ProductDropdownCard />
        </div>
      )}

      {/* MOBILE SIDEBAR COMPONENT */}
        <MobileSidebar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navLinks={navLinks}
          // productOpen={productOpen}
          // setProductOpen={setProductOpen}
          closeDropdown={closeDropdown}
        />
    </>
 
  ) 
}

export default Navbar