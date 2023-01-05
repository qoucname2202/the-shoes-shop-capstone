import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { HeartIcon, StarIcon } from '~/components/Icons';
import Fancybox from '~/components/ui/Fancybox';
import Button from '~/components/Button';
const ProductItem = () => {
  const randomStar = (min = 3, max = 6) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return (
    <>
      <div className="col-12 col-lg-4 animate__animated animate__zoomIn animate__delay-1s md:flex md:items-center md:justify-center flex-md-column md:mb-5">
        <div className="w-full max-w-md p-6 bg-gray-700 shadow-lg rounded-xl">
          <div className="flex flex-col ">
            <div className="">
              <div className="relative w-full mb-1 h-62">
                <div className="absolute top-0 right-0 flex flex-col p-3">
                  <button className="w-10 h-10 p-1 text-center text-gray-500 transition duration-300 ease-in bg-gray-800 rounded-full shadow hover:text-purple-500 hover:shadow-md">
                    {/* <HeartIcon fill={'currentColor'} stroke={''} /> */}
                    <HeartIcon />
                  </button>
                </div>
                <Fancybox>
                  <a
                    data-fancybox="gallery"
                    href="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
                    data-caption="Adidas Prophere Black White"
                  >
                    <img
                      src="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
                      alt="addias"
                      className="object-fill w-full rounded-2xl"
                    />
                  </a>
                </Fancybox>
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap ">
                  <div className="flex items-center justify-between w-full min-w-0 ">
                    <h2 className="mr-auto text-2xl text-gray-200 truncate cursor-pointer hover:text-purple-500 ">
                      Adidas Prophere Black White
                    </h2>
                  </div>
                </div>
                <div className="flex items-center mt-2.5 mb-3">
                  {Array.from(Array(randomStar()).keys(null)).map((item, idx) => {
                    return (
                      <Fragment key={idx}>
                        <StarIcon />
                      </Fragment>
                    );
                  })}
                  {randomStar() % 2 === 0 ? (
                    <div className="flex items-center px-2 py-1 ml-3 text-xs text-white bg-red-400 rounded-lg">HOT</div>
                  ) : (
                    <div className="flex items-center px-2 py-1 ml-3 text-xs text-white bg-purple-500 rounded-lg">
                      SALE
                    </div>
                  )}
                </div>
                <div className="flex justify-between mt-2 space-x-2 text-sm font-medium">
                  <div className="mt-1 text-2xl font-semibold text-white md:text-[15px] lg:text-2xl">$240.00</div>
                  <Button name="animate-button">
                    <FontAwesomeIcon icon={faShoppingCart} className=""></FontAwesomeIcon>
                    Buy now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
