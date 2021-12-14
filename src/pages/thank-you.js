import React from "react";
import MainFrame from "../components/MainFrame";

import "./styles.scss";

import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ThankYou = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/wave-avatar.png" }) {
        childImageSharp {
          gatsbyImageData(height: 350)
        }
      }
    }
  `);
  return (
    <MainFrame hideContact>
      <section className="section has-text-centered">
        <div className="card">
          <div className="card-content has-centered-text">
            <div className="media">
              <div className="media-content">
                <section className="has-text-centered">
                  <GatsbyImage
                    className="avatar"
                    style={{ marginTop: "-100px" }}
                    alt="Daniel Stefan's Avatar"
                    image={file.childImageSharp.gatsbyImageData}
                  />
                </section>
                <p className="title is-1">
                  Thank you for contacting me. I will comeback to you as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainFrame>
  );
};

export default ThankYou;
