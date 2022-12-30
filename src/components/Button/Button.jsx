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
      className="flex items-center justify-center gap-3 p-3 text-sm font-medium leading-5 text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
      {...props}
    >
      {leftIcon}
      <span>{children}</span>
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
