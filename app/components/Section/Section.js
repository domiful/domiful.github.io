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
        <AboutItem title="Philosophy" info="I actually don’t really believe in having a philosophy. It constrains your thinking and can be detrimental to any process. Everything cannot be minimal, but everything should be understandable. <br /><br />I guess that might be a philosophy." section={props.section} imgs={[phil]}/>
        <AboutItem title="Bio" info="I currently live in New York City. <br /><br />Columbia Business School MBA and experienced software engineer passionate about new technologies, user experience design and implementation, and cloud solutions. Skilled in native and web digital experience creation, cloud transformation, and technical marketing." section={props.section} imgs={[prof]}/>
        <Element name="resume">
          <AboutItem title="Resum&eacute;" info="You shouldn't leave empty handed, please take a copy of my resume. <br /><br />Also feel free to drop me an email or DM on LinkedIn!" section={props.section} imgs={[res]} link="https://drive.google.com/file/d/1AxtisSbKPF0pSYjFWTf3UFumsy4ucVxa/view?usp=sharing"/>
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
      <WorkItem title="This site: Updating to 2.0!" info="I am in the process of updating the styling, adding way more content, and fixing some bugs. <br /><br /><b>Update 1:</b> Nearly final version of the new theme.<br /><br /><b>Update 2:</b> New image hosting provider. Stay tuned for more content soon!<br /><br />I designed and coded this site myself. With the exception for the websites that goes for the content too. The websites were designed by graphic designers at Rivers Agency, but I had to turn their vision into reality by coding them. I will continue to update the site. I already have a pipeline of content!" imgs={[site]}/>
        <WorkItem title="Charles &amp; Colvard" link="https://www.charlesandcolvard.com/" info="One of the more complex sites I have worked on. Not because it is a Magento 2 site (that is an inside joke about Magento 2), but because of it’s many pages and products. They are an innovative company selling moissanite and it was a pleasure staring at their jewelry while I coded the front end." imgs={["https://www.dropbox.com/scl/fi/sxnrvnfk7x7vyljvo1txp/candc.png?rlkey=kyv4hlg36ysfmyxoyvfllio3r&raw=1","https://www.dropbox.com/scl/fi/n96e1av1czor9i4xdn4tw/candcm.png?rlkey=qqxvj9vkl2ahhr6dsynoctrut&raw=1"]}/>
        <WorkItem title="Cree" link="https://www.cree.com/" info="One of the first large enterprise websites I worked on. Many developers and designers spent many hours creating this and their regional and division sites. Custom Frontend on a Mangento 1 backend. " imgs={["https://www.dropbox.com/scl/fi/aj43ri6ofhv6g2h7stlkm/cree.png?rlkey=bpkrb0sbxbphgww33gyks5mj5&raw=1","https://www.dropbox.com/scl/fi/oq5lo9nf5twcpu341w5pq/creem.png?rlkey=0yb4n5ltcaegy3f6et7v7rtul&raw=1"]}/>
        <WorkItem title="Rivers Agency" link="https://riversagency.com/" info="This was my employer before Oracle. Many of the sites you see on this site were created there. One of the last projects I worked on while I was there was coding the revamp of the site. Custom frontend on top of a Wordpress backend." imgs={["https://www.dropbox.com/scl/fi/o8srsb4zskyedym6gs6ge/rivers.png?rlkey=orhzzegui5wfb2mm7fx2pre7p&raw=1","https://www.dropbox.com/scl/fi/7nbhu2qplm91gtrqazt0o/riversm.png?rlkey=w0v7ktrcmladrcb92eip2g15y&raw=1"]}/>
        <WorkItem title="Smarties Store" link="https://smartiesstore.com/" info="I love this candy, so I was very excited when I got to work on it. The ladies at smarties needed a new simpler site to sell their wares. It has a Shopify backend and I created the category and product pages as well as many other random ones." imgs={["https://www.dropbox.com/scl/fi/mq8unoq579191imum18e0/smarties.png?rlkey=qgpekegaynund7gyle8iyaqf7&raw=1","https://www.dropbox.com/scl/fi/wkv6peyu81qfxn1q00n0e/smartiesm.png?rlkey=nynkxncjqr7ye9w3bdizr68lp&raw=1"]}/>
        <WorkItem title="NAPSACC" link="https://gonapsacc.org/" info="This site has a backend that I cannot recall, but I do know that it was old. With a nonprofit sized budget we revamped the site and made it more responsive on mobile." imgs={["https://www.dropbox.com/scl/fi/pklhe1mz9lq1lxzhc33en/napsacc.png?rlkey=gkcupyjby9q8pije7qpuv38fm&raw=1","https://www.dropbox.com/scl/fi/x0fck11tnixtgns5xlbpz/napsaccm.png?rlkey=8molpjl0jxeycpbhtn54s60ny&raw=1"]}/>
        <WorkItem title="Fantastic Sams" link="https://www.fantasticsams.com/" info="A site on top of Drupal that needed a little of TLC. I worked mainly on UI tweaks and bug fixes to make the site more functional and responsive. " imgs={["https://www.dropbox.com/scl/fi/sr9gwt895ggtjrcg88z2b/fsams.png?rlkey=blgqhldjq5qhr7imslrye030x&raw=1","https://www.dropbox.com/scl/fi/2m7tc4i5jh267rg64yzf1/fsamsm.png?rlkey=aprnpt1uxo2dwac4yjo8f8d7w&raw=1"]}/>

      </span>
      <br />
      <div className="minititle about">Apps</div>

      <span className="litems">
        <WorkItem title="Blender Monitor" info="A large blender company wanted a way to expand their existing capabilities for corporate customers by integrating the Cloud into their blenders. By connecting the blenders to the cloud they can track a number of metrics and provide predictive analysis for maintenance and other interests." imgs={["https://www.dropbox.com/scl/fi/a5hngb40sped4a3dcn1y5/v1.png?rlkey=b2bck8zq31zl1zmqavxf2fa10&raw=1","https://www.dropbox.com/scl/fi/18v0gynxfr2v8midz7bmq/v2.png?rlkey=bp7lwxne3ivaqa9fcnixixb7i&raw=1","https://www.dropbox.com/scl/fi/c83rso3smdoguw2niytzi/v3.png?rlkey=bi94092t8a64dyo5fu6oqtche&raw=1","https://www.dropbox.com/scl/fi/yzzhm4zjk6k2b0h23xbmb/v4.png?rlkey=08evkzhukziogybgb8fy256p2&raw=1"]}/>
        <WorkItem title="Prospect Finder" info="An insurance provider wanted a way for an agent to see all potential clients in a certain area, and see at a glance their potential for buying certain products. The potential was based on analytics from their existing client profiles." imgs={["https://www.dropbox.com/scl/fi/kf9i9spmwkcgxvoj7i1df/pf1.png?rlkey=seo7hzfvxyihfqov64zsh2xdy&raw=1","https://www.dropbox.com/scl/fi/stgxkwuppv1tz1u04jzu7/pf2.png?rlkey=wofwyom6fuo7x1kic1aflgfvp&raw=1"]}/>
        <WorkItem title="Chatbot HRM" info="A client wanted an app they could give to managers so the could easily track payments and access human resource management functions. All functionality was initiated through the bot and all transactions were available either through the app or through existing channels." imgs={["https://www.dropbox.com/scl/fi/psgxbu6xwi1rgp23k4zhh/aa1.png?rlkey=1z9svsufl0ykjpl8h0snu7qhk&raw=1","https://www.dropbox.com/scl/fi/4cdpks7ksbid7o0d8b4py/aa2.png?rlkey=nc3vuxkjqyc5iy3ezh5z7939h&raw=1","https://www.dropbox.com/scl/fi/6a7t2502883igusol3qio/aa3.png?rlkey=f3m1g5mdwoeiugj6co7qyqpe2&raw=1"]}/>

      </span>
      <br />
      <div className="minititle about">Other</div>

      <span className="litems">
        <WorkItem title="IBM Mobile First" info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing." imgs={["https://www.ibm.com/developerworks/community/blogs/5fdcd114-179e-4a1f-be70-3dbcc261a4da/resource/BLOGS_UPLOADED_IMAGES/IBMMobileFirst.png"]}/>
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
