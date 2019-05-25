/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const pagesTemplate = path.resolve(
  __dirname,
  `src/templates/markdown-page.template.tsx`
);
const blogPostTemplate = path.resolve(
  __dirname,
  `src/templates/blog-post.template.tsx`
);

const { createFilePath } = require('gatsby-source-filesystem');
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    let slug;
    if (node.fileAbsolutePath.includes('content/blog')) {
      slug = `/blog${createFilePath({
        node,
        getNode,
        basePath: 'blog',
      })}`;
    } else {
      slug =
        node.frontmatter.slug ||
        createFilePath({ node, getNode, basePath: `pages` });
    }
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix
      value: slug,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    });

    createNodeField({
      name: 'author',
      node,
      value: node.frontmatter.author || 'Danut Codrescu',
    });

    createNodeField({
      name: 'date',
      node,
      value: node.frontmatter.date,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          fragment BlogPost on Mdx {
            id
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              title
            }
          }

          query {
            blog: allMdx(
              filter: { fileAbsolutePath: { regex: "/content/blog/" } }
            ) {
              edges {
                node {
                  ...BlogPost
                }
              }
            }

            pages: allMdx(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }

        const { pages, blog } = result.data;

        // We'll call `createPage` for each result
        pages.edges.forEach(({ node }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: pagesTemplate,
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id },
          });
        });

        blog.edges.forEach(({ node }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: blogPostTemplate,
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id },
          });
        });
      })
    );
  });
};
