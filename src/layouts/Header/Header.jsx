import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import { faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import { LOGO } from '~/constants/Image';
import { SearchIcon } from '~/components/Icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { calcAmount, clearStore, eraseCookie, TOKEN, USER_SIGNIN } from '~/services/Utils/config';
const Header = () => {
  const [isShow, setIsShow] = useState(true);
  const { cartList } = useSelector((state) => state.cartReducer);
  const { userSignIn } = useSelector((state) => state.userReducer);
  const handleSignOut = () => {
    clearStore(USER_SIGNIN);
    eraseCookie(TOKEN);
    window.location.reload();
  };
  return (
    <>
      <header>
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <a href="/" className="flex items-center">
              <img src={LOGO.APP_LOGO} className="h-6 mr-3 sm:h-9" alt="Logo" />
            </a>
            <div className="flex items-center lg:order-2">
              <form>
                <div className="header-search">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <SearchIcon className={'text-white dark:text-white'} />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      autoComplete="off"
                      className="bg-black text-white text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-black dark:border-black dark:placeholder-white dark:text-white dark:focus:ring-black dark:focus:border-black sm:mr-2"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </form>
              <NavLink to={'/favourite'} className="relative mr-6 text-center text-black transition hover:text-primary">
                <div className="text-2xl">
                  <FontAwesomeIcon icon={faHeart} className="text-white" />
                </div>
                <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-600 rounded-full -right-3 -top-1">
                  2
                </div>
              </NavLink>
              <NavLink to={'/cart'} className="relative mr-6 text-center text-white transition hover:text-primary">
                <div className="text-2xl">
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-600 rounded-full -right-3 -top-1">
                  {calcAmount(cartList)}
                </div>
              </NavLink>
              <div className="relative">
                <div className="flex items-center">
                  <img
                    className="object-cover w-10 h-10 rounded-full cursor-pointer"
                    src={LOGO.AVATAR}
                    alt="avatar"
                    onClick={() => {
                      setIsShow(!isShow);
                    }}
                  />
                  <span className="text-gray-200">Hello {userSignIn?.email}</span>
                </div>
                <div
                  id="userDropdown"
                  className={
                    isShow
                      ? 'invisible z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-2'
                      : 'z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-2'
                  }
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium truncate">{userSignIn?.email}</div>
                  </div>
                  {userSignIn?.accessToken ? (
                    <div className="py-1">
                      <NavLink
                        to={'/profile'}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Profile
                      </NavLink>
                      <a
                        href="#link"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </a>
                    </div>
                  ) : (
                    <Fragment>
                      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="font-medium truncate">Hello Cybersoft</div>
                      </div>
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                        <li>
                          <NavLink
                            to={'/signin'}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-purple-600 dark:hover:text-white"
                          >
                            SignIn
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={'/signup'}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            SignUp
                          </NavLink>
                        </li>
                      </ul>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
