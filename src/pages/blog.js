import * as React from "react";
import "./styles.scss";

import Avatar from "../assests/images/avatar.png";

import MainFrame from "../components/MainFrame.js";

// markup
const IndexPage = () => {
  return (
    <MainFrame>
      <section className="has-text-centered">
        <img className="avatar" alt="Daniel Stefan's Avatar" src={Avatar} />
      </section>
      <section className="section has-text-centered">
        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
          Coming Soon...
        </h1>
      </section>
    </MainFrame>
  );
};

export default IndexPage;
