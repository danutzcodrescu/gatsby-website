import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container } from './about';

interface Props {
  data: {
    allMdx: {
      edges: {
        node: {
          id: number;
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            author: string;
            date: string;
            description: string;
            path: string;
          };
        };
      }[];
    };
  };
}

const BlogPage = ({ data }: Props) => {
  const { edges: posts } = data.allMdx;
  return (
    <Layout path="/blog">
      <SEO title="Blog" />
      <Container>
        {posts.map(({ node }) => {
          const { title, author } = node.frontmatter;
          return (
            <div key={node.id}>
              <header>
                <div>{title}</div>
                {/* <div>Posting By {author}</div> */}
              </header>
              <Link to={node.fields.slug}>View Article</Link>
              <hr />
            </div>
          );
        })}
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query blogIndex {
    allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            description
            author
            date
          }
        }
      }
    }
  }
`;
