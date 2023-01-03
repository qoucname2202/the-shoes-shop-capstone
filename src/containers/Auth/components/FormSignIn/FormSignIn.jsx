import React from 'react';
import { FacebookIcon } from '~/components/Icons';
import InputField from '~/components/InputField';
import ButtonFacebook from '../ButtonFacebook';

const FormSignIn = (props) => {
  const { onSubmit, frmForm } = props;
  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#" id="login-form" onSubmit={onSubmit}>
        <div>
          <InputField
            name="email"
            type="email"
            label="email"
            placeholder="name@company.com"
            onChange={frmForm.handleChange}
            onBlur={frmForm.handleBlur}
          />
          {frmForm.errors.email && frmForm.touched.email && (
            <p className="mt-2 text-xs font-semibold italic text-red-500">{frmForm.errors.email}</p>
          )}
        </div>
        <div className="relative">
          <InputField
            name="password"
            type="password"
            label="password"
            placeholder="••••••••"
            onChange={frmForm.handleChange}
            onBlur={frmForm.handleBlur}
          />
          {frmForm.errors.password && frmForm.touched.password && (
            <p className="mt-2 text-xs font-semibold italic text-red-500">{frmForm.errors.password}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <a href="#link" className="text-sm font-medium text-gray-400 hover:text-purple-600 dark:text-gray-400">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full px-5 py-[15px] text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Sign in
        </button>
        <div>
          <div className="flex items-center my-3 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="mx-4 mb-0 font-semibold text-center">OR</p>
          </div>
          <ButtonFacebook>
            <FacebookIcon className={'mr-2'} />
            Continue with Facebook
          </ButtonFacebook>
        </div>
        <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{' '}
          <a href="#link" className="font-medium text-gray-600 hover:text-purple-600 dark:text-gray-500">
            Sign up
          </a>
        </p>
      </form>
    </>
  );
};

export default FormSignIn;
