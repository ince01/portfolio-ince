import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Html from '../images/techIcons/html.svg';
import Css from '../images/techIcons/css.svg';
import Javascript from '../images/techIcons/js.svg';
import Reactjs from '../images/techIcons/reactjs.svg';
import Nodejs from '../images/techIcons/nodejs.svg';
import Mongodb from '../images/techIcons/mongodb.svg';
import Postgres from '../images/techIcons/postgres.svg';
import Jest from '../images/techIcons/jest.svg';
import Graphql from '../images/techIcons/graphql.svg';
import Amazon from '../images/techIcons/amazon.svg';
import Redux from '../images/techIcons/redux.svg';
import Apollo from '../images/techIcons/apollo.svg';
import Heroku from '../images/techIcons/heroku.svg';
import Netlify from '../images/techIcons/netlify.svg';
import Docker from '../images/techIcons/docker.svg';
import Sentry from '../images/techIcons/sentry.svg';
import Redis from '../images/techIcons/redis.svg';
import Jenkins from '../images/techIcons/jenkins.svg';
import Webpack from '../images/techIcons/webpack.svg';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ABoutPage = () => {
  const { datoCmsAbout } = useStaticQuery(graphql`
    query AboutPageInfo {
      datoCmsAbout {
        aboutMeTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="About" />
      <Layout>
        <div className="flex flex-col items-start">
          <h1 className="flex flex-col items-start font-black text-3xl leading-tight">{'>'} About Me</h1>
          <div
            className="py-6 font-thin text-lg leading-tight text-secondary-text text-left"
            dangerouslySetInnerHTML={{ __html: datoCmsAbout.aboutMeTextNode.childMarkdownRemark.html }}
          />
        </div>
        <div className="flex flex-col items-start text-left">
          <h1 className="lex flex-col items-start font-black text-3xl leading-tight">{'>'} My Tech Stack</h1>
          <div className="py-6 font-thin text-lg leading-tight text-secondary-text text-left">
            <p>
              In the brief year that I've been a developer, I've had the chance to work with the following technology
              either professionally or on the side.
            </p>
          </div>
          <image src="../images/techIcons/icon.png" />
          <div className="flex flex-row flex-wrap items-start px-8 text-4xl">
            <span className="mr-8 mb-6">
              <Html />
            </span>
            <span className="mr-8 mb-6">
              <Css />
            </span>
            <span className="mr-8 mb-6">
              <Javascript />
            </span>
            <span className="mr-8 mb-6">
              <Reactjs />
            </span>
            <span className="mr-8 mb-6">
              <Nodejs />
            </span>
            <span className="mr-8 mb-6">
              <Postgres />
            </span>
            <span className="mr-8 mb-6">
              <Graphql />
            </span>
            <span className="mr-8 mb-6">
              <Jenkins />
            </span>
            <span className="mr-8 mb-6">
              <Webpack />
            </span>
            <span className="mr-8 mb-6">
              <Mongodb />
            </span>
            <span className="mr-8 mb-6">
              <Amazon />
            </span>
            <span className="mr-8 mb-6">
              <Redis />
            </span>
            <span className="mr-8 mb-6">
              <Jest />
            </span>
            <span className="mr-8 mb-6">
              <Docker />
            </span>
            <span className="mr-8 mb-6">
              <Sentry />
            </span>
            <span className="mr-8 mb-6">
              <Redux />
            </span>
            <span className="mr-8 mb-6">
              <Heroku />
            </span>
            <span className="mr-8 mb-6">
              <Apollo />
            </span>
            <span className="mr-8 mb-6">
              <Netlify />
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ABoutPage;
