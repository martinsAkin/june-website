import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MobileButton } from "../component/button";
import ProductDropdownCard from "./ProductDropdownCard";

const MobileSidebar = ({ menuOpen, setMenuOpen, navLinks,closeDropdown }) => {

  const [productOpen, setProductOpen] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 z-999 h-full w-full sm:w-full overflow-scroll bg-[rgba(32,17,60,1)] text-white px-3 py-6 transform transition-transform duration-300 max-lg:block hidden ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* TOP — LOGO + CLOSE */}
      <div className="flex items-center justify-between mb-3">
        <img src="/June-Logo.svg" className="w-25" />
        <img
          src="/close-menu.svg"
          className="w-6 cursor-pointer"
          onClick={() => {
            setMenuOpen(false)
            closeDropdown()
          }}
        />
      </div>

      {/* NAV LINKS */}
     <section className={`px-3 mt-10 ${menuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col gap-3 text-[24px] font-georama">
          {navLinks.map((link, index) => {
          if (link.dropdown) {
            return (
              <div key={index}>
                <button
                  onClick={() => setProductOpen(!productOpen)}
                  className="font-medium text-white  font-georama px-2  py-2 flex items-center gap-2 hover:text-gray-300"
                >
                  {link.name}
                  <img 
                    src="/dropdown.svg"
                    className={`transition-transform duration-300 ${productOpen ? "rotate-180" : ""}`}
                  />
                </button>

               {/* PRODUCT DROPDOWN */}
        
              {productOpen && (
                <div className=" w-full flex justify-start  ">
                  <ProductDropdownCard />
                </div>
              )}
              </div>
                    );
                  }

          return (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => {
                closeDropdown();
                setMenuOpen(false)
              }}
              className={({ isActive }) =>
                ` font-medium text-white font-georama px-2  py-1 ${
                  isActive ? "text-purple-400 " : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          );
        })}

        </nav>

        {/* PRODUCT DROPDOWN */}
{/*         
              {productOpen && (
                <div className="fixed top-[65px] left-0 w-full flex justify-center z-9999">
                  <ProductDropdownCard />
                </div>
              )} */}

        {/* BUTTON */}
        <div className="mt-4 w-45">
          <MobileButton text={"Get In Touch"} logo={"/arrow-right.svg"} />
        </div>
      </section>  

      {/* Bottom Decoration */}
        <img
        src="/menu-vector.svg"
        className="absolute bottom-0 right-0 w-55 max-xsm:hidden hide-in-landscape  "
      />
      
    </div>
  );
};

export default MobileSidebar;
