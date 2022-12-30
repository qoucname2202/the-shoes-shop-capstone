import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl py-3 mx-auto xs:px-6 sm:px-6 md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li className="pb-2 border-b-2 border-black">
                <a href="#link" className="text-black dark:text-white text-xl font-normal" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#link" className="text-black dark:text-white text-xl font-light" aria-current="page">
                  Men
                </a>
              </li>
              <li>
                <a href="#link" className="text-black dark:text-white text-xl font-light" aria-current="page">
                  Woman
                </a>
              </li>
              <li>
                <a href="#link" className="text-black dark:text-white text-xl font-light" aria-current="page">
                  Kid
                </a>
              </li>
              <li>
                <a href="#link" className="text-black dark:text-white text-xl font-light" aria-current="page">
                  Sport
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
