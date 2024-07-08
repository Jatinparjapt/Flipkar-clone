import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import LoginPageImage from "../../../Images/LoginPageImage.png"
import { useDispatch } from 'react-redux';
import { signupUser } from '../../../Redux/Login';
import { auth, createUserWithEmailAndPassword ,db } from '../../../Firebase/Firebase';
import {doc ,setDoc} from "firebase/firestore";
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(() => {
    const getToken = Cookies.get("token")
   if(getToken){

    toast.info('User Already Login ', {
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
  }, [])

  const onSubmit = async (data) => {
    // Handle form submission
    try {
      const userData = await createUserWithEmailAndPassword(auth, data.email, data.password);
    if (userData) {
      setDoc(doc(db,"users",userData.user.uid ), {
        displayName : data.displayName,
        phoneNumber :  data.phoneNumber,
        createdAt: new Date()
      })
        // alert("Verification email sent. Please check your inbox.");
        toast.info('Verification email sent. Please check your inbox. ', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
        dispatch(signupUser({accessToken: userData.accessToken, email: userData.email}));
        navigate("/")
      }
    }
    catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        toast.error('This email is already registered. Please use a different email or log in.', {
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
      console.error('Error signing up:', err.code, err.message);
    
    }
   
    // console.log(userData._tokenResponse , "comp");
  };
  
 

  return (
    <>
    <Helmet>
        <title>Sign Up</title>
      </Helmet>
    <section className="pt-20">
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl flex">
          <div
            className="hidden md:block lg:w-1/2 bg-contain bg-bottom bg-no-repeat bg-blue-500"
            style={{ backgroundImage: `url(${LoginPageImage})` }}
          >
            <div className="flex items-center justify-center h-full bg-blue-900 bg-opacity-50">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl font-bold mb-4">Login</h1>
                <p className="text-lg">Get access to your Orders, <br /> Wishlist and Recommendations</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Signup to Flipkart</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="displayName">User Name <sup className='text-red-500'>*</sup></label>
                <input
                  type="text" autoFocus
                  {...register('displayName', { required: true })}
                  id="displayName"
                  className="w-full focus:border-sky-500 animation px-3 py-2 outline-0 border-b-2 rounded"
                  placeholder="Enter your user name"
                />
                {errors.displayName && <span className='text-orange-500'>This field is required *</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email <sup className='text-red-500'>*</sup></label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  id="email"
                  className="w-full focus:border-sky-500 animation px-3 py-2 outline-0 border-b-2 rounded"
                  placeholder="Enter your email"
                />
                {errors.email && <span className='text-orange-500'>This field is required *</span>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">Password <sup className='text-red-500'>*</sup></label>
                <input
                  type="password"
                  id="password"
                  {...register('password', { required: true })}
                  className="w-full px-3 py-2 animation outline-0 border-b-2 focus:border-sky-500 rounded"
                  placeholder="Enter your password"
                />
                {errors.password && <span className='text-orange-500'>This field is required *</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Number <sup className='text-red-500'>*</sup></label>
                <input
                  type="number"
                  {...register('phoneNumber', { required: true })}
                  id="phoneNumber"
                  className="w-full focus:border-sky-500 animation px-3 py-2 outline-0 border-b-2 rounded"
                  placeholder="Enter your email"
                />
                {errors.phoneNumber && <span className='text-orange-500'>This field is required *</span>}
              </div>
             
             
              
              <div className="flex items-center justify-between mt-4">
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"> Create Account </button>
              </div>
            </form>
            <p className="mt-4 text-center text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Signup;
