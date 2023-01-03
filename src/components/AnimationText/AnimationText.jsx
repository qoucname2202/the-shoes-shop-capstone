import React, { Fragment } from 'react';
import AnimatedText from 'react-animated-text-content';

const AnimationText = ({
  type = 'words',
  animationType = 'lights',
  className = 'animated-paragraph text-white text-3xl font-light',
  children,
}) => {
  return (
    <Fragment>
      <AnimatedText
        type={type}
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType={animationType}
        interval={0.5}
        duration={0.5}
        className={className}
      >
        {children}
      </AnimatedText>
    </Fragment>
  );
};

export default AnimationText;
