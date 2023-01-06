import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Paginattion from '~/components/Pagination/Paginattion';
import { getProductDetailAPI } from '~/middleware/productAction';
import PreviewProduct from '../PreviewProduct';
import RelateProduct from '../RealateProduct/RelateProduct';

const MainDetail = () => {
  const { productDetail } = useSelector((state) => state.productReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const asyncProductById = getProductDetailAPI(id);
    dispatch(asyncProductById);
  }, [id]);
  return (
    <div className="container">
      <section className="w-11/2 md:4/5 m-auto flex items-center py-5">
        <PreviewProduct productDetail={productDetail} />
      </section>
      <div className="container">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Product Feature
          </h1>
        </div>
        <RelateProduct productDetail={productDetail} />
        <div className="flex items-center justify-center pb-5">
          <Paginattion />
        </div>
      </div>
    </div>
  );
};

export default MainDetail;
