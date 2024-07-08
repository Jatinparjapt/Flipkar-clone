import React ,{useState , useEffect} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { NoAccounts } from '@mui/icons-material';
import { Logout } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../Images/logo.png"
import Alogo from "../Images/alogo.png"
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch  ,useSelector} from 'react-redux';
import { setSearchTerm,selectSearchTerm } from '../Redux/Search';
const Header = () => {
  //#5ed6d5

  const getCookies = Cookies.get("token")
  let user;
  if(getCookies){
    let email = localStorage.getItem("userEmail")
     let getName = email.split("@");
     user =  getName[0]
  }
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const searchTerm = useSelector(selectSearchTerm);
  const items = useSelector(state=>state.cart.cartItems)
  const logoutUser = ()=>{
    Cookies.remove("token")
    navigate("/login")
  }
  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
    // console.log(event.target.value)
  };
  return (
    <>
    <header className={`fixed mt-0 rounded-lg  z-30 w-full  shadow-2xl transition-colors  duration-300 bg-[#2874f0] `} >
    <nav>
    <div id="main  " className='   p-1' >
        <div className='  flex place-content-around p-3 items-center ' >
            <div className={` hover:text-white `}> <Link to={''} > 
           <img src={Logo} alt="loading..." className='' width={90}  /></Link></div>
            <div className="search  w-[65%] ">
              <div className='relative' >
              
              <input autoFocus  onChange={handleSearch} value={searchTerm || ''} className={`w-full animation outline-0 rounded-lg  border-b-2 focus:border-blue-500 p-2 pl-10 hover:bg-white `}   type="text " placeholder='Search For Products, Brands' />
                <div className="searchIcon absolute top-1 left-2  ">
                  <SearchIcon style={{fontSize : "2rem"}} />
                </div>
              </div>
            </div>
            <div className={user? "flex" :"hidden" }>
      <h1 className=' flex justify-center text-white rounded-xl text-xl  px-4 py-2 hover:bg-white hover:text-blue-500' >{user }</h1>
     </div>
            <div className="login hover:text-white ">
               <div className="relative inline-block text-left">
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="origin-top-left absolute left-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className='flex place-content-evenly' >
             <p className='text-black flex items-center ' > New customer?</p>
          <Link to="/signup" className="flex items-center px-4 py-2 text-base text-blue-600 hover:bg-gray-100" role="menuitem">Signup</Link>

            </div>
            <Link to="mailto:jatin3961jk@gmail.com" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Contect Us</Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">About Us</Link>
          </div>
        </div>
      )}
    </div>
   
              <Link to={"/login"} onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium rounded-xl text-white hover:bg-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" >
              {getCookies ? <p onClick={logoutUser} className='ml-2 flex items-center text-[17px]'  ><Logout/>Logout</p> : <>
               <img src={Alogo} className={"mix-blend-multiply bg-white "} title='Login' alt="loading..."  width={30} /> <span className='ml-2 flex items-center text-[17px] '>Login</span></> }


               </Link>
              </div>
             
            <div className="cart">
              <Link to={"/cart"} className={` flex justify-center text-white rounded-xl px-4 py-2 hover:bg-white hover:text-blue-500 `} >
              <ShoppingCartIcon title={"Cart"} />
              <sup className={` relative right-3 bottom-1 text-base px-1 `} >{items?items.length:0}</sup>
              </Link>
              </div>
        </div>
    </div>
    </nav>
   
    </header>
    </>
  )
}

export default Header