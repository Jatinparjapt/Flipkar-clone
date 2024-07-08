import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import UPIImage from "../Images/upi.jpeg"
import VisaImage from "../Images/visa.png"
import RupayImage from "../Images/rupay.png"
import MasterImage from "../Images/mastercard.png"
const Footer = () => {
  return (
    <>
    <footer>
        <div className="footerMain pt-4 bg-black  text-white">
            <div className="footerParts p-3   ">
                <div className=" inline-grid grid-cols-2 md:flex w-full md:w-auto justify-center items-center md:items-start  md:place-content-around  ">
                    <div className="second p-2 ">
                        <h3 className='text-xl'>Products</h3>
                        <div className="links flex flex-col ">
                            <Link to={"/products/electronics"} >Electronics</Link>
                            <Link to={"/products/jewelery"} >Jewelery</Link>
                            <Link to={"/products/men's clothing"} >Men's Clothing</Link>
                            <Link to={"/products/women's clothing"} >Woman's Clothing</Link>
                        </div>
                    </div>
                    <div className="third p-2 ">
                        <h3 className='text-xl' >Company</h3>
                        <div className="policys flex flex-col">
                            <Link to={"/help"} >Help</Link>
                            <Link to={"/fandq"} >FAQs</Link>
                            <Link to={"/term"} >Terms </Link>
                                                <Link to={"/about"} >About Us</Link>
                            
                        </div>
                    </div>
                    <div className="fourth p-2 ">
                        <h3 className='text-xl'>Follow Us</h3>
                        <div className="socialMedia flex flex-col ">
                            <Link to={"https://www.instagram.com/jatin_prajapat_ji"} > <Instagram className='mx-3' /> Instagram</Link>
                            <Link to={"https://www.facebook.com/jatinparjapte.parjapte"} > <Facebook className='mx-3' />  Facebook</Link>
                            <Link to={"https://github.com/Jatinparjapt"} > <GitHub className='mx-3' />  Github</Link>
                        </div>
                    </div>
                        <hr className='bg-white hidden md:block py-20 px-[1px] ' />
                    <div className="mail ">
                        <h2 className='text-xl' > Contect Us </h2>

                    <Link to={"mailto:jatin3961jk@gmail.com"} >Mail @ Help </Link>
                   
                </div>
                <div className="address flex justify-center ">
                <div className="container  mx-auto px-4">
        <p className="">
          Flipkart Internet Private Limited,
        </p>
        <p className="">
          Outer Ring Road, Devarabeesanahalli Village,
        </p>
        <p className="">
          Bengaluru, 560103, Karnataka, India
        </p>
        <p className="mb-2">
          Telephone: 044-45614700 / 044-67415800
        </p>
      </div>
                </div>
                </div>
                <hr  className='w-full mt-4 bg-white ' />
                <div className="copyrights flex justify-center  w-full ">
                  <div className="helps flex place-content-around w-full ">
                    <div className="copyright"> &copy; 2007-2024 FlipkartClone.com</div>
                    <div className="images flex flex-wrap space-x-4 w-auto ">
                        <img src={UPIImage} alt="loading.."  width={50} className=' object-contain' />
                        <img src={RupayImage} alt="loading.." width={50} className=' object-contain' />
                        <img src={VisaImage} alt="loading.." width={50} className=' object-contain' />
                        <img src={MasterImage} alt="loading.." width={50} className=' object-contain' />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </footer>



    </>
  )
}

export default Footer