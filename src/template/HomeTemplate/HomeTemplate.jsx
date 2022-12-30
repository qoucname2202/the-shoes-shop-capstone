import React, { Fragment } from 'react';
import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';
import Navbar from '~/layouts/Navbar';

const HomeTemplate = ({ children }) => {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Fragment>{children}</Fragment>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
