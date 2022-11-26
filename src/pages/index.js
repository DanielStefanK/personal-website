import * as React from "react";
import "./styles.scss";

import MainFrame from "../components/MainFrame.js";
import RecentMusic from "../components/RecentMusic.js";
import Last6BlogPosts from "../components/Last6BlogsPosts";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <MainFrame>
      <section className="hero is-white has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  Full-Stack Developer, Learner &amp; Mountainbiker
                </h1>
                <h2 className="subtitle is-size-4-desktop">
                  I code useful things, and I love what I do.
                </h2>
                <StaticImage
                  className="avatar"
                  alt="Daniel Stefan's Avatar"
                  placeholder="blurred"
                  blurredOptions={{ width: 50 }}
                  src="../assets/images/avatar.png"
                />
                <RecentMusic />
              </div>
            </div>
          </div>
        </div>
        <section className="section is-medium animate is-primary has-text-centered is-long mt-6">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                  Hi, I’m Daniel Stefan. Nice to meet you.
                </h1>
                <h2 className="subtitle is-size-5-desktop">
                  My passion for developing began when my uncle introduced me to
                  web development. Since then I gathered a lot of skill in many
                  different topics, but my man focus still remains on developing
                  for the web and everything that follows. Whether it is
                  developing with frontend frameworks like react, vue or svelt,
                  writing api in Java, GoLang or node or deploying everything in
                  docker and kubernetes.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects is-medium is-white has-text-centered">
          <div className="container is-narrow">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
              Recent Blog Posts
            </h1>
            <h2 className="subtitle is-size-5-desktop">
              Here are a few of my recent blog post. Check out all posts{" "}
              <Link to="/blog">here</Link>.
            </h2>
            <Last6BlogPosts />
            <div className="columns is-centered"></div>
          </div>
        </section>
      </section>
    </MainFrame>
  );
};

export default IndexPage;
