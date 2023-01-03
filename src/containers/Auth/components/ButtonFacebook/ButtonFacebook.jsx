import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonFacebook = ({ to, href, disabled, children, leftIcon, onClick, name, ...passProps }) => {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  return (
    <Comp
      className="flex items-center justify-center w-full py-[15px] mb-3 text-sm font-medium leading-snug text-white transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-blue-700"
      {...props}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      {leftIcon}
      {children}
    </Comp>
  );
};

ButtonFacebook.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default ButtonFacebook;
