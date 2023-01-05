import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Fancybox from '~/components/ui/Fancybox';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
const OrderHistory = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pt-5">
          <div className="flex items-center mb-3">
            <FontAwesomeIcon icon={faCartShopping} className="mr-2 text-pink-500" />
            <h3 className="text-pink-500">
              Order have been placed on{' '}
              <span className="text-pink-500">{moment().format('L').split('/').join('-')}</span>
            </h3>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-500 dark:text-gray-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-3">1</td>
                <td className="px-6 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                  <Fancybox>
                    <a
                      data-fancybox="gallery"
                      href="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
                      data-caption="Adidas Prophere Black White"
                    >
                      <img
                        src="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
                        alt="addias"
                        className="object-fill w-20 h-20 rounded-full"
                      />
                    </a>
                  </Fancybox>
                </td>
                <td className="px-6 py-3">Adidas Prophere Black White</td>
                <td className="px-6 py-3">$400.00</td>
                <td className="px-6 py-3">1</td>
                <td className="px-6 py-3">$400.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pt-5">
          <div className="flex items-center mb-3">
            <FontAwesomeIcon icon={faCartShopping} className="mr-2 text-pink-500" />
            <h3 className="text-pink-500">
              Order have been placed on{' '}
              <span className="text-pink-500">{moment().format('L').split('/').join('-')}</span>
            </h3>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-500 dark:text-gray-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-3">1</td>
                <td className="px-6 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                  <Fancybox>
                    <a
                      data-fancybox="gallery"
                      href="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
                      data-caption="Adidas Prophere Black White"
                    >
                      <img
                        src="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
                        alt="addias"
                        className="object-fill w-20 h-20 rounded-full"
                      />
                    </a>
                  </Fancybox>
                </td>
                <td className="px-6 py-3">Adidas Prophere Black White</td>
                <td className="px-6 py-3">$400.00</td>
                <td className="px-6 py-3">1</td>
                <td className="px-6 py-3">$400.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
