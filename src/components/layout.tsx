/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme/dark.theme';
import { Footer } from './footer';
import Header from './header';
import './layout.css';

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
              maxHeight: 'calc(100vh - 160px)',
            }}
          >
            <main>{children}</main>
          </div>
          <Footer />
        </Container>
      </ThemeProvider>
    )}
  />
);

export default Layout;
