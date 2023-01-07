import React from 'react';
import InputField from '~/components/InputField';

const FormForgotPass = (props) => {
  const { onSubmit, frmPass } = props;
  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSubmit} id="forgot-pass">
        <div className="relative">
          <InputField
            name="newPassword"
            type="password"
            label="newPassword"
            placeholder="••••••••"
            onChange={frmPass.handleChange}
            onBlur={frmPass.handleBlur}
          />
        </div>
        {frmPass.errors.newPassword && frmPass.touched.newPassword && (
          <p className="mt-2 text-xs font-semibold italic text-red-500">{frmPass.errors.newPassword}</p>
        )}
        <button
          type="submit"
          className="w-full px-5 py-[15px] text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Create new pass
        </button>
      </form>
    </>
  );
};

export default FormForgotPass;
