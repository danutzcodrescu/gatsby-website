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
  path: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 756px) {
    height: auto;
  }
`;
const Main = styled.main<{ path: string }>`
  min-height: ${props =>
    props.path === '/' || props.path === '/contact'
      ? 'calc(100vh - 160px)'
      : 'none'};
  @media (max-width: 375px) {
    min-height: calc(100vh - 300px);
  }
`;

const Layout = ({ children, path }: Props) => (
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

          <Main path={path}>{children}</Main>
          <Footer />
        </Container>
      </ThemeProvider>
    )}
  />
);

export default Layout;
