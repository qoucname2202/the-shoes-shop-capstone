import React from 'react';
import Paginattion from '~/components/Pagination/Paginattion';
import PreviewProduct from '../PreviewProduct';
import RelateProduct from '../RealateProduct/RelateProduct';

const MainDetail = () => {
  return (
    <div className="container">
      <section className="w-11/2 md:4/5 m-auto flex items-center py-5">
        <PreviewProduct />
      </section>
      <div className="container">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Product Feature
          </h1>
        </div>
        <RelateProduct />
        <div className="flex items-center justify-center pb-5">
          <Paginattion />
        </div>
      </div>
    </div>
  );
};

export default MainDetail;
