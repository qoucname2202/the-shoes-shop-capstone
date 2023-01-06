import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoriesAPI } from '~/middleware/productAction';

const Navbar = () => {
  const { categoryList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const asyncCategoryAction = getAllCategoriesAPI();
    dispatch(asyncCategoryAction);
  }, []);
  return (
    <Fragment>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl py-3 mx-auto xs:px-6 sm:px-6 md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li className="pb-2 border-b-2 border-purple-600">
                <a href="#link" className="text-xl font-normal text-black dark:text-white" aria-current="page">
                  HOME
                </a>
              </li>
              {categoryList && categoryList.length > 0
                ? categoryList.map((item) => {
                    return (
                      <li className="pb-2 hover:text-purple-600" key={item.id}>
                        <a
                          href="#link"
                          className="text-xl font-normal hover:text-purple-600 text-black dark:text-white"
                          aria-current="page"
                        >
                          {item?.category}
                        </a>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
