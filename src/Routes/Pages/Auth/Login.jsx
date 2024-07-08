// src/Login.js
import React , {useEffect} from 'react';
import { Link  ,useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import LoginImage from "../../../Images/LoginPageImage.png"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../Redux/Login';
import Cookies from 'js-cookie';
import { auth ,signInWithEmailAndPassword } from '../../../Firebase/Firebase';
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(() => {
    const getToken = Cookies.get("token")
   if(getToken){
    toast.info('Already Login User ', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
    navigate("/")
   }
  }, [navigate])
  const onSubmit = async (data)=>{
    try {

    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;
    if(user){
      // console.log('User signed in:', user);
      dispatch(loginUser({accessToken: user.accessToken, email: user.email}))
      toast.success('User Logged In', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
        navigate("/")
      // console.log(data)
    }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
                toast.info('This email is already registered. Please use a different email or log in.', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });

      } 
      console.error('Error signing up:', error.code, error.message);
    
    }
    
  }
  return (
    <>
    <Helmet>
        <title>Login</title>
      </Helmet>
  <section className='pt-20' >
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl flex">
      <div
        className=" hidden md:block lg:w-1/2 bg-contain bg-bottom bg-no-repeat bg-blue-500 "
        style={{ backgroundImage: `url(${LoginImage})` }}
      >
        <div className="flex items-center justify-center h-full bg-blue-900 bg-opacity-50">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <p className="text-lg">Get access to your Orders,<br/> Wishlist and Recommendations</p>
          </div>
        </div>
      </div>

        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Signup to Flipkart</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">Email  <sup className='text-red-500' >*</sup> </label>
              <input autoFocus type="email" {...register('email', { required: true })} id="username" className="w-full focus:border-sky-500 animation px-3 py-2  outline-0 border-b-2 rounded" placeholder="Enter your email"  />
              {errors.email && <span className='text-orange-500' >This field is required * </span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password<sup className='text-red-500' > *</sup></label>
              <input type="password" id="password" {...register('password', { required: true })} className="w-full px-3 py-2 animation outline-0 border-b-2 focus:border-sky-500 rounded" placeholder="Enter your password"  />
              {errors.password && <span>This field is required *</span>}

            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">Login</button>
          </form>
          <p className="mt-4 text-center text-gray-600">Already have an account? <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link></p>
        </div>
      </div>
    </div>
  </section></>
  );
};

export default Login;
