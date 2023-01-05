import React from 'react';
import Button from '~/components/Button';
import InputField from '~/components/InputField';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import './FormProfile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FormProfile = () => {
  return (
    <>
      <form>
        <div className="mt-2 row">
          <div className="col-md-6">
            <InputField
              name="email"
              type="email"
              label="email"
              placeholder="Eg. name@company.com"
              // onChange={frmForm.handleChange}
              // onBlur={frmForm.handleBlur}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="userName"
              type="text"
              label="userName"
              placeholder="Eg. Nguyen Van A"
              // onChange={frmForm.handleChange}
              // onBlur={frmForm.handleBlur}
            />
          </div>
        </div>
        <div className="mt-3 row">
          <div className="col-md-6">
            <InputField
              name="phone"
              type="text"
              label="phone"
              placeholder="Eg. 0917565841"
              // onChange={frmForm.handleChange}
              // onBlur={frmForm.handleBlur}
            />
          </div>
          <div className="relative col-md-6">
            <InputField
              name="password"
              type="password"
              label="password"
              placeholder="••••••••"
              // onChange={frmForm.handleChange}
              // onBlur={frmForm.handleBlur}
            />
          </div>
        </div>
        <div className="mt-3 row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <label htmlFor="gender" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Gender
            </label>
            <div className="flex gap-4">
              <div className="flex items-center justify-center">
                <input type="radio" id="male" className="radio-input" name="gender" />
                <label htmlFor="male" className="radio-label" />
                <span className="text-sm font-medium">Male</span>
              </div>
              <div className="flex items-center justify-center">
                <input type="radio" id="fmale" className="radio-input" name="gender" />
                <label htmlFor="fmale" className="radio-label" />
                <span className="text-sm font-medium">Female</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-right">
          <Button>
            <FontAwesomeIcon icon={faPenNib} />
            Update
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormProfile;
