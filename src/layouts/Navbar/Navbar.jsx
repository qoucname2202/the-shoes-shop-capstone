import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllCategoriesAPI, getProductByCategoryAPI } from '~/middleware/productAction';

const Navbar = () => {
  const { categoryList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  // const [wordChange, setwordChange] = useState('');

  const handleProductByCategory = (id) => {
    console.log(id);
    const asyncProdByCategoryAction = getProductByCategoryAPI(id);
    dispatch(asyncProdByCategoryAction);
    // const listCastegory = document.querySelectorAll('li.category-item');
    // listCastegory.forEach((categories) => {
    //   categories.addEventListener('click', (e) => {
    //     let categoryName = e.target.getAttribute('data-name');
    //     setwordChange(categoryName);
    //   });
    // });
    // if (wordChange === 'HOME') {
    //   // const asyncCategoryAction = getAllCategoriesAPI();
    //   // dispatch(asyncCategoryAction);
    //   console.log(wordChange);
    // } else {
    //   console.log(id);
    // }
  };

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
              <li className="pb-2 border-b-2 border-purple-600 category-item">
                <NavLink
                  to={'/'}
                  className="text-xl font-normal text-black dark:text-white"
                  aria-current="page"
                  data-name="HOME"
                >
                  HOME
                </NavLink>
              </li>
              {categoryList && categoryList.length > 0
                ? categoryList.map((item) => {
                    return (
                      <li className="pb-2 hover:text-purple-600 category-item" key={item.id}>
                        <a
                          href="#link"
                          className="text-xl font-normal hover:text-purple-600 text-black dark:text-white"
                          data-name={item.id}
                          aria-current="page"
                          onClick={() => {
                            handleProductByCategory(item.id);
                          }}
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
