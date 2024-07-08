import React, { useState, useEffect } from 'react'
import men from "../../Images/men.jpg"
import woman from "../../Images/woman.jpg"
import jewelery from "../../Images/jwelery.jpg"
import electronic from "../../Images/electronic.jpg"
import { useDispatch, useSelector } from 'react-redux'
import {getCategoryFromDatabase} from "../../Redux/Category"
import { Link } from 'react-router-dom'
import Spiner from '../../Components/Spiner'
const Category = () => {
  const images = [
electronic ,jewelery ,men ,woman
  ]
  const category = useSelector(state=>state.getCategory.categoriesData)
  // console.log(category , "from home page")
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
    // const [isOpen , setIsOpen] = useState(false)
    useEffect(() => {
      dispatch(getCategoryFromDatabase())
    }, [dispatch])
    if(!category){
      return (
        <Spiner/>
      )
    }
  return (
    <>
    <section className='mx-2 pt-20  ' >
    {/* <div className="relative inline-block text-left">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        Options
      </button>
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Account settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Support</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">License</a>
          </div>
        </div>
      )}
    </div> */}
        <div className="category pt-2 pb-3 px-3 w-full flex justify-center ">
            <div className="main w-full  bg-white flex md:gap-5 gap-2 place-content-evenly ">
                {category.map((item, index)=>(
                  <Link key={index} to={`/products/${item}`} >
                  <div   className="item1Grocry hover:bg-[#f0eeee] rounded-xl px-2 hover:text-slate-950 py-1 ">
                        <div className="image">
                            <img src={images[index]} className='object-contain rounded-full h-10 w-10 mix-blend-multiply ' width={40} height={40} title={item} alt="loading..." />
                        </div>
                        <span className='rotate-on-hover'  >
                           {item}
                        </span>
                    </div>
                    </Link>
                ))}
                    
                    
                    {/* flipkart like show category when hover */}
                     {/* <div className="item3Fashion">
                    <div className="image">
                            <img src={CategoryImage} width={40} height={40} alt="loading..." />
                        </div>
                        <span className='rotate-on-hover' >
                           Fashion <button className='-rotate-90 rotate-on text-[18px] font-bold py-[1px] ml-[1px] -mt-[1px]' >{'<'}</button>
                        </span>
                    </div> */}
                    
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Category