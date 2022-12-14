import React from 'react';
import InputField from '~/components/InputField';
import './FormSignUp.scss';
const FormSignUp = (props) => {
  const { onSubmit, frmForm } = props;
  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#" id="login-form" onSubmit={onSubmit}>
        {/* Email input field */}
        <div>
          <InputField
            name="email"
            type="email"
            label="email"
            placeholder="Eg. name@company.com"
            onChange={frmForm.handleChange}
            onBlur={frmForm.handleBlur}
          />
        </div>
        {frmForm.errors.email && frmForm.touched.email && (
          <p className="mt-2 text-xs font-semibold italic text-red-500">{frmForm.errors.email}</p>
        )}
        {/* Name input field */}
        <div>
          <InputField
            name="name"
            type="text"
            label="name"
            placeholder="Eg. Nguyen Van A"
            onChange={frmForm.handleChange}
            onBlur={frmForm.handleBlur}
          />
        </div>
        {frmForm.errors.name && frmForm.touched.name && (
          <p className="mt-2 text-xs font-semibold italic text-red-500">{frmForm.errors.name}</p>
        )}
        {/* Phone number input field */}
        <div>
          <InputField
            name="phone"
            type="text"
            label="phone"
            placeholder="Eg. 0917565841"
            onChange={frmForm.handleChange}
            onBlur={frmForm.handleBlur}
          />
        </div>
        {frmForm.errors.phone && frmForm.touched.phone && (
          <p className="mt-2 text-xs font-semibold italic text-red-500">{frmForm.errors.phone}</p>
        )}
        {/* Password input field */}
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
        {/* ConfirmPassword input field */}
        <div className="relative">
          <InputField
            name="confirmPassword"
            type="password"
            label="confirmPassword"
            placeholder="••••••••"
            onChange={frmForm.handleChange}
            onBlur={frmForm.handleBlur}
          />
        </div>
        {frmForm.errors.confirmPassword && frmForm.touched.confirmPassword && (
          <p className="mt-2 text-xs font-semibold italic text-red-500">{frmForm.errors.confirmPassword}</p>
        )}
        <div>
          <label htmlFor="gender" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Gender
          </label>
          <div className="flex gap-4">
            <div className="flex justify-center items-center">
              <input
                type="radio"
                id="male"
                className="radio-input"
                name="gender"
                value={true}
                defaultChecked
                onChange={frmForm.handleChange}
              />
              <label htmlFor="male" className="radio-label" />
              <span className="text-sm font-medium">Male</span>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="radio"
                id="fmale"
                className="radio-input"
                name="gender"
                value={false}
                onChange={frmForm.handleChange}
              />
              <label htmlFor="fmale" className="radio-label" />
              <span className="text-sm font-medium">Female</span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-5 py-[15px] text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default FormSignUp;
