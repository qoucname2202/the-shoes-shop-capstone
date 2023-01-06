import React from 'react';
import ProductItem from '~/components/ProductItem';

const RelateProduct = (props) => {
  return (
    <>
      <div className="py-5 row justify-center items-center">
        {props?.productDetail?.relatedProducts && props?.productDetail?.relatedProducts?.length > 0
          ? props?.productDetail?.relatedProducts?.map((prod, idx) => {
              return <ProductItem prod={prod} key={idx} />;
            })
          : null}
      </div>
    </>
  );
};

export default RelateProduct;
