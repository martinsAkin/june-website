import React from 'react'
import Hero from '../pages/Hero';
import WhyJune from '../pages/WhyJune';
import Built from '../pages/Built';
import Explore from '../pages/Explore';
//import Testimony from '../pages/Testimony';  commented out by Abraham

// MainHome Component
// const MainHome = () => {
//   return (
//     <div className="w-full">
//       <Hero />
//       <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
//         <WhyJune />
//         <Built />
//       </div>
//       <Testimony />
//       <Explore />
//     </div>
//   );
// };

// export default MainHome;


const MainHome = () => {
  return (
    <>
      <Hero />
      <div className='px-20 max-lg:px-8 max-md:px-6 '>
        <WhyJune/>
        <Built/>
      </div>
      {/*<Testimony/>*/}
      <Explore/>
    </>
  )
}

export default MainHome
