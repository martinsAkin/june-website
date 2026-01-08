import React from 'react'

const ProductDropdownCard = () => {
  return (
    <a href="https://skygrit.juneinfra.com/"
      target="_blank" rel="noopener" 
      className="bg-[#20113c] font-inter font-normal text-white px-4 pt-5 rounded-lg shadow-xl w-max max-lg:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.21)] max-md:mx-0 max-lg:w-full">
      <p className='text-base max-lg:text-base '>Get instant access to our products and tools to create, scale, and lead.</p>

      <blockquote className='bg-[#f4f4f4] rounded-lg p-4 my-5'>
        <img src="/Skygrit logo.svg" className="h-8 mb-2" />
        <p className="text-sm text-[#475467] max-md:text-base ">
          Revolutionizing Post-Booking Airline Customer Experience in Nigeria and Africa
        </p>
      </blockquote>
    </a>
  );
};

export default ProductDropdownCard;
