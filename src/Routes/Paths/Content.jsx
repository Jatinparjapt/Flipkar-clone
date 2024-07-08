import React ,{Suspense , lazy} from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Routes, Route } from "react-router-dom";
import Spiner from '../../Components/Spiner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AllProducts from '../Pages/Products/AllProducts';

// import Signup from '../Pages/Auth/Signup';
const PageNotFound = lazy(()=>import('../Pages/Error/PageNotFound'))
const Term = lazy(()=>import("../Pages/CompanyHelp/Terms"))
const FAndQ = lazy(()=>import("../Pages/CompanyHelp/FAndQ"))
const About = lazy(()=>import("../Pages/CompanyHelp/About"))
const Help = lazy(()=>import('../Pages/CompanyHelp/Help'))
const HomeMainContant = lazy(()=>import("../HomeComponents/HomeMainContant"))
const Cart = lazy(()=>import("../Pages/Cart/Cart"))
const Login = lazy(()=>import("../Pages/Auth/Login"))
const Signup = lazy(()=>import("../Pages/Auth/Signup"))
const Product = lazy(()=>import("../Pages/ProductDescriptionPage/Product"))
const CategoryProducts = lazy(()=>import('../Pages/Products/CategoryProducts'))




const Content = () => {
  return (
    <>
    <Suspense fallback={<Spiner/>} >
    <Header/>
    {/* <Signup/> */}
    <Routes>
      <Route path='/' element={<HomeMainContant/>} />
      <Route path='/products/:category' element = {<CategoryProducts/>}/>
      <Route path='/product/:title' element = {<Product/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/help' element = {<Help/>}/>
      <Route path='/term' element = {<Term/>}/>
      <Route path='/fandq' element = {<FAndQ/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='*' element = {<PageNotFound/>}/>


    </Routes>


      <ToastContainer />
    <Footer/>
    </Suspense>
    </>
  )
}

export default Content