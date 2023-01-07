import React from 'react';
import Button from '~/components/Button';
import InputField from '~/components/InputField';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import './FormProfile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FormProfile = (props) => {
  let { userProfile, frmProfile } = props;
  return (
    <>
      <form onSubmit={frmProfile.handleSubmit}>
        <div className="mt-2 row">
          <div className="col-md-6">
            <InputField
              name="email"
              type="email"
              label="email"
              disabled
              defaultValue={userProfile?.email}
              placeholder="Eg. name@company.com"
              onChange={frmProfile.handleChange}
              onBlur={frmProfile.handleBlur}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="name"
              type="text"
              label="name"
              defaultValue={userProfile?.name}
              placeholder="Eg. Nguyen Van A"
              onChange={frmProfile.handleChange}
              onBlur={frmProfile.handleBlur}
            />
            {frmProfile.errors.name && frmProfile.touched.name && (
              <p className="mt-2 text-xs font-semibold italic text-red-500">{frmProfile.errors.name}</p>
            )}
          </div>
        </div>
        <div className="mt-3 row">
          <div className="col-md-6">
            <InputField
              name="phone"
              type="text"
              label="phone"
              defaultValue={userProfile?.phone}
              placeholder="Eg. 0917565841"
              onChange={frmProfile.handleChange}
              onBlur={frmProfile.handleBlur}
            />
            {frmProfile.errors.phone && frmProfile.touched.phone && (
              <p className="mt-2 text-xs font-semibold italic text-red-500">{frmProfile.errors.phone}</p>
            )}
          </div>
          <div className="relative col-md-6">
            <InputField
              name="password"
              type="password"
              label="password"
              placeholder="••••••••"
              defaultValue={userProfile?.password}
              onChange={frmProfile.handleChange}
              onBlur={frmProfile.handleBlur}
            />
          </div>
          {frmProfile.errors.phone && frmProfile.touched.phone && (
            <p className="mt-2 text-xs font-semibold italic text-red-500">{frmProfile.errors.phone}</p>
          )}
        </div>
        <div className="mt-3 row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <label htmlFor="gender" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Gender
            </label>
            <div className="flex gap-4">
              <div className="flex items-center justify-center">
                <input
                  type="radio"
                  id="male"
                  className="radio-input"
                  name="gender"
                  value={true}
                  defaultChecked={userProfile?.gender}
                  onChange={frmProfile.handleChange}
                />
                <label htmlFor="male" className="radio-label" />
                <span className="text-sm font-medium">Male</span>
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="radio"
                  id="fmale"
                  className="radio-input"
                  name="gender"
                  value={false}
                  defaultChecked={!userProfile?.gender}
                  onChange={frmProfile.handleChange}
                />
                <label htmlFor="fmale" className="radio-label" />
                <span className="text-sm font-medium">Female</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-right">
          <Button type="submit">
            <FontAwesomeIcon icon={faPenNib} />
            Update
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormProfile;
