import { createSlice } from '@reduxjs/toolkit';
import { history } from '~/index';
import { getStoreJson, USER_SIGNIN } from '~/services/Utils/config';
import { toast } from 'react-toastify';
const initialState = {
  cartList: [],
  totalPrice: 0,
};

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addProdToCartAction: (state, action) => {
      let user = getStoreJson(USER_SIGNIN);
      if (!user.accessToken) {
        return history.push('/signin');
      }
      let { cartList } = state;
      let { id, quantity } = action.payload;
      let idxItem = cartList.findIndex((item) => item.id === id);
      if (idxItem !== -1) {
        cartList[idxItem] = {
          ...cartList[idxItem],
          quantity: cartList[idxItem].quantity + quantity,
        };
        toast.info(`Increased quantity successfully`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        cartList = [...cartList, action.payload];
        toast.success('Add product to cart successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
      state.cartList = cartList;
    },
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
