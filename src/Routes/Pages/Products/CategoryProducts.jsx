import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductById } from '../../../Redux/Products';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Star } from '@mui/icons-material';
import { Helmet } from 'react-helmet';
import Spiner from '../../../Components/Spiner';
const CategoryProducts = () => {
  const { category } = useParams(); // Get category parameter from URL
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProducts.products);

  useEffect(() => {
    dispatch(getAllProducts()); // Fetch all products on component mount
  }, [dispatch]);

  if (!products) {
    return <Spiner/>; // Display loading state until products are fetched
  }

  // Function to format currency
  const currencyFormatter = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Function to dispatch action to get product by id
  const getProudctById = (id) => {
    dispatch(getProductById(id));
  };

  // Filter products based on category parameter
  const filter = products.filter((product) => {
    if (category && product.category !== category) {
      return false; // Skip products not matching the category parameter
    }
    return true;
  });

  return (
    <>
    <Helmet>
        <title>{category}</title>
      </Helmet>
      <section className="mx-2 pt-20">
        <div className="main md:flex">
          <div className="items">
            <div className="flex flex-wrap gap-4 w-full h-full">
              {filter.map((item) => (
                <div key={item.id} className="shadow-2xl h-auto sm:w-60 md:w-72 mx-auto my-2">
                  <div className="flex justify-end w-full">
                    <FavoriteBorderIcon className="mr-7 mt-3 hover:text-[#2874f0]" />
                  </div>
                  <Link
                    onClick={() => {
                      getProudctById(item.id);
                    }}
                    to={`/product/${item.title}`}
                  >
                    <div>
                      <div key={item.id} className="flex w-full justify-center">
                        <img
                          className="object-contain mix-blend-multiply  w-auto rounded-2xl h-[18rem]"
                          title={item.title}
                          src={item.image}
                          alt="loading.."
                          loading="lazy"
                        />
                      </div>
                      <div className="content ml-3 font-semibold">
                        <p className={`${item.rating.rate < 3.5 ? 'text-red-600' : 'text-green-600'}`}>

                        <h2 className={ ` rounded-lg flex justify-center  w-[20%] ${item.rating.rate>3.5? "bg-green-600 text-white":"bg-red-600 text-white" }  text-xl`} >
              {item.rating.rate} {item.rating.rate>3.5?<Star/>: <StarHalfIcon className='text-xs' />}
            </h2>
                        </p>
                        <p className="text-xl" >{item.title}</p>
                        <p className='text-2xl' >{currencyFormatter(item.price)}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryProducts;
