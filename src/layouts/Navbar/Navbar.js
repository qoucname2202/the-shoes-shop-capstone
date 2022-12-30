import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { AvatarIcon, MenuIcon, SearchIcon } from '~/components/Icons';
import './style.scss';
const Navbar = () => {
  // const [isShow, setIsShow] = useState(true);
  return (
    <Fragment>
      <div className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
          <button
            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
            aria-label="Menu"
          >
            <MenuIcon />
          </button>
          <div className="flex justify-center flex-1 lg:mr-32">
            <form>
              <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
          <ul className="flex items-center flex-shrink-0 space-x-6">
            <li className="relative">
              {/* <button
                id="dropdownAvatarNameButton"
                data-dropdown-toggle="dropdownAvatarName"
                className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                type="button"
                onClick={() => {
                  setIsShow(!isShow);
                }}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="mr-2 w-8 h-8 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                  alt="userphotod"
                />
                DuongNam
                <DropDownIcon className={'ml-1'} />
              </button> */}
              {/* Dropdown menu */}
              {/* <div
                id="dropdownAvatarName"
                className={
                  isShow
                    ? 'invisible z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 mt-2 absolute'
                    : 'z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 mt-2 absolute '
                }
              >
                <ul
                  className="absolute right-0 w-56 p-2 mt-1 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700 mr-4"
                  aria-label="submenu"
                >
                  <li className="flex">
                    <NavLink
                      className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      to={'/@:nickname'}
                    >
                      <UserIcon />
                      <span className="ml-2">Profile</span>
                    </NavLink>
                  </li>
                  <li className="flex">
                    <a
                      className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      href="#link"
                    >
                      <LogoutIcon />
                      <span className="ml-2">Log out</span>
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="flex space-x-4 items-center">
                <NavLink href="#link" className="text-gray-600 text-sm flex justify-center items-center" to={'/login'}>
                  <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 flex justify-center items-center">
                    <AvatarIcon className={'absolute-left-1 text-gray-400'} />
                  </div>
                  <span>LOGIN</span>
                </NavLink>
                <NavLink
                  to={'/register'}
                  href="#link"
                  className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-500 text-sm"
                >
                  SIGNUP
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
