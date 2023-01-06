import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimationText from '../AnimationText';
import Button from '../Button';
import Fancybox from '../ui/Fancybox';
import './Carousel.scss';

const Carousel = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="carouselExampleCaptions" className="relative carousel slide" data-bs-ride="carousel">
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
        </div>
        <div className="relative w-full overflow-hidden bg-gray-700 carousel-inner">
          <div className="relative float-left w-full carousel-item active">
            <div className="flex items-center justify-center gap-5">
              <Fancybox>
                <a
                  data-fancybox="gallery"
                  href="https://shop.cyberlearn.vn/images/adidas-prophere.png"
                  data-caption="Adidas Prophere"
                >
                  <img src="https://shop.cyberlearn.vn/images/adidas-prophere.png" className="" alt="adidas-prophere" />
                </a>
              </Fancybox>
              <div className="">
                <AnimationText>Adidas Prophere</AnimationText>
                <p className="mt-2 mb-5 text-white animate__animated animate__zoomIn animate__delay-2s">
                  The midsole contains 20% more Boost for an amplified Boost feeling.
                </p>
                <Button
                  onClick={() => {
                    navigate(`/detail/${1}`);
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Buy now
                </Button>
              </div>
            </div>
          </div>
          <div className="relative float-left w-full carousel-item">
            <div className="flex items-center justify-center gap-5">
              <Fancybox>
                <a
                  data-fancybox="gallery"
                  href="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
                  data-caption="Adidas Prophere Black White"
                >
                  <img
                    src="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
                    className=""
                    alt="adidas-prophere-black-white"
                  />
                </a>
              </Fancybox>
              <div className="">
                <AnimationText>Adidas Prophere Black White</AnimationText>
                <p className="mt-2 mb-5 text-white animate__animated animate__zoomIn animate__delay-2s">
                  The midsole contains 20% more Boost for an amplified Boost feeling.
                </p>
                <Button
                  onClick={() => {
                    navigate(`/detail/${2}`);
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Buy now
                </Button>
              </div>
            </div>
          </div>
          <div className="relative float-left w-full carousel-item">
            <div className="flex items-center justify-center gap-5">
              <Fancybox>
                <a
                  data-fancybox="gallery"
                  href="https://shop.cyberlearn.vn/images/adidas-swift-run.png"
                  data-caption="Adidas Prophere Black White"
                >
                  <img
                    src="https://shop.cyberlearn.vn/images/adidas-swift-run.png"
                    className=""
                    alt="adidas-swift-run"
                  />
                </a>
              </Fancybox>
              <div className="">
                <AnimationText>Adidas Swift Run</AnimationText>
                <p className="mt-2 mb-5 text-white animate__animated animate__zoomIn animate__delay-2s">
                  The midsole contains 20% more Boost for an amplified Boost feeling.
                </p>
                <Button
                  onClick={() => {
                    navigate(`/detail/${5}`);
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Buy now
                </Button>
              </div>
            </div>
          </div>
          <div className="relative float-left w-full carousel-item">
            <div className="flex items-center justify-center gap-5">
              <Fancybox>
                <a
                  data-fancybox="gallery"
                  href="https://shop.cyberlearn.vn/images/adidas-super-star-red.png"
                  data-caption="Adidas Prophere Black White"
                >
                  <img
                    src="https://shop.cyberlearn.vn/images/adidas-super-star-red.png"
                    className=""
                    alt="adidas-super-star-red"
                  />
                </a>
              </Fancybox>
              <div className="">
                <AnimationText>Adidas Super Star Red</AnimationText>
                <p className="mt-2 mb-5 text-white animate__animated animate__zoomIn animate__delay-2s">
                  The midsole contains 20% more Boost for an amplified Boost feeling.
                </p>
                <Button
                  onClick={() => {
                    navigate(`/detail/${4}`);
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Buy now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="inline-block text-gray-800 bg-no-repeat carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="inline-block text-gray-800 bg-no-repeat carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
