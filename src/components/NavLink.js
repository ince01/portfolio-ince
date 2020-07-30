import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NavLink = ({ children, ...rest }) => (
  <Link className="hover:text-accent" activeClassName="text-main-text" {...rest}>
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
