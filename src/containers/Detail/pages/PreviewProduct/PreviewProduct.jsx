import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { StarIcon } from '~/components/Icons';
import Fancybox from '~/components/ui/Fancybox';
import 'react-toastify/dist/ReactToastify.css';
import './Preview.scss';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addProdToCartAction } from '~/redux/reducer/cartReducer';
import { ToastContainer } from 'react-toastify';
const PreviewProduct = (props) => {
  let product = props.productDetail;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [sizeChange, setSizeChange] = useState('36');
  const handleChangeQuantity = (amount) => {
    if (quantity < 2 && amount === -1) {
      return toast.error(`Quantity must be more than 1`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    setQuantity(quantity + amount);
  };
  const randomStar = (min = 3, max = 6) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const handleAddToCart = () => {
    const action = addProdToCartAction({ ...product, quantity });
    dispatch(action);
  };
  return (
    <>
      <div className="w-full flex flex-col md:flex-row md:justify-between md:space-x-10 items-center">
        <div className="relative">
          <Fancybox>
            <a data-fancybox="gallery" href={product?.image} data-caption="Adidas Prophere Black White">
              <img src={product?.image} alt={product?.alias} className="object-fill w-full" />
            </a>
          </Fancybox>
        </div>
        <div className="space-y-5 p-5">
          <h1 className="text-4xl font-bold">{product?.name}</h1>
          <div className="flex items-center">
            <h2 className="text-3xl mr-2">{`$${product?.price}.00`}</h2>
            {Array.from(Array(randomStar()).keys(null)).map((item, idx) => {
              return (
                <Fragment key={idx}>
                  <StarIcon />
                </Fragment>
              );
            })}
          </div>
          {/* Short Description */}
          <p className="text-base font-normal">{product?.shortDescription}</p>
          <p className="text-base font-normal">{product?.description}</p>
          {/* Available size */}
          <div className="space-y-4">
            <h2 className="text-purple-600 text-xl font-semibold">Available Size</h2>
            <div className="space-x-3 flex items-center">
              {product?.size && product?.size.length > 0
                ? product?.size.map((size, idx) => {
                    return (
                      <button
                        className={
                          sizeChange === size
                            ? 'w-10 h-10 bg-white rounded-full shadow-xl text-purple-500 flex justify-center items-center border-2 border-purple-600 focus:border-purple-700 focus:text-purple-700'
                            : 'w-10 h-10 bg-white rounded-full shadow-xl text-gray-500 flex justify-center items-center border-2 border-gray-500'
                        }
                        key={idx}
                        onClick={() => {
                          setSizeChange(size);
                        }}
                      >
                        <span>{size}</span>
                      </button>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="space-y-4">
            <div className="custom-number-input h-10 w-32">
              <div className="flex items-center flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                  data-action="decrement"
                  className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  onClick={() => {
                    handleChangeQuantity(-1);
                  }}
                >
                  <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <span className="font-semibold text-md hover:text-gray-600 focus:text-gray-600  md:text-basecursor-default flex items-center text-gray-700 bg-gray-300 py-2 px-3">
                  {quantity}
                </span>
                <button
                  data-action="increment"
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  onClick={() => {
                    handleChangeQuantity(1);
                  }}
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </div>
          {/* Action */}
          <div className="flex items-center space-x-5">
            <button
              className="flex items-center space-x-2 border border-rose-400 px-5 py-3 rounded-md hover:border hover:border-gray-600 bg-gradient-to-r from-blue-400 to-purple-600 border-none text-white"
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Add To Cart</span>
            </button>
            <button className="flex items-center space-x-2 border:none px-3 py-3 rounded-md bg-red-400 text-white">
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default PreviewProduct;
