import React, { useEffect } from 'react';
import './Profile.scss';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormProfile from '../../components/FormProfile';
import OrderHistory from '../OrderHistory';
import 'react-toastify/dist/ReactToastify.css';
import Paginattion from '~/components/Pagination/Paginattion';
import { getUserProfileAPI, updateProfileAPI } from '~/middleware/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ProfileMain = () => {
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const frmProfile = useFormik({
    initialValues: {
      email: userProfile?.email,
      name: userProfile?.name,
      phone: userProfile?.phone,
      password: userProfile?.password,
      gender: userProfile?.gender,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .matches(
          /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
          'Name is invalid',
        )
        .required('Please enter new name to updated'),
      phone: Yup.string()
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Phone must be from 03 05 07 08 09 and have 10 numbers')
        .required('Please enter new phone to updated'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Please enter new phone to updated'),
    }),
    onSubmit: (values) => {
      let { email, password, gender, phone, name } = values;
      let users = {
        ...userProfile,
        ...(email && { email }),
        ...(password && { password }),
        ...(gender === null || gender === undefined ? {} : { gender }),
        ...(phone && { phone }),
        ...(name && { name }),
      };
      const asyncProfileAction = updateProfileAPI(users);
      dispatch(asyncProfileAction);
    },
  });

  useEffect(() => {
    const asyncProfileAction = getUserProfileAPI();
    dispatch(asyncProfileAction);
  }, []);

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
              <img className="object-cover rounded-full" src={userProfile?.avatar} width={200} alt="avatar" />
              <span className="mt-2 font-weight-bold">{userProfile?.name}</span>
              <span className="text-black-50">{userProfile?.email}</span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className="flex-row d-flex align-items-center">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-400 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-4 py-2.5 text-center mr-2 mb-2"
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    <FontAwesomeIcon icon={faLongArrowLeft} className="mr-2" />
                    Back to home
                  </button>
                </div>
              </div>
              <FormProfile userProfile={userProfile} frmProfile={frmProfile} />
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
      <ToastContainer />
    </div>
  );
};

export default ProfileMain;
