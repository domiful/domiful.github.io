import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ContactItem = (props) => (
  <div className="list-item-wrapper">
    <span className="pwords">
      <div className="pheader">{props.title}</div>
      <div className={"pinfo " + props.section}>{props.info}</div>
    </span>
    <span className="pimg">
      <img src="https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640" alt=""/>
    </span>
    
  </div>
);

ContactItem.propTypes = {
  item: PropTypes.any
};

export default ContactItem;
