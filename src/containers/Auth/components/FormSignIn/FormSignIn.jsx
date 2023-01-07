import React, { Fragment } from 'react';
import InputField from '~/components/InputField';
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
            autoFocus
            placeholder="name@company.com"
            onChange={frmForm.handleChange}
            onBlur={frmForm.handleBlur}
          />
        </div>
        {frmForm.errors.email && frmForm.touched.email && (
          <p className="mt-2 text-xs font-semibold italic text-red-500">{frmForm.errors.email}</p>
        )}
        <div className="relative">
          <InputField
            name="password"
            type="password"
            label="password"
            placeholder="••••••••"
            onChange={frmForm.handleChange}
            onBlur={frmForm.handleBlur}
          />
        </div>
        {frmForm.errors.password && frmForm.touched.password && (
          <p className="mt-2 text-xs font-semibold italic text-red-500">{frmForm.errors.password}</p>
        )}
        <button
          type="submit"
          className="w-full px-5 py-[15px] text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default FormSignIn;
