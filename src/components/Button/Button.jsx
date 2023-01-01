import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ to, href, disabled, children, leftIcon, onClick, ...passProps }) => {
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
      className="inline-flex items-center gap-2 px-4 py-2.5 mb-2 font-medium tracking-wider text-white transition duration-300 ease-in bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-center rounded-lg"
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
