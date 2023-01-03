import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { StarIcon } from '~/components/Icons';
import Fancybox from '~/components/ui/Fancybox';
import './Preview.scss';
const PreviewProduct = () => {
  const randomStar = (min = 3, max = 6) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return (
    <>
      <div className="w-full flex flex-col md:flex-row md:justify-between md:space-x-10 items-center">
        <div className="relative">
          <Fancybox>
            <a
              data-fancybox="gallery"
              href="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
              data-caption="Adidas Prophere Black White"
            >
              <img
                src="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
                alt="addias"
                className="object-fill w-full"
              />
            </a>
          </Fancybox>
        </div>
        <div className="space-y-5 p-5">
          <h1 className="text-4xl font-bold">Adidas Prophere Black White</h1>
          <div className="flex items-center">
            <h2 className="text-3xl mr-2">$430.00</h2>
            {Array.from(Array(randomStar()).keys(null)).map((item, idx) => {
              return (
                <Fragment key={idx}>
                  <StarIcon />
                </Fragment>
              );
            })}
          </div>
          {/* Short Description */}
          <p className="text-base font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore illo, natus rem debitis impedit error
            blanditiis nobis repellendus provident assumenda id. Qui, laudantium.
          </p>
          {/* Available size */}
          <div className="space-y-4">
            <h2 className="text-purple-600 text-xl font-semibold">Available Size</h2>
            <div className="space-x-3 flex items-center">
              <button className="w-10 h-10 bg-white rounded-full shadow-xl text-gray-500 flex justify-center items-center border-2 border-gray-500">
                <span>42</span>
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-xl text-gray-500 flex justify-center items-center border-2 border-gray-500">
                <span>43</span>
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-xl text-gray-500 flex justify-center items-center border-2 border-gray-500">
                <span>44</span>
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-xl text-gray-500 flex justify-center items-center border-2 border-gray-500">
                <span>45</span>
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-xl text-gray-500 flex justify-center items-center border-2 border-gray-500">
                <span>46</span>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="custom-number-input h-10 w-32">
              <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                  data-action="decrement"
                  className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-gray-600 focus:text-gray-600  md:text-basecursor-default flex items-center text-gray-700"
                  name="custom-input-number"
                  defaultValue={0}
                />
                <button
                  data-action="increment"
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </div>
          {/* Action */}
          <div className="flex items-center space-x-5">
            <button className="flex items-center space-x-2 border border-rose-400 px-5 py-3 rounded-md hover:border hover:border-gray-600 bg-gradient-to-r from-blue-400 to-purple-600 border-none text-white">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Add To Cart</span>
            </button>
            <button className="flex items-center space-x-2 border:none px-3 py-3 rounded-md bg-red-400 text-white">
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewProduct;
