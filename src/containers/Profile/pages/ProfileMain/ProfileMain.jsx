import React from 'react';
import './Profile.scss';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormProfile from '../../components/FormProfile';
import OrderHistory from '../OrderHistory';

import Paginattion from '~/components/Pagination/Paginattion';
const ProfileMain = () => {
  const frmProfile = useFormik({
    initialValues: {
      email: '',
      userName: '',
      phone: '',
      password: '',
      confirmPassword: '',
      gender: true,
    },
    validationSchema: Yup.object().shape({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="py-5">
      <div className="container bg-white rounded">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Profile User
          </h1>
        </div>
        <div className="items-center justify-center row">
          <div className="border-r border-gray-300 col-md-4">
            <div className="p-3 py-5 text-center d-flex flex-column align-items-center">
              <img
                className="object-cover rounded-full"
                src="https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                width={200}
                alt="avatar"
              />
              <span className="mt-2 font-weight-bold">John Doe</span>
              <span className="text-black-50">john_doe12@bbb.com</span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className="flex-row d-flex align-items-center">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-400 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-4 py-2.5 text-center mr-2 mb-2"
                  >
                    <FontAwesomeIcon icon={faLongArrowLeft} className="mr-2" />
                    Back to home
                  </button>
                </div>
              </div>
              <FormProfile onSubmit={frmProfile.handleSubmit} />
            </div>
          </div>
        </div>
        <hr className="border-gray-600 sm:mx-auto dark:border-gray-500 lg:my-8" />
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Order History
          </h1>
        </div>
        <OrderHistory />
        <div className="flex items-center justify-center mt-5">
          <Paginattion />
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
