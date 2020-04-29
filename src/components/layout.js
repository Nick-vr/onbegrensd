import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
// import { Location } from "@reach/router"

import Header from './header';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
    ${'' /* min-height: calc(100vh - 10px); */}
    display: block;
    position: relative;
    border-top: none;
    border-left: 5px solid #000;
    border-right: 5px solid #000;
    border-bottom: 5px solid #000;
    background: #FFF;
    color: #000;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    color: #FFF;
    outline: none;
  }
  input, textarea, button {
    font-family: inherit;
  }
`;

const StyledMain = styled.main`
  min-height: calc(100vh - 389px);
`;

// document.addEventListener('snipcart.ready', () => {
//   window.Snipcart.setLang('nl');
// });

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledMain>{children}</StyledMain>
      <Footer />
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
