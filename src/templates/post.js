import React from "react";
import { graphql } from "gatsby";
import MainFrame from "../components/MainFrame";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faEdit } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
  const page = props.data.markdownRemark;
  const meta = page.frontmatter;

  return (
    <MainFrame>
      <div className="container mt-5 is-justify-content-center">
        <div className="post-feature-img">
          <figure className="image">
            <GatsbyImage
              alt={meta.description}
              image={meta.featureImg.childImageSharp.gatsbyImageData}
            />
          </figure>
        </div>
        <div className="card has-text-left blog-post-card">
          <div className="card-title columns">
            <h1 className="is-size-1 has-text-weight-bold column is-three-quarters">
              {meta.title}
            </h1>
            <div className="is-one-quarter column">
              <div className="is-flex is-justify-content-space-between">
                <FontAwesomeIcon icon={faCalendar} className="mr-3" />{" "}
                {meta.date}
              </div>
              {meta.date !== meta.update && (
                <div className="is-flex is-justify-content-space-between">
                  <FontAwesomeIcon icon={faEdit} className="mr-3" /> {meta.date}
                </div>
              )}
              <div className="is-flex is-justify-content-space-between">
                <FontAwesomeIcon icon={faClock} className="mr-3" />{" "}
                {page.timeToRead} Minute{page.timeToRead > 1 ? "s" : ""}
              </div>
            </div>
          </div>
          <div className="card-content blog-post">
            <article dangerouslySetInnerHTML={{ __html: page.html }}></article>
          </div>
        </div>
      </div>
    </MainFrame>
  );
};

export default Post;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        update(formatString: "MMMM DD, YYYY")
        description
        featureImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
