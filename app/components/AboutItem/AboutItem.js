import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-scroll";

const AboutItem = (props) =>
  props.wide ? (
    <div className="list-item-wrapper" data-aos="fade-up">
      <span className="pwords wide">
        <div className="pheader">{props.title}</div>
        <div
          className="pinfo about"
          dangerouslySetInnerHTML={{ __html: props.info }}
        ></div>
      </span>
      <div className="categories">
        <span className="cat">
          <Link
            activeClass="selected"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            className="router-link dev"
            to="apps"
          >
            <img src={props.imgs[0]} alt="" />
            <span className="title">Software Engineering</span>
          </Link>
        </span>
        <span className="cat">
          <Link
            activeClass="selected"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            className="router-link dev"
            to="solutions"
          >
            <img src={props.imgs[1]} alt="" />
            <span className="title">Solutions Engineering</span>
          </Link>
        </span>
        <span className="cat">
          <Link
            activeClass="selected"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            className="router-link dev"
            to="analytics"
          >
            <img src={props.imgs[2]} alt="" />
            <span className="title">Data Analytics</span>
          </Link>
        </span>
        <span className="cat">
          <Link
            activeClass="selected"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            className="router-link dev"
            to="consulting"
          >
            <img src={props.imgs[3]} alt="" />
            <span className="title">Consulting</span>
          </Link>
        </span>
      </div>
    </div>
  ) : (
    <div className="list-item-wrapper" data-aos="fade-up-left">
      <span className="pimg">
        {props.imgs ? (
          props.imgs.map((img) => {
            if (props.link) {
              return (
                <a href={props.link}>
                  <img key={img} src={img} alt="photo" className="img" />
                </a>
              );
            }

            return <img key={img} src={img} alt="photo" className="img" />;
          })
        ) : (
          <img
            src="https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640"
            alt=""
          />
        )}
      </span>
      <span className="pwords">
        <div className="pheader">{props.title}</div>
        <div
          className="pinfo about"
          dangerouslySetInnerHTML={{ __html: props.info }}
        ></div>
      </span>
    </div>
  );

AboutItem.propTypes = {
  imgs: PropTypes.array,
  link: PropTypes.string,
  wide: PropTypes.bool,
};

export default AboutItem;
