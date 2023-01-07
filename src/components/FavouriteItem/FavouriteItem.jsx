import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { HeartIcon, StarIcon } from '~/components/Icons';
import Fancybox from '~/components/ui/Fancybox';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '~/index';
import { likeProductAPI, unLikeProductAPI } from '~/middleware/userAction';
const FavouriteItem = (props) => {
  let prod = props.prod;
  const [like, setLike] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userSignIn } = useSelector((state) => state.userReducer);
  const randomStar = (min = 3, max = 6) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <>
      <div className="col-12 col-lg-4 animate__animated animate__zoomIn animate__delay-1s md:flex md:items-center md:justify-center flex-md-column md:mb-5 lg:flex lg:items-center lg:justify-center flex-lg-column">
        <div className="w-full max-w-md p-6 bg-gray-700 shadow-lg rounded-xl md:mb-4 lg:mb-4">
          <div className="flex flex-col ">
            <div className="relative w-full mb-1 h-62">
              <div className="absolute top-0 right-0 flex flex-col p-3">
                <button
                  className="w-10 h-10 p-1 text-center text-gray-500 transition duration-300 ease-in bg-gray-800 rounded-full shadow hover:text-purple-500 hover:shadow-md"
                  onClick={() => {
                    if (like) {
                      if (!userSignIn?.accessToken) {
                        return history.push('/login');
                      }
                      const asyncUnLikeAction = unLikeProductAPI(prod.id);
                      dispatch(asyncUnLikeAction);
                      return setLike(false);
                    } else {
                      const asyncLikeAction = likeProductAPI(prod.id);
                      dispatch(asyncLikeAction);
                      return setLike(true);
                    }
                  }}
                >
                  {like ? <HeartIcon fill={'currentColor'} stroke={''} className="text-purple-600" /> : <HeartIcon />}
                </button>
              </div>
              <Fancybox>
                <a data-fancybox="gallery" href={prod?.image} data-caption="Adidas Prophere Black White">
                  <img src={prod?.image} alt="addias" className="object-fill w-full rounded-2xl" />
                </a>
              </Fancybox>
            </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                <div className="flex items-center justify-between w-full min-w-0 ">
                  <h2 className="mr-auto text-2xl text-gray-200 truncate cursor-pointer hover:text-purple-500 ">
                    {prod?.name}
                  </h2>
                </div>
              </div>
              <div className="flex items-center mt-2.5 mb-3">
                {Array.from(Array(randomStar()).keys(null)).map((item, idx) => {
                  return (
                    <Fragment key={idx}>
                      <StarIcon />
                    </Fragment>
                  );
                })}
                {randomStar() % 2 === 0 ? (
                  <div className="flex items-center px-2 py-1 ml-3 text-xs text-white bg-red-400 rounded-lg">HOT</div>
                ) : (
                  <div className="flex items-center px-2 py-1 ml-3 text-xs text-white bg-purple-500 rounded-lg">
                    SALE
                  </div>
                )}
              </div>
              <div className="flex justify-between space-x-2 text-sm font-medium ml-auto">
                <div className=""></div>
                <div className="">
                  <Button
                    name="animate-button"
                    onClick={() => {
                      navigate(`/detail/${prod.id}`);
                    }}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} className=""></FontAwesomeIcon>
                    Buy now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteItem;
