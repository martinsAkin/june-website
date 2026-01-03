import {  Route, Routes } from "react-router-dom";

import { AppRoutes } from "./Utils/route";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import MainHome from "./Home/home";
import About from "./about/page";
import Solutions from "./solutions/page";
import Contact from "./contact/page";


function App() {

  return (
    <>
      
        <Navbar/>

       <Routes>
        <Route path="/" element={<MainHome/>} />
        <Route path={AppRoutes.about} element={<About/>} />
        <Route path={AppRoutes.solutions} element={<Solutions />} />
        <Route path={AppRoutes.contact} element={<Contact />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App 
