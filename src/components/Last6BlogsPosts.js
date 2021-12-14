import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PreviewCard from "./PreviewCard";

const Last6BlogPosts = () => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        limit: 6
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            featureImg {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="project-grid">
      <div className="columns is-multiline">
        {query.allMarkdownRemark.nodes.map((item) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Last6BlogPosts;
