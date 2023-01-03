import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ to, href, disabled, children, leftIcon, onClick, name, ...passProps }) => {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  // Format link using route version 6
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  return (
    <Comp
      className={`inline-flex items-center gap-2 px-4 py-2.5 mb-2 font-medium tracking-wider text-white transition duration-300 ease-in border-2 focus:outline-none text-center rounded-lg ${
        name === 'animate-button'
          ? 'border-purple-500 hover:bg-gradient-to-r p-[5px] from-blue-400 to-purple-600 hover:border-0 hover:py-[12px]'
          : 'bg-gradient-to-r from-blue-400 to-purple-600 hover:from-purple-500 hover:to-pink-500 border-none'
      }`}
      {...props}
    >
      {leftIcon}
      {children}
    </Comp>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
