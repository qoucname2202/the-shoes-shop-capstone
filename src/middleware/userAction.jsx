import { signInAction, signUpAction } from '~/redux/reducer/userReducer';
import { http, saveLocalStorageJSON, setCookie, TOKEN, USER_SIGNIN } from '~/services/Utils/config';
import { history } from '../index';
import Swal from 'sweetalert2';

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
