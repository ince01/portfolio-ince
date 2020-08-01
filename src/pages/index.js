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

const IndexPage = () => {
  const { datoCmsSocialProfile, datoCmsHome } = useStaticQuery(graphql`
    query HomePageInfo {
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
          <div className="flex flex-col items-start text-left font-light text-4xl md:text-6xl lg:text-6xl leading-tight">
            <span>Hello, I'm</span>
            <span className="text-accent">Nhat Toan.</span>
          </div>
          <div className="flex flex-col items-start mt-6">
            <span className="text-2xl md:text-4xl lg:text-4xl text-left font-normal leading-tight font-code">
              async {'{'}
            </span>
            <div
              className="text-xl md:text-2xl lg:text-2xl font-normal leading-tight text-secondary-text text-left mx-6 md:mx-12"
              dangerouslySetInnerHTML={{
                __html: datoCmsHome.introTextNode.childMarkdownRemark.html,
              }}
            />
            <span className="text-2xl md:text-4xl lg:text-4xl font-normal leading-tight font-code">{'}'}</span>
          </div>
          <div className="flex flex-row flex-wrap items-start text-4xl mt-10 text-main-text">
            <a
              className="mr-5 mb-2 hover:text-accent"
              target="_blank"
              rel="noreferrer"
              href={datoCmsSocialProfile.twitter}
            >
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
            <a className="mr-5 hover:text-accent" href={datoCmsSocialProfile.email}>
              <Mail />
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
