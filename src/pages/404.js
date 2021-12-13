import * as React from "react";

import "./styles.scss";

import Avatar from "../assests/images/confused-avatar.png";
import MainFrame from "../components/MainFrame.js";
// markup
const NotFoundPage = () => {
  return (
    <MainFrame>
      <section className="has-text-centered">
        <img className="avatar" alt="Daniel Stefan's Avatar" src={Avatar} />
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
