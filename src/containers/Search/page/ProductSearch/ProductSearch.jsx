import React from 'react';
import ProductItem from '../../../../components/ProductItem';

const ProductSearch = (props) => {
  let arrProduct = props.searchProductList;
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

export default ProductSearch;
