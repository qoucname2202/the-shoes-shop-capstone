import React, { Fragment } from 'react';
import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';
import Navbar from '~/layouts/Navbar';
import ScrollToTop from 'react-scroll-to-top';
const HomeTemplate = ({ children }) => {
  return (
    <div className="">
      <ScrollToTop smooth color="#fff" />
      <Header />
      <Navbar />
      <Fragment>{children}</Fragment>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
