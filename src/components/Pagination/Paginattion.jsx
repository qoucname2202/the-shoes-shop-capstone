import React, { Fragment } from 'react';
import { NextIcon, PreviousIcon } from '../Icons';
import PaginationItem from './PaginationItem';

const Paginattion = () => {
  const renderItemPagination = () => {
    return Array.from({ length: 5 }, (_, i) => i + 1).map((item, idx) => {
      return (
        <li key={idx}>
          <PaginationItem number={item} />
        </li>
      );
    });
  };
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#link"
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <PreviousIcon />
            </a>
          </li>
          {renderItemPagination()}
          <li>
            <a
              href="#link"
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <NextIcon />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Paginattion;
