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
import Eslint from '../images/techIcons/eslint.svg';
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
        resume {
          url
        }
      }
    }
  `);

  return (
    <>
      <SEO title="About" />
      <Layout>
        <div className="flex flex-col items-start">
          <h1 className="flex flex-col items-start font-bold text-3xl leading-tight">{'>'} About Me</h1>
          <div
            className="font-thin text-lg leading-tight text-secondary-text text-left"
            dangerouslySetInnerHTML={{ __html: datoCmsAbout.aboutMeTextNode.childMarkdownRemark.html }}
          />
          <div className="my-4 w-full flex flex-col items-start">
            <a href={datoCmsAbout.resume.url} target="_blank" rel="noreferrer">
              <button className="p-3 rounded-lg bg-accent text-primary">Download my resume</button>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start text-left">
          <h1 className="lex flex-col items-start font-bold text-3xl leading-tight">{'>'} My Tech Stack</h1>
          <div className="font-thin text-lg leading-tight text-secondary-text text-left">
            <p>
              In the brief year that I've been a developer, I've had the chance to work with the following technology
              either professionally or on the side.
            </p>
          </div>
          <div className="flex flex-row flex-wrap items-start py-4 px-8 text-4xl">
            <span className="mr-8 mb-6 cursor-pointer" title="HTML5">
              <Html />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="CSS3">
              <Css />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Javascript">
              <Javascript />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="ReactJS">
              <Reactjs />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="NodeJS">
              <Nodejs />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Postgres">
              <Postgres />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="GraphQL">
              <Graphql />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Jenkins">
              <Jenkins />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="ESLint">
              <Eslint />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Webpack">
              <Webpack />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="MongoDB">
              <Mongodb />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="AWS">
              <Amazon />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Redis">
              <Redis />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Jest">
              <Jest />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Docker">
              <Docker />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Sentry">
              <Sentry />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Redux">
              <Redux />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Heroku">
              <Heroku />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Apollo">
              <Apollo />
            </span>
            <span className="mr-8 mb-6 cursor-pointer" title="Netlify">
              <Netlify />
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ABoutPage;
