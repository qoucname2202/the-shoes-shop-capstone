import axios from 'axios';
import {
  getAllCategoryAction,
  getAllStoreAction,
  getProductByCategoryAction,
  getProductDetailAction,
  getProductListAction,
} from '~/redux/reducer/productReducer';
import { http } from '~/services/Utils/config';
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
      const res = await http.get(`/api/Product/getbyid?id=${idProd}`);
      const data = res.data.content;
      const action = getProductDetailAction(data);
      dispatch(action);
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
// Get product by category
export const getProductByCategoryAPI = (idCategory) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${idCategory}`,
        method: 'GET',
      }).then((res) => {
        const data = res.data.content;
        const action = getProductByCategoryAction(data);
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
