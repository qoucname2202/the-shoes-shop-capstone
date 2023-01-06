import { useFormik } from 'formik';
import React from 'react';
import { BG } from '~/constants/Image';
import * as Yup from 'yup';
import FormSignUp from '../../components/FormSignUp';
import './SignUp.scss';
import { useDispatch } from 'react-redux';
import { signUpUserAPI } from '~/middleware/userAction';
const SignUp = () => {
  const BgLogin = BG.LOGIN_BG;
  const dispatch = useDispatch();
  const frmSignUp = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      gender: true,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is can not blank').email('Email is invalid'),
      name: Yup.string()
        .matches(
          /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
          'Name is invalid',
        )
        .required('Name is can not blank'),
      phone: Yup.string()
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Phone must be from 03 05 07 08 09 and have 10 numbers')
        .required('Phone is can not blank'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is can not blank'),
      confirmPassword: Yup.string()
        .required('Confirm password is can not blank')
        .when('password', {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf([Yup.ref('password')], 'Password is not match'),
        }),
    }),
    onSubmit: (values) => {
      let { email, password, name, gender, phone } = values;
      let user = { email, password, name, gender, phone };
      const asyncSignUpAction = signUpUserAPI(user);
      dispatch(asyncSignUpAction);
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
                  Sign up to your account
                </h1>
                <FormSignUp onSubmit={frmSignUp.handleSubmit} frmForm={frmSignUp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
