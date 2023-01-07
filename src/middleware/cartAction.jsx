import { toast } from 'react-toastify';
import { submitOrderProdAction } from '~/redux/reducer/cartReducer';
import { http } from '~/services/Utils/config';

export const orderProductAPI = (order) => {
  return async (dispatch) => {
    try {
      http.post('/api/Users/order', order).then((res) => {
        if (res.status === 200) {
          toast.success('Thanh toán thành công', {
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
      });
      const action = submitOrderProdAction(order);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
