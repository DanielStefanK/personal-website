import * as React from "react";

import "./styles.scss";

import MainFrame from "../components/MainFrame.js";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
// markup
const NotFoundPage = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/confused-avatar.png" }) {
        childImageSharp {
          gatsbyImageData(height: 350)
        }
      }
    }
  `);
  return (
    <MainFrame>
      <section className="has-text-centered">
        <GatsbyImage
          className="avatar"
          alt="Daniel Stefan's Avatar"
          image={file.childImageSharp.gatsbyImageData}
        />
      </section>
      <section className="section has-text-centered">
        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
          This page was not found
        </h1>
      </section>
    </MainFrame>
  );
};

export default NotFoundPage;
