import React from 'react';
import ProductFavourite from '../ProductFavourite';

const FavouriteMain = () => {
  return (
    <div className="container py-5">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Favourite Product
        </h1>
      </div>
      <div className="pt-5">
        <span>
          Show all{' '}
          <strong className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            0
          </strong>{' '}
          products
        </span>
      </div>
      <ProductFavourite />
    </div>
  );
};

export default FavouriteMain;
