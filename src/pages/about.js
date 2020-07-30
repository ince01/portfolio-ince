import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaFacebook as Facebook,
  FaEnvelope as Mail,
} from 'react-icons/fa';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ABoutPage = () => {
  const { datoCmsSocialProfile, datoCmsHome } = useStaticQuery(graphql`
    query AboutPageInfo {
      datoCmsSocialProfile {
        linkedin
        twitter
        facebook
        github
        email
      }
      datoCmsHome {
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start font-light text-6xl leading-tight">
            <p>Hello, I'm</p>
            <p className="text-accent">Nhat Toan.</p>
          </div>
          <div className="flex flex-col items-start mt-6">
            <h1 className="text-4xl font-normal leading-tight">async {'{'}</h1>
            <div
              className="text-2xl font-normal leading-tight text-secondary-text text-left mx-12 my-4"
              dangerouslySetInnerHTML={{
                __html: datoCmsHome.introTextNode.childMarkdownRemark.html,
              }}
            />
            <h1 className="text-4xl font-normal leading-tight">{'}'}</h1>
          </div>
          <div className="flex flex-row text-4xl mt-12 text-main-text">
            <a className="mr-5 hover:text-accent" target="_blank" rel="noreferrer" href={datoCmsSocialProfile.twitter}>
              <Twitter />
            </a>
            <a className="mr-5 hover:text-accent" target="_blank" rel="noreferrer" href={datoCmsSocialProfile.facebook}>
              <Facebook />
            </a>
            <a className="mr-5 hover:text-accent" target="_blank" rel="noreferrer" href={datoCmsSocialProfile.github}>
              <Github />
            </a>
            <a className="mr-5 hover:text-accent" target="_blank" rel="noreferrer" href={datoCmsSocialProfile.linkedin}>
              <Linkedin />
            </a>
            <a className="mr-5 hover:text-accent" target="_blank" rel="noreferrer" href={datoCmsSocialProfile.email}>
              <Mail />
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ABoutPage;
