import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '~/components/Carousel';
import Paginattion from '~/components/Pagination/Paginattion';
import { getProductAPI } from '~/middleware/productAction';
import { getProductFavoriteApi } from '~/middleware/userAction';
import ProductFeature from '../ProductFeature';

const MainHome = () => {
  const { productList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const asyncProductAction = getProductAPI();
    dispatch(asyncProductAction);
  }, []);
  useEffect(() => {
    const asyncFavouriteAction = getProductFavoriteApi();
    dispatch(asyncFavouriteAction);
  }, []);
  return (
    <Fragment>
      <Carousel />
      <div className="container">
        <div className="flex items-center justify-center pt-5">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Product Feature
          </h1>
        </div>
        <ProductFeature productList={productList} />
        <div className="flex items-center justify-center pb-5">
          <Paginattion />
        </div>
      </div>
    </Fragment>
  );
};

export default MainHome;
