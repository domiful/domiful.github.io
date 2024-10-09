import React from "react";
import PropTypes from "prop-types";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import "./style.scss";
import AboutItem from "../AboutItem";
import WorkItem from "../WorkItem";
import ContactItem from "../ContactItem";
import phil from "../../images/about/phil.jpg";
import prof from "../../images/about/prof.png";
import res from "../../images/about/resume_snap.png";
import site from "../../images/site.gif";

import catSof from "../../images/about/cats/software_engineering.svg";
import catSol from "../../images/about/cats/solutions_engineering.svg";
import catCo from "../../images/about/cats/consulting.svg";
import catDa from "../../images/about/cats/data_analytics.svg";

//import data from '../../data.json';

const Section = (props) => (
  <div>
    <div className="section">
      <div className="title-wrapper">
        <div className="title long">What I can do for you</div>
      </div>
      <Element name="guide" className="catArea">
        <AboutItem
          title=""
          wide={true}
          imgs={[catSof, catSol, catDa, catCo]}
          info="As a results-driven consultant and engineer, I offer a unique combination of technical expertise and strategic thinking. With a proven track record in:
<ul>
<li>Delivering innovative solutions that drive growth, improve efficiency, and enhance customer experiences.</li><li>
Leveraging emerging technologies to create cutting-edge solutions that meet the evolving needs of businesses.</li><li>
Building strong relationships with stakeholders at all levels, fostering collaboration and trust.</li><li>
Bridging the gap between technology and business strategy to ensure that technical solutions align with organizational goals.</li><li>
My ability to combine technical proficiency with strategic thinking enables me to provide valuable insights and guidance to clients across various industries.
</li>
</ul>
You will find below examples of my work broken into the following categories:"
          section={props.section}
        />
      </Element>
    </div>
    <div className="section">
      <Element name="work">
        <div className="title-wrapper">
          <div className="title dev">My Work</div>
          <div className="desc dev">
            These are some projects that I have worked on, but they are not all
            of them! I am working on bringing more to this site both in the
            terms of content and design. Check them out and if they are linked,
            go check out the live site.
          </div>
          <br />
        </div>
        <div className="content work">
          <div className="catLabel">Software Engineering</div>
          <div className="minititle about" name="apps">
            Mobile Apps
          </div>

          <span className="litems">
            <WorkItem
              title="Blender Monitor"
              info="A large blender company wanted a way to expand their existing capabilities for corporate customers by integrating the Cloud into their blenders. By connecting the blenders to the cloud they can track a number of metrics and provide predictive analysis for maintenance and other interests."
              imgs={[
                "https://drive.google.com/thumbnail?id=1KpdhEDU4iPpokMzPklvYlX_ikIphZPvY",
                "https://drive.google.com/thumbnail?id=1AlUcEc_7lmSvaA6qCIiP0ARtpNvl3fC1",
                "https://drive.google.com/thumbnail?id=1HZk6PIHAUtpIoP6d0-_4qQs63c8MI0J6",
                "https://drive.google.com/thumbnail?id=1FGhaUwx4uWkmD-M8NgYDtYYUJYhYi6bd",
              ]}
            />
            <WorkItem
              title="Prospect Finder"
              info="An insurance provider wanted a way for an agent to see all potential clients in a certain area, and see at a glance their potential for buying certain products. The potential was based on analytics from their existing client profiles."
              imgs={[
                "https://drive.google.com/thumbnail?id=13758RFb8YpbTvBMbWhrR2TNL31Dfyr0W",
                "https://drive.google.com/thumbnail?id=1uttGpED9bjm5THQ_7Uz60Ix0XXQiy3RZ",
              ]}
            />
            <WorkItem
              title="Chatbot HRM"
              info="A client wanted an app they could give to managers so the could easily track payments and access human resource management functions. All functionality was initiated through the bot and all transactions were available either through the app or through existing channels."
              imgs={[
                "https://drive.google.com/thumbnail?id=1Qrq5NqccBcqiBtI8lLsEQNN4W2mUUT7K",
                "https://drive.google.com/thumbnail?id=1wxhlZqW_8UmfiE2F2CgiKto6g9NWD_Qj",
                "https://drive.google.com/thumbnail?id=1u7uQVDiC_9lL4PTiKdWYlx8SbmUSgkiq",
              ]}
            />
          </span>
          <div className="topLink">
            <Link
              activeClass="selected"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-200}
              duration={500}
              //className="router-link dev"
              to="catArea"
            >
              To Top &uarr;
            </Link>
          </div>

          <div className="minititle about">Responsive Web</div>

          <span className="litems">
            <WorkItem
              title="Charles &amp; Colvard"
              link="https://www.charlesandcolvard.com/"
              info="One of the more complex sites I have worked on. Not because it is a Magento 2 site (that is an inside joke about Magento 2), but because of it’s many pages and products. They are an innovative company selling moissanite and it was a pleasure staring at their jewelry while I coded the front end."
              imgs={[
                "https://drive.google.com/thumbnail?id=1Tz0DTOP9hy6gH3HYSVo5F2I11xmBjqj4&sz=w1000",
                "https://drive.google.com/thumbnail?id=1FYR0iyHmm5u5QLUnVGbx98kk87CoI4cG&sz=w1000",
              ]}
            />
            <WorkItem
              title="Cree"
              link="https://www.cree.com/"
              info="One of the first large enterprise websites I worked on. Many developers and designers spent many hours creating this and their regional and division sites. Custom Frontend on a Mangento 1 backend. "
              imgs={[
                "https://drive.google.com/thumbnail?id=1YqWtYFUmpX641sJeXex6xx2032k8oarA&sz=w1000",
                "https://drive.google.com/thumbnail?id=1nSnJUh_90owT3q9PWTH4F7De8oBj_pru&sz=w1000",
              ]}
            />
            <WorkItem
              title="Rivers Agency"
              link="https://riversagency.com/"
              info="This was my employer before Oracle. Many of the sites you see on this site were created there. One of the last projects I worked on while I was there was coding the revamp of the site. Custom frontend on top of a Wordpress backend."
              imgs={[
                "https://drive.google.com/thumbnail?id=1VLHkx4uq5T7g-dYUx7367NQoH4Vus8SF&sz=w1000",
                "https://drive.google.com/thumbnail?id=1h12qi7T2rsfW5Usd2zHxrU_gCAAr9KQg&sz=w1000",
              ]}
            />
            <WorkItem
              title="Smarties Store"
              link="https://smartiesstore.com/"
              info="I love this candy, so I was very excited when I got to work on it. The ladies at smarties needed a new simpler site to sell their wares. It has a Shopify backend and I created the category and product pages as well as many other random ones."
              imgs={[
                "https://drive.google.com/thumbnail?id=1_wiR7jrLZNMCtcdbI8FfGk_JoXbi8fZH&sz=w1000",
                "https://drive.google.com/thumbnail?id=1PybQLFx8TjoHMQYInfJaQiDHwwNqr_yW&sz=w1000",
              ]}
            />
            <WorkItem
              title="NAPSACC"
              link="https://gonapsacc.org/"
              info="This site has a backend that I cannot recall, but I do know that it was old. With a nonprofit sized budget we revamped the site and made it more responsive on mobile."
              imgs={[
                "https://drive.google.com/thumbnail?id=1BZaua050PKpYu4guq4o0EB5KJeLHst6w&sz=w1000",
                "https://drive.google.com/thumbnail?id=1wx8w5Zm9mwa7N0tLg0avrVWUK6zCbKKt&sz=w1000",
              ]}
            />
            <WorkItem
              title="Fantastic Sams"
              link="https://www.fantasticsams.com/"
              info="A site on top of Drupal that needed a little of TLC. I worked mainly on UI tweaks and bug fixes to make the site more functional and responsive. "
              imgs={[
                "https://drive.google.com/thumbnail?id=1ZzpGQmrDr8892FWAGM0OuWLBaNEnq1cq&sz=w1000",
                "https://drive.google.com/thumbnail?id=1nbjXHcPW8Tva81uCNnHD9D9AY7ejUJq1",
              ]}
            />
            <WorkItem
              title="This site"
              info="I designed and coded this site myself. With the exception for the websites that goes for the content too. The websites were designed by graphic designers at Rivers Agency, but I had to turn their vision into reality by coding them. I will continue to update the site. I already have a pipeline of content!"
              imgs={[site]}
            />
          </span>
          <div className="topLink">
            <Link
              activeClass="selected"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-200}
              duration={500}
              //className="router-link dev"
              to="catArea"
            >
              To Top &uarr;
            </Link>
          </div>
          <div className="minititle about" name="solutions">
            Development Platform
          </div>
          <span className="litems">
            <WorkItem
              title="IBM Mobile First"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
          </span>
          <div className="catLabel">Solutions Engineering</div>

          <div className="minititle about" name="solutions">
            Cloud Platforms
          </div>
          <span className="litems">
            <WorkItem
              title="Oracle Cloud Infrastructure"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
            <WorkItem
              title="Kinvey"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
            <WorkItem
              title="Sitefinity"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
            <WorkItem
              title="Cloud Agnostic"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
          </span>
          <div className="topLink">
            <Link
              activeClass="selected"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-200}
              duration={500}
              //className="router-link dev"
              to="catArea"
            >
              To Top &uarr;
            </Link>
          </div>
          <div className="minititle about">Developer Advocacy</div>
          <span className="litems">
            <WorkItem
              title="My Article"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
            <WorkItem
              title="Cross Platform Integrations"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
            <WorkItem
              title="Technical Evangelism"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
          </span>
          <div className="topLink">
            <Link
              activeClass="selected"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-200}
              duration={500}
              //className="router-link dev"
              to="catArea"
            >
              To Top &uarr;
            </Link>
          </div>
          <div className="catLabel">Data Analysis</div>

          <div className="minititle about" name="analytics">
            Data Analytics
          </div>
          <span className="litems">
            <WorkItem
              title="Snowflake"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
            <WorkItem
              title="Looker"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
          </span>
          <div className="topLink">
            <Link
              activeClass="selected"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-200}
              duration={500}
              //className="router-link dev"
              to="catArea"
            >
              To Top &uarr;
            </Link>
          </div>
          <div className="catLabel">Consulting</div>
          <div className="minititle about" name="consulting">
            Consulting
          </div>
          <span className="litems">
            <WorkItem
              title="Snowflake"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
            <WorkItem
              title="Looker"
              info="My first job out of college, I worked on the development team for IBM mobile application building platform. MobileFirst provided a framework that enabled the development, optimization, integration, and management of secure mobile apps. It allowed for experiences on   iOS, Android, Windows, and the Web using capabilities such as development, testing, back-end connections, push notifications, offline mode, update, security, analytics, monitoring, and application publishing."
              imgs={[
                "https://adtmag.com/articles/2016/06/23/~/media/ECG/adtmag/Images/2016/06/mobilefirst_experience.png",
              ]}
            />
          </span>
          <div className="topLink">
            <Link
              activeClass="selected"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-200}
              duration={500}
              //className="router-link dev"
              to="catArea"
            >
              To Top &uarr;
            </Link>
          </div>
        </div>
      </Element>
    </div>
    <div className="section">
      <Element name="about" className="aboutSection">
        <div className="title-wrapper">
          <div className="title about">{props.title}</div>
          <div className="desc about">
            “I have no special talent. I am only passionately curious.” - Albert
            Einstein
          </div>
        </div>
        <div className="content about">
          <span className="litems">
            <AboutItem
              title="Bio"
              info="As a seasoned consultant with a proven track record in data-driven innovation and digital transformation, I've dedicated my career to bridging the gap between technology and business strategy. My MBA focused on  Innovation and Marketing along with my technical background provide me with a unique blend of technical expertise and strategic thinking.
<br />
<br />
Throughout my career at industry-leading companies like IBM and Block, I've successfully led projects in areas such as data analytics, marketing technology, and software development. I've consistently delivered innovative solutions that drive growth, improve efficiency, and deliver measurable results.
<br />
<br />
I'm passionate about staying at the forefront of emerging technologies and industry trends. My expertise in areas such as data visualization, cloud computing, and machine learning allows me to leverage the latest advancements to create cutting-edge solutions for my clients.
<br />
<br />
Beyond my technical skills, I'm a strong communicator and collaborator. I've built successful relationships with stakeholders at all levels, from C-suite executives to developers. These interpersonal skills, combined with my technical expertise, make me a valuable asset to any team.
<br />
<br />
If you're seeking a digital consultant who can help you drive innovation, optimize your operations, and achieve your business goals, I'm the right choice."
              section={props.section}
              imgs={[prof]}
            />
            <AboutItem
              title="Education"
              info="<br />
                    <br /><b>Rochester Institute of Technology</b>
                    <br />
                    <br />
                    I got my Bachelors in Information Technology from the Rochester Institute of Technology almost 10 years ago in 2015. I had already began to learn coding in high school but RIT is where I really learned the fundamentals of software development, UI/UX design, marketing fundamentals and so much more. I also minored in Political Science. By combining a diverse range of specializations, hands-on learning opportunities, industry partnerships, state-of-the-art facilities, experienced faculty, and a strong alumni network, RIT provided me with the tools and resources I needed to excel in the dynamic tech industry.<br />
                    <br />
                    RIT's partnerships with leading technology companies provide students with access to internships and industry experts. I had 2 Project Management internships while attending RIT. The first was at Excellus BCBS managing the creation of an RFP for an Enterprise Modeling Tool and the second was at AEG managing an on-prem to cloud migration for a Fortune 500 company.<br />
                    <br />
                    Overall, RIT's information technology program offers a well-rounded education that prepared me for a successful and rewarding career.<br />
                    <br />
                    <br />
                    <b>Columbia University</b>
                    <br />
                    <br />
                    I graduated in May 2023 with an MBA from Columbia Business School. Before grad school my entire career had been focused on engineering roles. Each role however gained  more client facing elements and I found myself more interested in learning how I can provide greater impact and customer service for my clients. I also gained greater critical thinking, leadership and strategic thinking skills all while building a network of the most amazing new friends.<br />
                    <br />
                    I interned at Block as a Retail Marketing Analyst. My main focus was analyzing new customer data for trends and migrating internal sheets to automated Looker Dashboards.
                    Columbia Business School's academic offerings, particularly in the areas of innovation and marketing, are truly exceptional. The school's curriculum is designed to equip students with the tools and knowledge necessary to succeed in today's rapidly evolving business landscape.<br />
                    <br />
                    In the realm of innovation, Columbia offers a wide range of courses that delve into topics such as design thinking, disruptive technologies, and entrepreneurial leadership. I had the opportunity to work on real-world projects, collaborating with startups and established companies to develop innovative solutions. Additionally, the school's strong connections to the venture capital community provided invaluable networking opportunities.<br />
                    <br />
                    The marketing curriculum at Columbia is equally impressive, focusing on both traditional and digital marketing strategies. I gained expertise in areas such as brand management, consumer behavior, and data analytics."
              section={props.section}
              imgs={[
                "https://www.rit.edu/brandportal/sites/rit.edu.brandportal/files/inline-images/new_RIT_logo1_RGB_0.png",
                "https://mlt.org/wp-content/uploads/2015/12/Columbia-Business-School-Logo-FC-2.png",
              ]}
            />
          </span>
        </div>
      </Element>
    </div>
    <div className="section">
      <Element name="contact" className="contactSection">
        <div className="title-wrapper">
          <div className="title contact">Contact Me</div>
          <div className="desc contact">
            Feel free to drop me an email (even just to tell me about a bug) or
            connect with me on LinkedIn. I will respond as soon as possible. Oh
            and don't forget to take a resum&eacute;!
          </div>
        </div>
        <div className="content contact">
          <span className="litems">
            <ContactItem title="Contact" info="This is where info is going." />
          </span>
        </div>
      </Element>
    </div>
  </div>
);

Section.propTypes = {
  item: PropTypes.any,
};

export default Section;
