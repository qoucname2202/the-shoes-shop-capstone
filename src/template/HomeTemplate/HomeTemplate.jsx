import React, { Fragment } from 'react';
import Header from '~/layouts/Header';
import Navbar from '~/layouts/Navbar';

const HomeTemplate = ({ children }) => {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Fragment>{children}</Fragment>
    </div>
  );
};

export default HomeTemplate;
