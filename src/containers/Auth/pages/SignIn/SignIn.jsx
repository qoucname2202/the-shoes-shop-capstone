import { useFormik } from 'formik';
import React, { Fragment } from 'react';
import { BG } from '~/constants/Image';
import FormSignIn from '../../components/FormSignIn';
import './SignIn.scss';
import * as Yup from 'yup';
import { signInUserAPI } from '~/middleware/userAction';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const SignIn = () => {
  const BgLogin = BG.LOGIN_BG;
  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is can not blank').email('Email is invalid'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is can not blank'),
    }),
    onSubmit: (values) => {
      const asyncSignInAction = signInUserAPI(values);
      dispatch(asyncSignInAction);
    },
  });
  const resFacebookLogin = (res) => {
    console.log(res);
  };
  return (
    <>
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
                  Sign in to your account
                </h1>
                <FormSignIn onSubmit={frmLogin.handleSubmit} frmForm={frmLogin} />
                <div>
                  <div className="flex items-center my-3 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="mx-4 mb-0 font-semibold text-center">OR</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <FacebookLogin
                      appId="1587032351749461"
                      cssClass="flex items-center justify-center w-full py-[15px] mb-3 text-sm font-medium leading-snug text-white transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-blue-700 gap-2"
                      icon="fa-facebook"
                      fields="name,email,picture"
                      callback={resFacebookLogin}
                    />
                  </div>
                </div>
                <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{' '}
                  <NavLink to="/signup" className="font-medium text-gray-600 hover:text-purple-600 dark:text-gray-500">
                    Sign up
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
