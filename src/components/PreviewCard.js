import { Link } from "gatsby";
import React from "react";
const { GatsbyImage } = require("gatsby-plugin-image");

const PreviewCard = ({ img, description, title, readtime, date, link }) => {
  return (
    <Link to={link}>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <GatsbyImage alt={title} image={img} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{date}</p>
            </div>
          </div>

          <div className="content">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default PreviewCard;
