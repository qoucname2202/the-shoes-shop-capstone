import React from 'react';

const PaginationItem = (props) => {
  return (
    <>
      <a
        href="#link"
        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {props.number}
      </a>
    </>
  );
};

export default PaginationItem;
