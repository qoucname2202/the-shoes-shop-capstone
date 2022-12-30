import React, { Fragment } from 'react';
import { LOGO } from '~/constants/Image';
import { NavLink } from 'react-router-dom';
// Icon SVG
import { BoxIcon, HomeIcon, NewsIcon, ProductIcon, ProjectIcon, TicketIcon } from '~/components/Icons';
const Sidebar = () => {
  return (
    <Fragment>
      <div className="z-20 flex-shrink-0 hidden w-64 h-auto overflow-y-auto bg-white dark:bg-gray-800 md:block">
        <div className="relative h-full text-gray-500 dark:text-gray-400">
          <NavLink className="flex items-center justify-center" to={'/'}>
            <img src={LOGO.APP_LOGO} alt="logo-admin" className="w-32 h-24 mt-2" />
          </NavLink>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <NavLink
                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                to={'/'}
              >
                <HomeIcon />
                <span className="ml-4">Trang chủ</span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              <NavLink
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                to={'/product-management'}
              >
                <ProductIcon />
                <span className="ml-4">Quản lý sản phẩm</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                to={'/news-management'}
              >
                <NewsIcon />
                <span className="ml-4">Quản lý tin tức</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                to={'/project-management'}
              >
                <ProjectIcon />
                <span className="ml-4">Quản lý dự án</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                to={'/inventory-management'}
              >
                <BoxIcon />
                <span className="ml-4">Quản lý hàng tồn</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                to={'/discount-management'}
              >
                <TicketIcon />
                <span className="ml-4">Quản lý giảm giá</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
