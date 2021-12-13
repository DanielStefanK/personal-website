import React from "react";
import MainFrame from "../components/MainFrame";

import Avatar from "../assests/images/wave-avatar.png";

const Contact = () => {
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
                <p className="title is-1">Contact me</p>
                <div className="columns is-mobile">
                  <div className="column is-half is-offset-one-quarter">
                    <form
                      name="contact"
                      method="post"
                      data-netlify="true"
                      action="/thank-you"
                    >
                      <input
                        className="input is-large"
                        type="text"
                        name="name"
                        required
                        placeholder="Name"
                      ></input>
                      <input
                        className="input is-large mt-5"
                        type="email"
                        name="email"
                        required
                        placeholder="E-Mail"
                      ></input>
                      <textarea
                        className="textarea is-medium mt-5"
                        required
                        name="message"
                        placeholder="Message"
                      ></textarea>
                      <div className="has-text-right">
                        <button
                          type="submit"
                          className="button is-primary is-large mt-5"
                        >
                          Submit
                        </button>
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
