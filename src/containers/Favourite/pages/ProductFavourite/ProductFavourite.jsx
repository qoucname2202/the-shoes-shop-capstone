import React from 'react';
import FavouriteItem from '~/components/FavouriteItem';

const ProductFavourite = (props) => {
  let arrFavouriteList = props.favouriteProductList;

  return (
    <>
      <div className="py-5 row">
        {arrFavouriteList && arrFavouriteList.length > 0
          ? arrFavouriteList.map((prod, idx) => {
              return <FavouriteItem prod={prod} key={idx} />;
            })
          : null}
      </div>
    </>
  );
};

export default ProductFavourite;
