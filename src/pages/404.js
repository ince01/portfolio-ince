import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="py-12">
      <p className="font-light text-2xl leading-tight text-main-text">PAGE NOT FOUND</p>
      <p className="text-secondary-text">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
