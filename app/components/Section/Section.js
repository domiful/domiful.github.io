import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import AboutItem from '../AboutItem';
import WorkItem from '../WorkItem';
import ContactItem from '../ContactItem';

const Section = (props) => (
  <div>
    <div className="section">
    <div className="title-wrapper">
      <div className="title about">{props.title}</div>
      <div className="desc about">This is a thing that will be replaced by 3 sentences or maybe a tweet max that is a short description about what this overall section is about.</div>
    </div>
    <span className="litems">
      <AboutItem title="Philosophy" info="This is where info is going fmi." section={props.section} img={""}/>
      <AboutItem title="Short Profile" info="This is where info is going fmi." section={props.section} img={""}/>
      <AboutItem title="For You" info="This is where info is going fmi." section={props.section} img={""}/>
      <AboutItem title="Resum&eacute;" info="You shouldn't leave empty handed, so here ya go!" section={props.section} img={""}/>
    </span>
  </div>
  <div className="section">
    <div className="title-wrapper">
      <div className="title dev">My Work</div>
      <div className="desc dev">This is a thing that will be replaced by 3 sentences or maybe a tweet max that is a short description about what this overall section is about.</div>
      <br />
    </div>
    <div className="minititle about">Web</div>

    <span className="litems">
      <WorkItem title="Charles &amp; Colvard" info="This is where a info is going fmi." imgs={["https://drive.google.com/uc?id=1Tz0DTOP9hy6gH3HYSVo5F2I11xmBjqj4","https://drive.google.com/uc?id=1FYR0iyHmm5u5QLUnVGbx98kk87CoI4cG"]}/>
      <WorkItem title="Cree" info="This is where a info is going fmi." imgs={["https://drive.google.com/uc?id=1YqWtYFUmpX641sJeXex6xx2032k8oarA","https://drive.google.com/uc?id=1nSnJUh_90owT3q9PWTH4F7De8oBj_pru"]}/>
      <WorkItem title="Rivers Agency" info="This is where a info is going fmi." imgs={["https://drive.google.com/uc?id=1VLHkx4uq5T7g-dYUx7367NQoH4Vus8SF","https://drive.google.com/uc?id=1h12qi7T2rsfW5Usd2zHxrU_gCAAr9KQg"]}/>
      <WorkItem title="Smarties Store" info="This is where a info is going fmi." imgs={["https://drive.google.com/uc?id=1_wiR7jrLZNMCtcdbI8FfGk_JoXbi8fZH","https://drive.google.com/uc?id=1PybQLFx8TjoHMQYInfJaQiDHwwNqr_yW"]}/>
      <WorkItem title="NAPSACC" info="This is where a info is going fmi." imgs={["https://drive.google.com/uc?id=1BZaua050PKpYu4guq4o0EB5KJeLHst6w","https://drive.google.com/uc?id=1wx8w5Zm9mwa7N0tLg0avrVWUK6zCbKKt"]}/>
      <WorkItem title="Fantastic Sams" info="This is where a info is going fmi." imgs={["https://drive.google.com/uc?id=1ZzpGQmrDr8892FWAGM0OuWLBaNEnq1cq","https://drive.google.com/uc?id=1nbjXHcPW8Tva81uCNnHD9D9AY7ejUJq1"]}/>

    </span>
    <br />
    <div className="minititle about">Apps</div>

    <span className="litems">
      <WorkItem title="Fleet Monitor" info="IOT Asset Monitoring &amp; Analytics"/>
      <WorkItem title="Prospect Finder" info="Geolocation &amp; Analytics"/>
      <WorkItem title="Chatbot HRM" info="This is where a info is going fmi."/>

    </span>
    
  </div>
  <div className="section">
    <div className="title-wrapper">
      <div className="title contact">Contact Me</div>
      <div className="desc contact">Feel free to drop me an email or connect with me on LinkedIn. I will respond as soon as possible. Oh and don't forget to take a resum&eacute;!</div>

    </div>
    <span className="litems">
      <ContactItem title="Email" info="This is where a info is going fmi."/>
      <ContactItem title="LinkedIn" info="This is where a info is going fmi."/>
    </span>
  </div>
  </div>
  
);

Section.propTypes = {
  item: PropTypes.any
};

export default Section;
