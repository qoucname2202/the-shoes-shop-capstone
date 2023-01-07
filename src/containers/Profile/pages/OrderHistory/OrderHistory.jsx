import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useState } from 'react';
import Fancybox from '~/components/ui/Fancybox';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
import { deleteOrderAPI } from '~/middleware/userAction';
import { useDispatch } from 'react-redux';
const OrderHistory = (props) => {
  const dispatch = useDispatch();
  const [orderID, setOrderID] = useState(null);

  useEffect(() => {
    if (orderID) {
      const asyncOrderAction = deleteOrderAPI(orderID);
      dispatch(asyncOrderAction);
    }
  }, [orderID]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pt-5">
          {props?.userProfile?.ordersHistory && props?.userProfile?.ordersHistory.length > 0
            ? props?.userProfile?.ordersHistory.map((orderItem, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className="flex items-center mb-3">
                      <FontAwesomeIcon icon={faCartShopping} className="mr-2 text-pink-500" />
                      <h3 className="text-pink-500">
                        Order have been placed on{' '}
                        <span className="text-pink-500">{moment(orderItem.date).format('L').split('/').join('-')}</span>
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
                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderItem?.orderDetail && orderItem?.orderDetail?.length > 0
                          ? orderItem?.orderDetail?.map((item, idx) => {
                              return (
                                <tr
                                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                  key={idx}
                                >
                                  <td className="px-6 py-3">{orderItem?.id}</td>
                                  <td className="px-6 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Fancybox>
                                      <a data-fancybox="gallery" href={item?.image} data-caption={item?.alias}>
                                        <img
                                          src={item?.image}
                                          alt="addias"
                                          className="object-fill w-20 h-20 rounded-full"
                                        />
                                      </a>
                                    </Fancybox>
                                  </td>
                                  <td className="px-6 py-3">{item?.name}</td>
                                  <td className="px-6 py-3">{`$${item?.price}.00`}</td>
                                  <td className="px-6 py-3">{item?.quantity}</td>
                                  <td className="px-6 py-3">{`$${item?.quantity * item?.price}.00`}</td>
                                  <td className="px-6 py-3">
                                    <button
                                      type="button"
                                      className="text-gray-700 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-md text-sm px-2.5 py-2 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-white border-2 border-gray-400"
                                      onClick={() => {
                                        setOrderID({
                                          orderId: orderItem.id,
                                        });
                                      }}
                                    >
                                      Remove
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          : null}
                      </tbody>
                    </table>
                  </Fragment>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
