import * as React from "react";
import "./styles.scss";

import "./styles.scss";
import MainFrame from "../components/MainFrame.js";
import { graphql, useStaticQuery } from "gatsby";
import PreviewCard from "../components/PreviewCard";

// markup
const IndexPage = () => {
  const {
    allMarkdownRemark: { edges: blogPosts },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              update(formatString: "MMMM DD, YYYY")
              featureImg {
                childImageSharp {
                  gatsbyImageData
                }
              }
              description
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <MainFrame>
      <section className="container">
        <div className="columns">
          {blogPosts.map(({ node: item }) => (
            <div className="column" key={item.id}>
              <PreviewCard
                img={
                  item.frontmatter.featureImg.childImageSharp.gatsbyImageData
                }
                description={item.frontmatter.description}
                title={item.frontmatter.title}
                link={item.fields.slug}
              />
            </div>
          ))}
        </div>
      </section>
    </MainFrame>
  );
};

export default IndexPage;
