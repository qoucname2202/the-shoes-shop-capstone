import { useFormik } from 'formik';
import React from 'react';
import { BG } from '~/constants/Image';
import FormSignIn from '../../components/FormSignIn';
import './SignIn.scss';
import * as Yup from 'yup';
const SignIn = () => {
  const BgLogin = BG.LOGIN_BG;
  const frmLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is can not blank').email('Email is invalid'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(8, 'Password must be at highest 8 characters')
        .required('Password is can not blank'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
