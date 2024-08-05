import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import m from "../../images/contact/mail.png";
import ms from "../../images/contact/mail_selected.png";
import res from "../../images/about/resume_snap.png";

const ContactItem = (props) => (
  <div className="contact-item-wrapper">
    <span className="pimg">
      <a href="mailto:dom@notdom.com?subject=I was on your site and ...">
        <img
          src={m}
          alt="email"
          onMouseOver={(e) => (e.currentTarget.src = ms)}
          onMouseOut={(e) => (e.currentTarget.src = m)}
        />
      </a>

      <a href="https://www.linkedin.com/in/domiful/" target="_blank">
        <img
          src="https://s18955.pcdn.co/wp-content/uploads/2017/05/LinkedIn.png"
          alt="linkedin"
        />
      </a>

      <a
        className="resume"
        href="https://www.dropbox.com/scl/fi/4thkhj1w14s0hkbi1ydyp/resume24b.pdf?rlkey=cbq870e9xlvsxr1qs97xktr5w&dl=0"
        target="_blank"
      >
        <img src={res} alt="You shouldn't leave empty handed, so here ya go!" />
      </a>
    </span>
  </div>
);

ContactItem.propTypes = {
  item: PropTypes.any,
};

export default ContactItem;
