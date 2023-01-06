import React, { Fragment, useState } from 'react';
import { HiddenIcon, ShowIcon } from '../Icons';

const InputField = (props) => {
  const { register, name, label, errors, ...rest } = props;
  let _ = require('lodash');
  const [showPassword, setShowPassword] = useState(false);
  const handleHidePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Fragment>
      <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {_.upperFirst(label)}
      </label>
      <input
        {...rest}
        onChange={rest.onChange}
        onBlur={rest.onBlur}
        name={name}
        autoComplete="off"
        type={showPassword ? 'text' : rest.type}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {(name === 'password' ||
        name === 'confirmPassword' ||
        name === 'newPassword' ||
        name === 'confirmNewPassword' ||
        name === 'currentPassword') && (
        <span className="absolute inline-flex items-center text-gray-400 right-2 bottom-2" onClick={handleHidePassword}>
          {showPassword ? <HiddenIcon /> : <ShowIcon />}
        </span>
      )}
    </Fragment>
  );
};

export default InputField;
