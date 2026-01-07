import {  Route, Routes } from "react-router-dom";

import { AppRoutes } from "./Utils/route";
// import Navbar from "./component/Navbar";
// import Footer from "./component/footer";
import MainLayout from "./Layouts/MainLayout";
import MainHome from "./Home/home";
import About from "./about/page";
import Solutions from "./solutions/page";
import Contact from "./contact/page";
import PageNotfound from "./component/PageNotfound";


function App() {

  return (
    <>
      
        {/* <Navbar/> */}

       <Routes>
        <Route path="/" element={<MainLayout/>} >
        <Route path="/" element={<MainHome/>} />
        <Route path={AppRoutes.about} element={<About/>} />
        <Route path={AppRoutes.solutions} element={<Solutions />} />
        <Route path={AppRoutes.contact} element={<Contact />} />
        </Route>
        <Route path={AppRoutes.pagenotfound} element={<PageNotfound />} />
      </Routes>

      {/* <Footer/> */}
    </>
  )
}

export default App 
