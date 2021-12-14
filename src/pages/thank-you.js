import React from "react";
import MainFrame from "../components/MainFrame";

import "./styles.scss";

import Avatar from "../assests/images/wave-avatar.png";

const ThankYou = () => {
  return (
    <MainFrame hideContact>
      <section className="section has-text-centered">
        <div className="card">
          <div className="card-content has-centered-text">
            <div className="media">
              <div className="media-content">
                <section className="has-text-centered">
                  <img
                    className="avatar"
                    width="200"
                    alt="Daniel Stefan's Avatar"
                    src={Avatar}
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
