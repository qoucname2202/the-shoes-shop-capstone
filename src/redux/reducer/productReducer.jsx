import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  productDetail: null,
  favouriteProductList: [],
  searchProductList: [],
  categoryList: [],
  storeList: [],
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductListAction: (state, action) => {
      state.productList = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
    getFavoriteProductAction: (state, action) => {},
    getSearchProductListAction: (state, action) => {},
    sortingSearchProduct: (state, action) => {},
    getAllCategoryAction: (state, action) => {
      state.categoryList = action.payload;
    },
    getProductByCategoryAction: (state, action) => {},
    getAllStoreAction: (state, action) => {
      state.storeList = action.payload;
    },
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
  getAllStoreAction,
} = productReducer.actions;

export default productReducer.reducer;
