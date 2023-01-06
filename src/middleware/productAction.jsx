import axios from 'axios';
import { getAllCategoryAction, getAllStoreAction, getProductListAction } from '~/redux/reducer/productReducer';
// Get Product
export const getProductAPI = () => {
  return async (dispatch) => {
    try {
      await axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
      }).then((res) => {
        const data = res.data.content;
        const action = getProductListAction(data);
        dispatch(action);
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// Get product detail
export const getProductDetailAPI = (idProd) => {
  return async (dispatch) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
};
// Get all categories
export const getAllCategoriesAPI = () => {
  return async (dispatch) => {
    try {
      await axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getAllCategory',
        method: 'GET',
      }).then((res) => {
        const data = res.data.content;
        const action = getAllCategoryAction(data);
        dispatch(action);
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// Get all Store
export const getAllStoreAPI = () => {
  return async (dispatch) => {
    try {
      await axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getAllStore',
        method: 'GET',
      }).then((res) => {
        const data = res.data.content;
        const action = getAllStoreAction(data);
        dispatch(action);
      });
    } catch (error) {
      console.log(error);
    }
  };
};
