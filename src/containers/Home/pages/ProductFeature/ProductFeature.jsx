import React from 'react';
import ProductItem from '../../../../components/ProductItem';

const ProductFeature = (props) => {
  let arrProduct = props.productList;
  return (
    <>
      <div className="py-5 row">
        {arrProduct && arrProduct.length > 0
          ? arrProduct.map((prod, idx) => {
              return <ProductItem prod={prod} key={idx} />;
            })
          : null}
      </div>
    </>
  );
};

export default ProductFeature;
