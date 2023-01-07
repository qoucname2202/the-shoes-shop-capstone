import { faMagnifyingGlass, faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getSearchProductAPI } from '~/middleware/productAction';
import { sortingSearchProduct } from '~/redux/reducer/productReducer';
import ProductSearch from '../ProductSearch';
import './Search.scss';
const MainSearch = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const { searchProductList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const keyword = searchParam.get('key');
  const frmFormSearch = useFormik({
    initialValues: {
      keyword: '',
    },
    onSubmit: (values) => {
      setSearchParam({
        key: values.keyword,
      });
    },
  });
  useEffect(() => {
    const asyncGetProduct = getSearchProductAPI(keyword);
    dispatch(asyncGetProduct);
  }, [keyword]);
  // Handel sorting
  const handleSortingProduct = (keySort) => {
    const action = sortingSearchProduct(keySort);
    dispatch(action);
  };
  return (
    <div className="container py-5">
      <div className="mt-3 row">
        <div className="col-3"></div>
        <div className="col-6">
          <form className="flex items-center" onSubmit={frmFormSearch.handleSubmit}>
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="keyword"
                name="keyword"
                className="block w-full p-3 text-sm text-gray-700 bg-gray-300 rounded-xl pl-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search"
                autoComplete="off"
                autoFocus
                onChange={frmFormSearch.handleChange}
                onBlur={frmFormSearch.handleBlur}
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-3 ml-2 text-sm font-medium text-white border-purple-500 border-none bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-500 hover:to-pink-500 rounded-xl"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className="">Search</span>
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="flex items-center justify-center pt-5">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Search Product
        </h1>
      </div>
      <div className="flex items-center justify-between pt-5">
        <span>
          Show all{' '}
          <strong className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {searchProductList?.length}
          </strong>{' '}
          products
        </span>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: '#7e3af2' }}
          >
            Price Sorting
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                className="flex items-center gap-2 dropdown-item"
                href="#link"
                onClick={() => {
                  handleSortingProduct('asc');
                }}
              >
                <FontAwesomeIcon icon={faUpLong} />
                Ascending
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 dropdown-item"
                href="#link"
                onClick={() => {
                  handleSortingProduct('desc');
                }}
              >
                <FontAwesomeIcon icon={faDownLong} />
                Decrease
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ProductSearch searchProductList={searchProductList} />
    </div>
  );
};

export default MainSearch;
