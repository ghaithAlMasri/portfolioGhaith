import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dataForms, setDataForms] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { username, email, message } = dataForms;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDataForms({ ...dataForms, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: dataForms.username,
      email: dataForms.email,
      message: dataForms.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">
        Lets <span>Chat</span>!
      </h2>
      <div className="app__footer-cards app__flex">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:almasrighaith101@gmail.com">almasrighaith101@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:004917645780040">+49 (0) 17645780040</a>
        </div>
      </div>

      {!isSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app_flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleOnChange}
            />
          </div>
          <div className="app_flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? "Submit Message" : "Sending..."}
            </button>
          </div>
        </div>
      ) : (
        <div className="app__flex">
            <h3>Message well recived, I will get in touch soon!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
