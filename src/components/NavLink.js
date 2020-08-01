import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NavLink = ({ children, ...rest }) => (
  <Link
    className="hover:text-accent hover:border-b hover:border-red"
    activeClassName="text-main-text border-solid border-b border-accent"
    {...rest}
  >
    {children}
  </Link>
);

NavLink.defaultProps = {
  children: null,
};

NavLink.propTypes = {
  children: PropTypes.elementType,
};

export default NavLink;
