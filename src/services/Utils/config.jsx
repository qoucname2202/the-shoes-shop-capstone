import axios from 'axios';
import { isExpired } from 'react-jwt';
import { history } from '../../index';
export const USER_SIGNIN = 'userSignIn';
export const TOKEN = 'accessToken';
export const TOKEN_CYBER =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNUUiLCJIZXRIYW5TdHJpbmciOiIzMS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODU0OTEyMDAwMDAiLCJuYmYiOjE2NTczODYwMDAsImV4cCI6MTY4NTYzODgwMH0.LWlPoCoXPHgp2U6FijTqXvKFt7ENvY9Tyn9ux-bVlXo';

export const {
  saveStorage,
  saveLocalStorageJSON,
  getStorage,
  getStoreJson,
  clearStore,
  setCookie,
  getCookie,
  eraseCookie,
  calcAmount,
  calcSubTotal,
} = {
  saveStorage: (name, data) => {
    localStorage.setItem(name, data);
  },
  saveLocalStorageJSON: (name, jsonData) => {
    localStorage.setItem(name, JSON.stringify(jsonData));
  },
  getStorage: (name) => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name);
    }
  },
  getStoreJson: (name) => {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name));
    }
  },
  clearStore: (name) => {
    localStorage.removeItem(name);
  },
  setCookie: (name, value, days) => {
    let expires = '';
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  },
  getCookie: (name) => {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  eraseCookie: (name) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  },
  calcAmount: (cartList) => {
    return cartList.reduce((total, item, idx) => {
      return (total += item.quantity);
    }, 0);
  },
  calcSubTotal: (cartList) => {
    let sum = 0;
    let totalItem = cartList.reduce((total, item, idx) => {
      return (total += item.price * item.quantity);
    }, 0);
    return (sum += totalItem);
  },
};

export const http = axios.create({
  baseURL: 'https://shop.cyberlearn.vn',
  timeout: 30000,
});
http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${getCookie(TOKEN)}`,
      TokenCybersoft: TOKEN_CYBER,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//C???u h??nh cho t???t c??? c??c response api
http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    //B???t l???i 400 ho???c 404
    if (err.response?.status === 400 || err.response?.status === 404) {
      //L???i do tham s??? => backend tr??? v??? 400 ho???c 404 m??nh s??? x??? l??
      alert('tham s??? kh??ng h???p l???!');
      history.push('/');
    }
    if (err.response?.status === 401 || err.response.status === 403) {
      const isMyTokenExpired = isExpired(getStorage(TOKEN));
      //token h???t h???n
      if (isMyTokenExpired) {
        alert('H???t phi??n ????ng nh???p y??u c???u ????ng nh???p l???i!');
        clearStore(TOKEN);
        clearStore(USER_SIGNIN);
        //Chuy???n h?????ng trang d???ng f5
        window.location.href = '/signin';
      }
      history.push('/signin');
    }
    return Promise.reject(err);
  },
);
