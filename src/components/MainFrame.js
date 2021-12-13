import { Link } from "gatsby";
import React from "react";
import Footer from "./Footer";
import NavHeader from "./NavHeader";

const MainFrame = (props) => {
  return (
    <main>
      <NavHeader />
      {props.children}
      {!props.hideContact && (
        <section className="section call-to-action is-primary has-text-centered">
          <div className="container is-narrow">
            <div className="box">
              <div className="columns level">
                <div className="column level-item">
                  <h1 className="title">Open for offers</h1>
                </div>
                <div className="column level-item">
                  <p>
                    Looking for a Developer? Contact me through my website and I
                    will get back to you as soon as possible.
                  </p>
                </div>
                <div className="column level-item">
                  <Link
                    className="button is-primary is-outlined is-rounded is-medium"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
};

export default MainFrame;
