const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: "/blog" + value,
    });
  }
};

const buildPages = (edges, createPage) => {
  const pages = edges;

  // create pages with the filtered edges
  pages.map((page) => {
    console.log(`Creating page ${JSON.stringify(page.node.frontmatter)}`);

    createPage({
      path: page.node.fields.slug,
      component: path.resolve(`src/templates/post.js`),
      context: {
        id: page.node.id,
        slug: page.node.fields.slug,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // graphql query for pages only
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(content/blog)/i" } }
        ) {
          edges {
            node {
              id
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
  );
  // if errors then throw
  if (result.errors) {
    throw result.errors;
  }
  console.log("Creating pages ---->>>>");
  // Create pages
  buildPages(result.data.allMarkdownRemark.edges, createPage);
};
