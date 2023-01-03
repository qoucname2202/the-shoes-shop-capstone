import React, { Fragment } from 'react';
import Carousel from '~/components/Carousel';
import Paginattion from '~/components/Pagination/Paginattion';
import ProductFeature from '../ProductFeature';

const MainHome = () => {
  return (
    <Fragment>
      <Carousel />
      <div className="container">
        <div className="flex items-center justify-center pt-5">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Product Feature
          </h1>
        </div>
        <ProductFeature />
        <div className="flex items-center justify-center pb-5">
          <Paginattion />
        </div>
      </div>
    </Fragment>
  );
};

export default MainHome;
