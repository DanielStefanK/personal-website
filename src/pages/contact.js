import React, { useState } from "react";
import MainFrame from "../components/MainFrame";

import "./styles.scss";

import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Contact = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/wave-avatar.png" }) {
        childImageSharp {
          gatsbyImageData(height: 350)
        }
      }
    }
  `);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const [submitData, setSubmitData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...submitData,
      }),
    })
      .then(() => navigate("/thank-you"))
      .catch((error) => alert(error));
  };

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
                <p className="title is-1">Contact me</p>
                <div className="columns">
                  <div className="column is-half is-offset-one-quarter">
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      action="/thank-you"
                      onSubmit={handleSubmit}
                    >
                      <input
                        className="input is-large"
                        type="text"
                        name="name"
                        value={submitData.name}
                        onChange={(e) =>
                          setSubmitData({ ...submitData, name: e.target.value })
                        }
                        required
                        placeholder="Name"
                      ></input>
                      <input
                        className="input is-large mt-5"
                        type="email"
                        name="email"
                        value={submitData.email}
                        onChange={(e) =>
                          setSubmitData({
                            ...submitData,
                            email: e.target.value,
                          })
                        }
                        required
                        placeholder="E-Mail"
                      ></input>
                      <textarea
                        className="textarea is-medium mt-5"
                        required
                        name="message"
                        value={submitData.message}
                        onChange={(e) =>
                          setSubmitData({
                            ...submitData,
                            message: e.target.value,
                          })
                        }
                        placeholder="Message"
                      ></textarea>
                      <div className="has-text-right">
                        <input
                          type="submit"
                          className="button is-primary is-large mt-5"
                        ></input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainFrame>
  );
};

export default Contact;
