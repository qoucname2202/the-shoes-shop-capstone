import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
  cartAmount: 0,
  totalPrice: 0,
};

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addProdToCartAction: (state, action) => {},
    changeAmountProdAction: (state, action) => {},
    deleteProductAction: (state, action) => {},
    submitOrderProdAction: (state, action) => {},
    clearItemCartAction: (state, action) => {},
    calcTotalPriceAction: (state, action) => {},
  },
});

export const {
  addProdToCartAction,
  changeAmountProdAction,
  deleteProductAction,
  submitOrderProdAction,
  clearItemCartAction,
  calcTotalPriceAction,
} = cartReducer.actions;

export default cartReducer.reducer;
