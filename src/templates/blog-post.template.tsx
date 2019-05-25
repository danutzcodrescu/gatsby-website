// @ts-ignore
import { graphql } from 'gatsby';
// @ts-ignore
import { MDXRenderer } from 'gatsby-mdx';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container } from '../pages/about';

interface Props {
  children: React.ReactNode;
  location: Location;
  data: any;
}

export default function BlogPost(props: Props) {
  return (
    <Layout path={props.location.pathname}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Container>
        <h1>{props.data.mdx.fields.title}</h1>
        <MDXRenderer>{props.data.mdx.code.body}</MDXRenderer>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      fields {
        slug
        title
      }
      code {
        body
      }
    }
  }
`;
