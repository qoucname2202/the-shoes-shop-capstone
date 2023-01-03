import React from 'react';
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from '~/components/Icons';
import { LOGO } from '~/constants/Image';
const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-black sm:p-6 dark:bg-black">
        <div className="container">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/home" className="flex items-center">
                <img src={LOGO.APP_LOGO} className="h-10" alt="Logo-Cybersoft" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-xl font-bold text-white uppercase dark:text-white">Get help</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      Nike
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      Adidas
                    </a>
                  </li>
                  <li>
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-bold text-white uppercase dark:text-white">Support</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      Contact
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      Help
                    </a>
                  </li>
                  <li>
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      Phone
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-bold text-white uppercase dark:text-white">Register</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      Login
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#home" className="font-semibold text-base hover:text-purple-600">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-500 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              ©2022
              <a href="#link" className="hover:text-purple-500">
                {' '}
                Cybersoft All Rights Reserved | Dương Quốc Nam
              </a>
            </span>
            <div className="flex space-x-6 sm:justify-center xs:mt-3 sm:mt-0">
              <a href="#link" className="text-gray-500 hover:text-purple-600 dark:hover:text-white">
                <FacebookIcon />
              </a>
              <a href="#link" className="text-gray-500 hover:text-purple-600 dark:hover:text-white">
                <InstagramIcon />
              </a>
              <a href="#link" className="text-gray-500 hover:text-purple-600 dark:hover:text-white">
                <TwitterIcon />
              </a>
              <a href="#link" className="text-gray-500 hover:text-purple-600 dark:hover:text-white">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
