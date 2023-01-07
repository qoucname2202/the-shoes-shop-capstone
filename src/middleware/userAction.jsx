import { getUserProfileAction, signInAction, signUpAction } from '~/redux/reducer/userReducer';
import { http, saveLocalStorageJSON, setCookie, TOKEN, USER_SIGNIN } from '~/services/Utils/config';
import { history } from '../index';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { getFavoriteProductAction } from '~/redux/reducer/productReducer';

// User signup
export const signUpUserAPI = (user) => {
  return async (dispatch) => {
    try {
      const res = await http.post('/api/Users/signup', user);
      const action = signUpAction(res.data.content);
      dispatch(action);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đăng ký tài khoản thành công',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        history.push('/signin');
      }, 2000);
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Đăng ký tài khoản thất bại',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
// User signin
export const signInUserAPI = (userAccount) => {
  return async (dispatch) => {
    try {
      const res = await http.post('/api/Users/signin', userAccount);
      const action = signInAction(res.data.content);
      dispatch(action);
      // Save localStorage and setCookies
      saveLocalStorageJSON(USER_SIGNIN, res.data.content);
      setCookie(TOKEN, res.data.content.accessToken);
      // Mess successful or fail signin user
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đăng nhập tài khoản thành công',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        history.push('/');
      }, 2000);
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Đăng nhập tài khoản thất bại',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
// Get profile user
export const getUserProfileAPI = () => {
  return async (dispatch) => {
    try {
      let res = await http.post('/api/Users/getProfile');
      let data = res.data.content;
      const action = getUserProfileAction(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
// Update profile
export const updateProfileAPI = (newUser) => {
  return async (dispatch) => {
    try {
      let res = await http.post('/api/Users/updateProfile', newUser);
      if (res.status === 200) {
        toast.success('Update user successfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
// delete order product
export const deleteOrderAPI = (idOrder) => {
  return async (dispatch) => {
    try {
      let res = await http.post('/api/Users/deleteOrder', idOrder);
      if (res.status === 200) {
        toast.success('Delete order successfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
// like
export const likeProductAPI = (prodId) => {
  return async (dispatch) => {
    try {
      await http.get(`api/Users/like?productId=${prodId}`);
    } catch (error) {
      console.log(error);
    }
  };
};
// unlike
export const unLikeProductAPI = (prodId) => {
  return async (dispatch) => {
    try {
      await http.get(`api/Users/unlike?productId=${prodId}`);
    } catch (error) {
      console.log(error);
    }
  };
};
// get favourite product
export const getProductFavoriteApi = () => {
  return async (dispatch) => {
    try {
      const res = await http.get('/api/Users/getproductfavorite');
      const data = res.data.content.productsFavorite;
      const action = getFavoriteProductAction(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
