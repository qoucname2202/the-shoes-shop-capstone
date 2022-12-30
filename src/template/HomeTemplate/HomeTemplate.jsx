import React, { Fragment } from 'react';
import Navbar from '~/layouts/Navbar';
import Sidebar from '~/layouts/Sidesbar/Sidebar';

const HomeTemplate = ({ children }) => {
  return (
    <div className="flex h-auto bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Navbar />
        <Fragment>{children}</Fragment>
      </div>
    </div>
  );
};

export default HomeTemplate;
