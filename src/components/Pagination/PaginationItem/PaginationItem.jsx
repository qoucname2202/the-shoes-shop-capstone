import React from 'react';

const PaginationItem = (props) => {
  return (
    <>
      <a
        href="#link"
        className="px-3 py-2 leading-tight text-purple-600 bg-white border border-purple-300 hover:bg-purple-100 hover:text-purple-700 dark:bg-purple-800 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white"
      >
        {props.number}
      </a>
    </>
  );
};

export default PaginationItem;
