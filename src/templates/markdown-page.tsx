import { graphql } from 'gatsby';
import * as React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { DarkThemeProps } from 'theme/dark.theme';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div<DarkThemeProps>`
  max-width: 700px;
  padding: 1.45rem 1.0875rem;
  color: ${props => props.palette.primary};
  margin: 0 auto;
  text-align: justify;
  > * {
    margin: 1.5rem 0;
  }
`;

interface Props {
  children: React.ReactNode;
  data: any;
  location: Location;
}
export default function MdTemplate(props: Props) {
  return (
    <Layout path={props.location.pathname}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ThemeConsumer>
        {theme => (
          <Container {...theme}>
            <div
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html,
              }}
            />
          </Container>
        )}
      </ThemeConsumer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
