import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query siteData {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  return (
    <footer className="text-base text-secondary-text text-right py-3">
      © {new Date().getFullYear()}, {site.siteMetadata.copyright}
    </footer>
  );
};

export default Footer;
