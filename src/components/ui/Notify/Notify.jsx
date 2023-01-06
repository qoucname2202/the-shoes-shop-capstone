import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '~/components/Loading';

const Notify = ({ status }) => {
  const handleToast = (type, msg) => {
    toast(msg, { type: type });
  };
  // status {loading: false, error: false, success: false, message: ''}
  return (
    <div className="notify-alert">
      {status.loading && <Loading />}
      {status.error && handleToast(toast.TYPE.ERROR, status.message)}
      {status.success && handleToast(toast.TYPE.SUCCESS, status.message)}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
        theme={'colored'}
      />
    </div>
  );
};

export default Notify;
