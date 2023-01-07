import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductFavoriteApi } from '~/middleware/userAction';

import ProductFavourite from '../ProductFavourite';

const FavouriteMain = () => {
  const { favouriteProductList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const asyncFavouriteAction = getProductFavoriteApi();
    dispatch(asyncFavouriteAction);
  }, []);
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
            {favouriteProductList.length}
          </strong>{' '}
          products
        </span>
      </div>
      <ProductFavourite favouriteProductList={favouriteProductList} />
    </div>
  );
};

export default FavouriteMain;
