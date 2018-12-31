import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ImageZoom from 'react-medium-image-zoom';


const WorkItem = (props) => (
  <div className="work-item-wrapper" data-aos="fade-up-left">
    <span className="pimg">
    
    {
      props.imgs ? props.imgs.map(img=>{
         return <ImageZoom key={img}
            image={{
            src: img,
            alt: 'img',
            className: 'img',
            }}
          />
        }) : <ImageZoom
        image={{
        src: 'https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640',
        alt: 'Golden Gate Bridge',
        className: 'img',
        }}
      />
      }
      
    </span>
    <span className="pwords">
      {props.link ?<a href={props.link} target="_blank"><div className="pheader">{props.title}</div></a> : <div className="pheader">{props.title}</div>}
      <div className="pinfo dev">{props.info}</div>
    </span>
    
  </div>
);

WorkItem.propTypes = {
  item: PropTypes.any
};

export default WorkItem;
