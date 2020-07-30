/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';

import './src/styles/index.css';
import ThemeContextProvider from './src/contexts/themeContext';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
