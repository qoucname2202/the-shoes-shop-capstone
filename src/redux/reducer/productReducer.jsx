import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  productDetail: null,
  favouriteProductList: [],
  searchProductList: [],
  categoryList: [],
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductListAction: (state, action) => {},
    getProductDetailAction: (state, action) => {},
    getFavoriteProductAction: (state, action) => {},
    getSearchProductListAction: (state, action) => {},
    sortingSearchProduct: (state, action) => {},
    getAllCategoryAction: (state, action) => {},
    getProductByCategoryAction: (state, action) => {},
  },
});

export const {
  getProductListAction,
  getProductDetailAction,
  getFavoriteProductAction,
  getSearchProductListAction,
  sortingSearchProduct,
  getAllCategoryAction,
  getProductByCategoryAction,
} = productReducer.actions;

export default productReducer.reducer;
