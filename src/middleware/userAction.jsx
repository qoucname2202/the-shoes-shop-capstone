import { signUpAction } from '~/redux/reducer/userReducer';
import { http } from '~/services/Utils/config';
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
