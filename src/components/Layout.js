import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import { ThemeContext } from '../contexts/themeContext';

const Layout = ({ children }) => {
  const { preferDark } = useContext(ThemeContext);

  return (
    <div
      className={`${
        preferDark ? 'theme-dark' : 'theme-light'
      } bg-primary text-main-text text-center transition-all duration-300 min-h-screen`}
    >
      <div className="max-w-none md:max-w-md lg:max-w-screen-lg m-0 md:m-auto lg:m-auto px-4 md:px-0 lg:px-0">
        <Header />
        <main className="min-h-frame py-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
