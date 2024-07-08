import React, {Suspense, lazy }  from 'react'
import { Helmet } from 'react-helmet'
/*import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load components

const Home = lazy(() => import('./Home')); */
import Spiner from '../../Components/Spiner'
const Category = lazy(()=>import("../NavbarCategory/Category"))
const Slider = lazy(()=>import("../Slider/Slider"))
const AllProducts = lazy(()=>import("../Pages/Products/AllProducts"))
const HomeMainContant = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
      </Helmet>
    <Suspense fallback={<Spiner/>} >
      <Category/> 
      <Slider/> 
      <AllProducts/>
    </Suspense>

    </>
  )
}

export default HomeMainContant