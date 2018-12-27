import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ContactItem = (props) => (
  <div className="contact-item-wrapper">

    <span className="pimg"> 
      <img src="https://cdn3.iconfinder.com/data/icons/mix-2/100/Untitled-24-512.png" alt="email"/>
      <img src="https://s18955.pcdn.co/wp-content/uploads/2017/05/LinkedIn.png" alt="linkedin"/>
    </span>
    
  </div>
);

ContactItem.propTypes = {
  item: PropTypes.any
};

export default ContactItem;
