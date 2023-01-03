import React from 'react';
import './Loading.scss';
const Loading = () => {
  return (
    <div className="loader flex justify-center items-center">
      <div className="music-waves-2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
