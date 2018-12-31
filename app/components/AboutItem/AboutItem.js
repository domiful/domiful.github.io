import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


const AboutItem = (props) => (
  <div className="list-item-wrapper" data-aos="fade-up-left">
    <span className="pimg">
    
    {
      props.imgs ? props.imgs.map(img=>{
         if(props.link){
           return <a href={props.link}><img key={img}
           src={img}
           alt="photo"
           className='img'
         /></a>
         }
         return <img key={img}
            src={img}
            alt="photo"
            className='img'
          />
        }) : <img src="https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640" alt=""/>
      }
      
    </span>
    <span className="pwords">
      <div className="pheader">{props.title}</div>
      <div className="pinfo about">{props.info}</div>
    </span>
    
  </div>
);

AboutItem.propTypes = {
  item: PropTypes.any
};

export default AboutItem;
