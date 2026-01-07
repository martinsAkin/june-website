import React from 'react'
import { Link } from "react-router-dom";
import { AppRoutes } from '../Utils/route';


const PageNotfound = () => {
  return (
    <div className="min-h-screen p-16 text-center ">
      <h1 className='font-bold'>404 Error</h1>
      <h2>Page Not Found!!</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to={AppRoutes.home} className='text-purple-600 underline '>Go Back Home</Link>
    </div>

  )
}

export default PageNotfound