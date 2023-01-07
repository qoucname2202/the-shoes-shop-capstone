import { useFormik } from 'formik';
import React from 'react';
import { BG } from '~/constants/Image';
import * as Yup from 'yup';
import FormForgotPass from '../../components/FormForgotPass';
import './ForgotPass.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { changePasswordAPI } from '~/middleware/userAction';
import { ToastContainer } from 'react-toastify';
const ForgotPassword = () => {
  const BgLogin = BG.LOGIN_BG;
  const dispatch = useDispatch();
  const frmPass = useFormik({
    initialValues: {
      newPassword: '',
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is can not blank'),
    }),
    onSubmit: (values) => {
      dispatch(changePasswordAPI(values));
    },
  });
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="flex w-full xl:w-3/4 lg:w-11/12">
            <div
              className="hidden w-full h-auto bg-gray-400 bg-cover rounded-l-lg lg:block lg:w-1/2"
              style={{ backgroundImage: `url(${BgLogin})`, objectFit: 'cover', backgroundPosition: 'center' }}
            />
            <div className="w-full p-5 bg-white rounded-lg lg:w-1/2 lg:rounded-l-none">
              <div>
                <h1 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Change password
                </h1>
                <FormForgotPass onSubmit={frmPass.handleSubmit} frmPass={frmPass} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
