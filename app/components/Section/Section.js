import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import AboutItem from '../AboutItem';
import WorkItem from '../WorkItem';
import ContactItem from '../ContactItem';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import phil from "../../images/about/phil.jpg";
import prof from "../../images/about/prof.png";
import res from "../../images/about/resume_snap.png";
import site from "../../images/site.gif";

const Section = (props) => (
  
  <div>
    <div className="section">
    <Element name="about">
    <div className="title-wrapper">
        <div className="title about">{props.title}</div>
        <div className="desc about">“I have no special talent. I am only passionately curious.” - Albert Einstein</div>
      </div>
      <span className="litems">
        <AboutItem title="Philosophy" info="I actually don’t really believe in having a philosophy. It constrains your thinking and can be detrimental to any process. Everything cannot be minimal, but everything should be understandable." section={props.section} imgs={[phil]}/>
        <AboutItem title="Bio" info="I currently live in the heart of Texas, Austin. I love working with technology because it allows me to not be stuck in any one role or industry. I have dabbled in a lot, but I am best known for my mobile, web, UI / UX development skills." section={props.section} imgs={[prof]}/>
        <Element name="resume">
          <AboutItem title="Resum&eacute;" info="You shouldn't leave empty handed, so here ya go!" section={props.section} imgs={[res]} link="https://drive.google.com/file/d/1AxtisSbKPF0pSYjFWTf3UFumsy4ucVxa/view?usp=sharing"/>
        </Element>
      </span>
    </Element>
      
    </div>
    <div className="section">
    <Element name="work">

      <div className="title-wrapper">
        <div className="title dev">My Work</div>
        <div className="desc dev">These are some projects that I have worked on, but they are not all of them! I am working on bringing more to this site both in the terms of content and design. Check them out and if they are linked, go check out the live site.</div>
        <br />
      </div>
      <div className="minititle about">Web</div>

      <span className="litems">
        <WorkItem title="Charles &amp; Colvard" info="One of the more complex sites I have worked on. Not because it is a Magento 2 site (that is an inside joke about Magento 2), but because of it’s many pages and products. They are an innovative company selling moissanite and it was a pleasure staring at their jewelry while I coded the front end." imgs={["https://drive.google.com/uc?id=1Tz0DTOP9hy6gH3HYSVo5F2I11xmBjqj4","https://drive.google.com/uc?id=1FYR0iyHmm5u5QLUnVGbx98kk87CoI4cG"]}/>
        <WorkItem title="Cree" info="One of the first large enterprise websites I worked on. Many developers and designers spent many hours creating this and their regional and division sites. Custom Frontend on a Mangento 1 backend. " imgs={["https://drive.google.com/uc?id=1YqWtYFUmpX641sJeXex6xx2032k8oarA","https://drive.google.com/uc?id=1nSnJUh_90owT3q9PWTH4F7De8oBj_pru"]}/>
        <WorkItem title="Rivers Agency" info="This was my employer before Oracle. Many of the sites you see on this site were created there. One of the last projects I worked on while I was there was coding the revamp of the site. Custom frontend on top of a Wordpress backend." imgs={["https://drive.google.com/uc?id=1VLHkx4uq5T7g-dYUx7367NQoH4Vus8SF","https://drive.google.com/uc?id=1h12qi7T2rsfW5Usd2zHxrU_gCAAr9KQg"]}/>
        <WorkItem title="Smarties Store" info="I love this candy, so I was very excited when I got to work on it. The ladies at smarties needed a new simpler site to sell their wares. It has a Shopify backend and I created the category and product pages as well as many other random ones." imgs={["https://drive.google.com/uc?id=1_wiR7jrLZNMCtcdbI8FfGk_JoXbi8fZH","https://drive.google.com/uc?id=1PybQLFx8TjoHMQYInfJaQiDHwwNqr_yW"]}/>
        <WorkItem title="NAPSACC" info="This site has a backend that I cannot recall, but I do know that it was old. With a nonprofit sized budget we revamped the site and made it more responsive on mobile." imgs={["https://drive.google.com/uc?id=1BZaua050PKpYu4guq4o0EB5KJeLHst6w","https://drive.google.com/uc?id=1wx8w5Zm9mwa7N0tLg0avrVWUK6zCbKKt"]}/>
        <WorkItem title="Fantastic Sams" info="A site on top of Drupal that needed a little of TLC. I worked mainly on UI tweaks and bug fixes to make the site more functional and responsive. " imgs={["https://drive.google.com/uc?id=1ZzpGQmrDr8892FWAGM0OuWLBaNEnq1cq","https://drive.google.com/uc?id=1nbjXHcPW8Tva81uCNnHD9D9AY7ejUJq1"]}/>

      </span>
      <br />
      <div className="minititle about">Apps</div>

      <span className="litems">
        <WorkItem title="Blender Monitor" info="A large blender company wanted a way to expand their existing capabilities for corporate customers by integrating the Cloud into their blenders. By connecting the blenders to the cloud they can track a number of metrics and provide predictive analysis for maintenance and other interests." imgs={["https://drive.google.com/uc?id=1KpdhEDU4iPpokMzPklvYlX_ikIphZPvY","https://drive.google.com/uc?id=1AlUcEc_7lmSvaA6qCIiP0ARtpNvl3fC1","https://drive.google.com/uc?id=1HZk6PIHAUtpIoP6d0-_4qQs63c8MI0J6","https://drive.google.com/uc?id=1FGhaUwx4uWkmD-M8NgYDtYYUJYhYi6bd"]}/>
        <WorkItem title="Prospect Finder" info="An insurance provider wanted a way for an agent to see all potential clients in a certain area, and see at a glance their potential for buying certain products. The potential was based on analytics from their existing client profiles." imgs={["https://drive.google.com/uc?id=13758RFb8YpbTvBMbWhrR2TNL31Dfyr0W","https://drive.google.com/uc?id=1uttGpED9bjm5THQ_7Uz60Ix0XXQiy3RZ"]}/>
        <WorkItem title="Chatbot HRM" info="A client wanted an app they could give to managers so the could easily track payments and access human resource management functions. All functionality was initiated through the bot and all transactions were available either through the app or through existing channels." imgs={["https://drive.google.com/uc?id=1Qrq5NqccBcqiBtI8lLsEQNN4W2mUUT7K","https://drive.google.com/uc?id=1wxhlZqW_8UmfiE2F2CgiKto6g9NWD_Qj","https://drive.google.com/uc?id=1u7uQVDiC_9lL4PTiKdWYlx8SbmUSgkiq"]}/>

      </span>
      <br />
      <div className="minititle about">Other</div>

      <span className="litems">
        <WorkItem title="IBM Mobile First" info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing." imgs={["https://www.ibm.com/developerworks/community/blogs/5fdcd114-179e-4a1f-be70-3dbcc261a4da/resource/BLOGS_UPLOADED_IMAGES/IBMMobileFirst.png"]}/>
        <WorkItem title="This site" info="I designed and coded this site myself. With the exception for the websites that goes for the content too. The websites were designed by graphic designers at Rivers Agency, but I had to turn their vision into reality by coding them. I will continue to update the site. I already have a pipeline of content!" imgs={[site]}/>
      </span>
      </Element>

    </div>
    <div className="section">
    <Element name="contact">

      <div className="title-wrapper">
        <div className="title contact">Contact Me</div>
        <div className="desc contact">Feel free to drop me an email (even just to tell me about a bug) or connect with me on LinkedIn. I will respond as soon as possible. Oh and don't forget to take a&nbsp;
        <Link   style={{textDecoration: 'underline', cursor: 'pointer'}}
                smooth={true}
                offset={-150}
                duration={500}
                to="resume">
                resum&eacute;
              </Link>
        !</div>

      </div>
      <span className="litems">
        <ContactItem title="Contact" info="This is where a info is going fmi."/>
      </span>
      </Element>

    </div>
  </div>
  
);

Section.propTypes = {
  item: PropTypes.any
};

export default Section;
