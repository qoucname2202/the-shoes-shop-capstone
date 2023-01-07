import { getUserProfileAction, signInAction, signUpAction } from '~/redux/reducer/userReducer';
import { http, saveLocalStorageJSON, setCookie, TOKEN, USER_SIGNIN } from '~/services/Utils/config';
import { history } from '../index';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

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
