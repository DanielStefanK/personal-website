import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { INSTA_LINK, LINKEDIN_LINK, TWITTER_LINK } from "../constats";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Footer = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          gatsbyImageData(height: 70)
        }
      }
    }
  `);

  return (
    <footer className="section is-primary is-small has-text-centered">
      <div className="container is-narrow">
        <Link className="logo" to="/">
          <GatsbyImage
            image={file.childImageSharp.gatsbyImageData}
            backgroundColor={false}
            alt="Daniel Stefan Klose | Full-Stack Developer"
          />
        </Link>
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="title is-size-4-touch">
              Life, Learning, &amp; leveling up my dev skills.
            </h1>
          </div>
        </div>
        <div className="social-icons">
          <a
            className="button is-medium"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon is-small">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
          <a
            className="button is-medium"
            href={INSTA_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon is-small">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
          <a
            className="button is-medium"
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon is-small">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </a>
          <a className="button is-medium" href="/contact" target="_blank">
            <span className="icon is-small">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </a>
        </div>
        <div className="copyright">
          Crafted by{" "}
          <span
            className="icon has-white-text"
            style={{ verticalAlign: "middle" }}
          >
            <svg
              className="svg-inline--fa fa-copyright"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="copyright"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM255.1 176C255.1 176 255.1 176 255.1 176c21.06 0 40.92 8.312 55.83 23.38c9.375 9.344 24.53 9.5 33.97 .1562c9.406-9.344 9.469-24.53 .1562-33.97c-24-24.22-55.95-37.56-89.95-37.56c0 0 .0313 0 0 0c-33.97 0-65.95 13.34-89.95 37.56c-49.44 49.88-49.44 131 0 180.9c24 24.22 55.98 37.56 89.95 37.56c.0313 0 0 0 0 0c34 0 65.95-13.34 89.95-37.56c9.312-9.438 9.25-24.62-.1562-33.97c-9.438-9.312-24.59-9.219-33.97 .1562c-14.91 15.06-34.77 23.38-55.83 23.38c0 0 .0313 0 0 0c-21.09 0-40.95-8.312-55.89-23.38c-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z"
              ></path>
            </svg>
          </span>{" "}
          daniel.stefan
        </div>
        <div className="made-by-bulma">
          <a href="https://bulma.io">
            <img
              src="https://bulma.io/images/made-with-bulma--white.png"
              alt="Made with Bulma"
              width="163"
              height="31"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
