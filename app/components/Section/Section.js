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
                "https://www.dropbox.com/scl/fi/a5hngb40sped4a3dcn1y5/v1.png?rlkey=b2bck8zq31zl1zmqavxf2fa10&raw=1",
                "https://www.dropbox.com/scl/fi/18v0gynxfr2v8midz7bmq/v2.png?rlkey=bp7lwxne3ivaqa9fcnixixb7i&raw=1",
                "https://www.dropbox.com/scl/fi/c83rso3smdoguw2niytzi/v3.png?rlkey=bi94092t8a64dyo5fu6oqtche&raw=1",
                "https://www.dropbox.com/scl/fi/yzzhm4zjk6k2b0h23xbmb/v4.png?rlkey=08evkzhukziogybgb8fy256p2&raw=1",
              ]}
            />
            <WorkItem
              title="Prospect Finder"
              info="An insurance provider wanted a way for an agent to see all potential clients in a certain area, and see at a glance their potential for buying certain products. The potential was based on analytics from their existing client profiles."
              imgs={[
                "https://www.dropbox.com/scl/fi/kf9i9spmwkcgxvoj7i1df/pf1.png?rlkey=seo7hzfvxyihfqov64zsh2xdy&raw=1",
                "https://www.dropbox.com/scl/fi/stgxkwuppv1tz1u04jzu7/pf2.png?rlkey=wofwyom6fuo7x1kic1aflgfvp&raw=1",
              ]}
            />
            <WorkItem
              title="Chatbot HRM"
              info="A client wanted an app they could give to managers so the could easily track payments and access human resource management functions. All functionality was initiated through the bot and all transactions were available either through the app or through existing channels."
              imgs={[
                "https://www.dropbox.com/scl/fi/psgxbu6xwi1rgp23k4zhh/aa1.png?rlkey=1z9svsufl0ykjpl8h0snu7qhk&raw=1",
                "https://www.dropbox.com/scl/fi/4cdpks7ksbid7o0d8b4py/aa2.png?rlkey=nc3vuxkjqyc5iy3ezh5z7939h&raw=1",
                "https://www.dropbox.com/scl/fi/6a7t2502883igusol3qio/aa3.png?rlkey=f3m1g5mdwoeiugj6co7qyqpe2&raw=1",
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
                "https://www.dropbox.com/scl/fi/sxnrvnfk7x7vyljvo1txp/candc.png?rlkey=kyv4hlg36ysfmyxoyvfllio3r&raw=1",
                "https://www.dropbox.com/scl/fi/n96e1av1czor9i4xdn4tw/candcm.png?rlkey=qqxvj9vkl2ahhr6dsynoctrut&raw=1",
              ]}
            />
            <WorkItem
              title="Cree"
              link="https://www.cree.com/"
              info="One of the first large enterprise websites I worked on. Many developers and designers spent many hours creating this and their regional and division sites. Custom Frontend on a Mangento 1 backend. "
              imgs={[
                "https://www.dropbox.com/scl/fi/aj43ri6ofhv6g2h7stlkm/cree.png?rlkey=bpkrb0sbxbphgww33gyks5mj5&raw=1",
                "https://www.dropbox.com/scl/fi/oq5lo9nf5twcpu341w5pq/creem.png?rlkey=0yb4n5ltcaegy3f6et7v7rtul&raw=1",
              ]}
            />
            <WorkItem
              title="Rivers Agency"
              link="https://riversagency.com/"
              info="This was my employer before Oracle. Many of the sites you see on this site were created there. One of the last projects I worked on while I was there was coding the revamp of the site. Custom frontend on top of a Wordpress backend."
              imgs={[
                "https://www.dropbox.com/scl/fi/o8srsb4zskyedym6gs6ge/rivers.png?rlkey=orhzzegui5wfb2mm7fx2pre7p&raw=1",
                "https://www.dropbox.com/scl/fi/7nbhu2qplm91gtrqazt0o/riversm.png?rlkey=w0v7ktrcmladrcb92eip2g15y&raw=1",
              ]}
            />
            <WorkItem
              title="Smarties Store"
              link="https://smartiesstore.com/"
              info="I love this candy, so I was very excited when I got to work on it. The ladies at smarties needed a new simpler site to sell their wares. It has a Shopify backend and I created the category and product pages as well as many other random ones."
              imgs={[
                "https://www.dropbox.com/scl/fi/mq8unoq579191imum18e0/smarties.png?rlkey=qgpekegaynund7gyle8iyaqf7&raw=1",
                "https://www.dropbox.com/scl/fi/wkv6peyu81qfxn1q00n0e/smartiesm.png?rlkey=nynkxncjqr7ye9w3bdizr68lp&raw=1",
              ]}
            />
            <WorkItem
              title="NAPSACC"
              link="https://gonapsacc.org/"
              info="This site has a backend that I cannot recall, but I do know that it was old. With a nonprofit sized budget we revamped the site and made it more responsive on mobile."
              imgs={[
                "https://www.dropbox.com/scl/fi/pklhe1mz9lq1lxzhc33en/napsacc.png?rlkey=gkcupyjby9q8pije7qpuv38fm&raw=1",
                "https://www.dropbox.com/scl/fi/x0fck11tnixtgns5xlbpz/napsaccm.png?rlkey=8molpjl0jxeycpbhtn54s60ny&raw=1",
              ]}
            />
            <WorkItem
              title="Fantastic Sams"
              link="https://www.fantasticsams.com/"
              info="A site on top of Drupal that needed a little of TLC. I worked mainly on UI tweaks and bug fixes to make the site more functional and responsive. "
              imgs={[
                "https://www.dropbox.com/scl/fi/sr9gwt895ggtjrcg88z2b/fsams.png?rlkey=blgqhldjq5qhr7imslrye030x&raw=1",
                "https://www.dropbox.com/scl/fi/2m7tc4i5jh267rg64yzf1/fsamsm.png?rlkey=aprnpt1uxo2dwac4yjo8f8d7w&raw=1",
              ]}
            />
            <WorkItem
              title="This site: Updating to 2.0!"
              info="I am in the process of updating the styling, adding way more content, and fixing some bugs. <br /><br /><b>Update 1:</b> Nearly final version of the new theme.<br /><br /><b>Update 2:</b> New image hosting provider. Stay tuned for more content soon!<br /><br />I designed and coded this site myself. With the exception for the websites that goes for the content too. The websites were designed by graphic designers at Rivers Agency, but I had to turn their vision into reality by coding them. I will continue to update the site. I already have a pipeline of content!"
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
              info="<b>Iaas</b>
                    <br />
                    <br />
                    As a solutions engineer, I leveraged Oracle Cloud Infrastructure to create powerful proof-of-concepts and demos. OCI's comprehensive suite of IaaS solutions allowed me to build and deploy applications and data in the cloud.
                    <br />
                    I utilized compute resources like virtual machines, bare metal instances, and GPUs to meet various performance and scalability requirements. For storage, I used object storage, block storage, and file storage to accommodate different data types and access needs.
                    <br />
                    I also implemented Database services like Oracle Autonomous Database and Oracle Database Cloud to provide reliable and scalable data storage and management.
                    <br />
                    <br />
                    <b>App Dev</b>
                    <br />
                    <br />
                    As a solutions engineer, I integrated mobile and AI technologies into OCI-based enterprise solutions to deliver exceptional front-end experiences.
                    For instance, in the e-commerce platform, I developed native mobile apps for iOS and Android to provide a seamless shopping experience. These apps implemented real-time chatbots powered by natural language processing (NLP) to provide instant customer support.
                    <br />
                    In the ERP modernization project, I integrated mobile apps for field workers to access critical business data and perform tasks on the go. These apps utilized AI-powered image recognition to automate processes like inventory management and asset tracking. Additionally, I implemented AI-driven predictive analytics within the ERP system to forecast demand and optimize supply chain operations.
                    <br />
                    For the healthcare organization's EHR system, I developed a mobile app for patients to access their medical records, schedule appointments, and communicate with healthcare providers. The app incorporated AI-powered virtual assistants to answer common health questions and provide personalized health recommendations.
                    <br />
                    By integrating mobile and AI technologies, I was able to create more user-friendly, efficient, and intelligent enterprise solutions. These solutions not only improved user experiences but also drove business value by automating tasks, enhancing decision-making, and fostering stronger customer relationships.
                    "
              imgs={[
                "https://www.dropbox.com/scl/fi/6yb8yy0wbvhqegqzhlaue/oci2.jpg?rlkey=lfq1edh5yav1og5iqmw0htkmv&st=w7osfbgl&raw=1",
              ]}
            />
            <WorkItem
              title="Kinvey"
              info="<b>Mbaas</b>
                    <br />
                    <br />
                    A Mobile Backend as a Service (MBaaS) is a cloud-based service that helps developers build mobile app backends. A MBaaS provides a consistent way to manage backend data, and acts as a bridge between the front-end of an app and various cloud-based backends. A MBaaS is specifically for mobile apps, while a Backend as a Service (BaaS) is more traditional and is used for web-based apps.
                    <br />
                    Kinvey handles all the server-side components needed for mobile apps to work, such as: Databases, Push notifications, API services, Authentication, Hosting, and File storage. I used it for a number of projects through its low code and no code integrations.
                    <br />
                    <br />
                    <b>Serverless</b>
                    <br />
                    <br />
                    Kinvey provides a couple of ways to write server-side code for your mobile, web, or chatbot apps: Business Logic and Flex. Both enable you to focus on the functional business logic of an application while Kinvey handles the work of receiving, parsing, and routing requests, connecting to and querying data stores.
                    <br />
                    I used Kinvey Flex’s data integration services, authentication services, and other functions to create Node.js projects and deploy them either on a Kinvey runtime.
                    This approach has the benefit of having access to unlimited NPM libraries, including bridges to proprietary solutions like Oracle in case you choose to run it outside of the Kinvey runtime. Other benefits include compatibility with continuous integration and support for local testing
                    <br />
                    <br />
                    <b>NativeScript</b>
                    The official NativeScript website: https://nativescript.org/
                    <br />
                    <br />
                    NativeScript is an open-source framework that allows you to build native mobile apps for iOS and Android using JavaScript, or a language that compiles to JavaScript like TypeScript.
                    <br />
                    While working at Progress I used NativeScript in tandem with other mobile languages to build custom mobile solutions for clients."
              imgs={[
                "https://www.dropbox.com/scl/fi/dym2h89ql8qc6eq1zacgm/lowcode.JPG?rlkey=onivqnr1jq5hj3lngdyj2233k&st=jh06yqan&raw=1",
                "https://www.dropbox.com/scl/fi/2gsz1bxljuuekvkzpfkcd/architecture.png?rlkey=if5r0jugm9m1zia238pbixgr1&st=ddtlietr&raw=1",
                "https://www.dropbox.com/scl/fi/emlo541n332i9j0cjkddd/nativescript.png?rlkey=x34u48wbrdns094xyv7gn3tx0&st=d9xk6ur2&raw=1",
              ]}
            />
            <WorkItem
              title="Sitefinity"
              info="<b>CMS</b>
                    <br />
                    <br />
                    Sitefinity goes beyond basic website creation. It integrates with marketing tools and allows you to manage your content and campaigns across multiple channels, like social media and email. It also allows you to personalize the user experience by tailoring content and offers to individual visitors based on their preferences and behavior.
                    Additionally, it’s a scalable platform that can accommodate the growth of your business and website traffic. 
                    <br />
                    Sitefinity’s user-friendly interface, efficient workflows, marketing tools, personalization features, and scalability made it an easy product to demonstrate the benefits of. My job was to show how valuable an option for businesses looking to create and manage effective digital experiences it was through custom POCs and demos.
                    <br /><br />
                    <b>Insight</b>
                    <br /><br />
                    Sitefinity Insight is a companion platform to Sitefinity CMS, but with a specific focus on audience intelligence and data-driven marketing. It goes beyond basic website analytics. It gathers and analyzes data from various sources to create comprehensive profiles of your website visitors. This allows you to understand their demographics, preferences, behavior patterns, and how they interact with your brand across different channels. Sitefinity Insight also tracks the performance of your marketing campaigns across channels. It can set up alerts to notify you of any significant changes in user behavior or campaign performance.
                    <br />
                    Sitefinity Insight transforms Sitefinity CMS from a content management tool to a data-driven marketing platform. I not only used this as part of my POCs, but also as a Technical Marketing Engineer I managed the installation and personalization of the service for a few of Progress’s production websites. "
              imgs={[
                "https://www.dropbox.com/scl/fi/vv6d34ghg4x25qznb8pfd/sitefinity.png?rlkey=peedwx9ghnm1g6gx9nz1ubw5l&st=32cz4o6h&raw=1",
                "https://www.dropbox.com/scl/fi/h01bea1qrh3st6xfx5b3v/cms.png?rlkey=7j09y27a1nv6lmlw642utu5mf&st=3ab59yeu&raw=1",
              ]}
            />
            <WorkItem
              title="MOVEit"
              info="MOVEit is a versatile file transfer solution developed by Progress, to securely and efficiently transfer files, especially those containing sensitive data. It offers robust encryption and authentication mechanisms to protect data during transmission, ensuring compliance with industry regulations like HIPAA, GDPR, and PCI DSS. It also provides automation capabilities, allowing users to schedule file transfers and define workflows to streamline processes.
<br />
<br />
I used MOVEit to integrate with other applications and systems to integrate secure data was transferred between various business environments. Its APIs are easy to incorporate into existing workflows, making it easy to add security to vulnerable applications."
              imgs={[
                "https://www.dropbox.com/scl/fi/w4mjzv6yzm7jyh0qkc2en/moveit.png?rlkey=b8w3dvq6u6hgulgdcx79bxo3b&st=rc5irsns&raw=1",
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
              title="Content Generation"
              info="<b>Article: Personalized Web Portals</b>
<br />
<br />
I wrote an article among other blog posts and written content, that was published in Release.nl. It is about the best practices for building a personalized web portals.
The COVID-19 pandemic accelerated the need for organizations to adopt digital solutions, particularly web portals, to serve their users effectively. However, building a successful web portal requires careful consideration of various factors, including security, accessibility, and personalization.
<br />
Organizations must prioritize user experience by ensuring a secure and responsive design, while also complying with relevant laws and regulations. This involves implementing strong security measures, using modern tools for data validation and optimization, and focusing on accessibility for all users. Additionally, personalization is crucial for delivering tailored content and improving customer relationships. By addressing these key aspects, organizations can create effective web portals that meet the evolving needs of their users and contribute to overall business success.
<br />
<br />
<b>Social Media</b>
<br />
<br />
A developer advocate on social media typically plays the role of a brand ambassador and community builder. I engaged with developers and technical professionals to promote Cross Product Integration at Progress. I kept the community informed about new features, releases, and updates to their company's products.
<br />
While offering guidance to developers I produced blog posts, tutorials, videos, and other resources in forums, discussion boards, and social media groups to build relationships and foster a sense of community. I also hosted webinars, and live streams to connect with developers. Working directly with end users it is important to collect feedback to help improve the product.
<br />
I love building a strong and engaged community around through the strength of the products I am working with. I can help drive awareness, adoption, and loyalty among your target audience by providing valuable content, support, and fostering connections on social media."
              imgs={[
                "https://www.dropbox.com/scl/fi/c1yy2mda22vowtjc2282u/Screenshot-2024-03-09-at-22.57.06.png?rlkey=4xpu7zu9t54601tj22jpq3i57&st=xa39ouxz&raw=1",
              ]}
            />
            <WorkItem
              title="Cross Platform Integrations SME"
              info="<b>Technical Evangelism</b>
<br />
<br />
As a technical evangelist at Progress for Cross Product Integration, I bridged the gap between Progress's technical teams and the target market. Passionate about technology and deeply knowledgeable about cloud technology, I aimed to promote and educate potential customers about the value of Progress’s platforms and tools.
I achieved this through various responsibilities: product evangelism, technical education, community engagement, feedback collection, public speaking, and technical support. By acting as a brand ambassador, I helped drive adoption of Progress services to developers.
<br />
<br />
<b>Conferences / webinars / workshops</b>
<br />
<br />
As a technical SME who has frequently attended conferences, I've had the opportunity to share my expertise with a wide audience. I've delivered presentations on various topics, participated in thought-provoking panel discussions, and conducted hands-on workshops to teach others practical skills.
<br />
Networking has been a valuable aspect of my conference experiences. I've connected with colleagues, industry leaders, and potential clients, forging strong relationships and exchanging ideas. By answering attendees' questions and providing guidance, I've helped them understand complex technical concepts and make informed decisions.
<br />
As a technical SME, I've created a variety of content to share my expertise and connect with my audience. I've developed infographics, videos, and slideshows to visually represent complex concepts. To engage with my audience more interactively, I've created online courses, webinars, and podcasts. I've also participated in online communities and forums to answer questions and connect with other experts. By sharing this diverse content, I've been able to position myself as a thought leader, build my personal brand, and attract new opportunities."
              imgs={[
                "https://www.dropbox.com/scl/fi/pnukvkcz0xofww9x4jbv8/conference.png?rlkey=s24s6xfyjxk44gui2heg5hq3z&st=k1qmtc2x&raw=1",
                "https://www.dropbox.com/scl/fi/lqh68al64p9ynbyzt47u9/workshop.png?rlkey=i3og6w6v1e8w3kckxc0w3db0f&st=foqzdnst&raw=1",
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
          <div className="catLabel">Data Analytics</div>

          <div className="minititle about" name="analytics">
            Data Platforms and Tools
          </div>
          <span className="litems">
            <WorkItem
              title="SQL"
              info="<b>SQL</b>
<br />
<br />
I have used SQL in most of the applications i have built to store and manipulate data in databases.
<br /><br />
<b>Snowflake</b>
<br /><br />
I interned at Block as Data Analyst for hardware marketing team. One of my main focuses was to find trends and impact within a data warehouse in Snowflake.
<br />Snowflake is a powerful cloud-based data warehousing and analytics platform that offers a wide range of capabilities for data analysts.
<br />It provides a highly scalable and secure environment for storing large amounts of data. Snowflake also supports loading data from a variety of sources, including files, databases, and applications. I used SQL on Snowflake to perform complex queries and analysis on large datasets for marketing campaign analysis.
<br />
<br />
<b>Oracle DB & MySQL</b>
<br />
<br />
Oracle Database and MySQL are a powerful relational database management systems that offer a comprehensive set of features for managing and storing data. They are widely used by organizations of all sizes due to their reliability, performance, and scalability.
<br />
They both integrate seamlessly with other Oracle products and third-party applications, enabling organizations to build comprehensive data-driven solutions.
<br />
As a Solutions Engineer my job was to integrate Oracle Database or MySQL into on-premises, in the cloud, and in a hybrid environments. They seamlessly integrate with OCI, providing a comprehensive cloud platform for database management and scaling."
              imgs={[
                "https://www.dropbox.com/scl/fi/c3pqpemq1r0a6m0qgmjd2/snowflake.webp?rlkey=8l1u2t1n5cgwy2i0uxvmnqfc8&st=i1wv1qxq&raw=1",
                "https://www.dropbox.com/scl/fi/f9jjg3a0fr04szwgky4o9/oracle-database.png?rlkey=41wf9v00k7868wnp4pyukxy9b&st=kz49abt9&raw=1",
                "https://www.dropbox.com/scl/fi/5gtl0jy3xzcsv874k7j35/mysql.png?rlkey=uhbpmk7vxkdoeepa1t3quc5tn&st=l9g9xnd6&raw=1",
              ]}
            />
            <WorkItem
              title="Looker"
              info="As a marketing analyst, I found Looker to be an invaluable tool. It helped me centralize data from various sources, providing a unified view of marketing performance. I was able to access real-time data to make informed decisions quickly.
<br />
<br />
I created custom dashboards to visualize specific marketing metrics and trends, and effectively communicated insights to stakeholders through compelling visualizations. Looker also enabled collaboration with teams across the organization.
<br />
<br />
I explored data to uncover hidden patterns and trends, segmented customers to tailor marketing campaigns, and measured the effectiveness of marketing channels using attribution modeling. I conducted A/B testing to evaluate different marketing strategies and even used predictive analytics to forecast future trends."
              imgs={[
                "https://www.dropbox.com/scl/fi/23nvtygrz9916zqdvfz8p/looker.jpg?rlkey=iv3wrgjy2cpzfkm7ytmlsjvzo&st=ac4yvgrh&raw=1",
                "https://www.dropbox.com/scl/fi/pb5m9kbe6stirmtplyv0s/looker-dashboard.webp?rlkey=vphxrti6xnabn1vj9hbe39gdp&st=jui9nw2q&raw=1",
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
              title="API Integrations"
              info="API integrations can significantly enhance business operations by connecting different software systems and enabling data sharing.
<br />
<br />
I possess deep knowledge of API technologies, protocols, and best practices. I can navigate complex integration scenarios, ensuring compatibility and optimal performance. By streamlining the process, I can save businesses time and money by leveraging my experience and established methodologies. 
<br />
<br />
Integration projects can involve risks such as data breaches, system failures, or performance issues. I can help identify and address potential risks, minimizing disruptions to business operations. Many industries have specific regulations and security requirements for data handling and sharing. I ensure that every API adheres to these standards, protecting sensitive information. Every integration should also be designed and implemented to accommodate future expansion because businesses often need to scale their API integrations as their operations grow."
              imgs={[
                "https://www.dropbox.com/scl/fi/budhr3mwialqke4tj019j/api.png?rlkey=bn6yvi28moi987rdxsz7wbjay&st=l6tj59qi&raw=1",
              ]}
            />
            <WorkItem
              title="Marketing Automation"
              info="Marketing automation can significantly streamline and enhance marketing efforts by automating repetitive tasks, personalizing campaigns, and gaining valuable insights. I can help businesses develop a comprehensive marketing automation strategy that aligns with their overall business goals and objectives. With my experience with numerous marketing automation platforms I can evaluate options based on business needs, budget, and scalability.
<br />
<br />
Integrating marketing automation systems with other business applications is crucial for a seamless workflow and my specialty. The new platform will generate valuable data that businesses can to measure performance, identify trends, and make data-driven decisions. I am also available to provide ongoing support and optimization.
<br />
<br />
Hiring me to architect your a marketing automation operations can offer numerous benefits, from strategic guidance and platform selection to campaign optimization and data analysis. By leveraging my expertise, businesses can effectively implement and utilize marketing automation to drive growth, improve customer engagement, and achieve their marketing objectives."
              imgs={[
                "https://www.dropbox.com/scl/fi/egehza4lzlh6kk3tgndsr/marketing.png?rlkey=6gsdhq8ottbo2cwubanvpwcnw&st=qvy85uh5&raw=1",
              ]}
            />
            <WorkItem
              title="UI / UX Development"
              info="With every solution I make I first try and understand user needs, preferences, and behaviors. This analysis is used to create applications that resonate with the target audience. A well-designed UI/UX makes it easy for users to navigate and interact with your product. I can create visually stunning interfaces that align with your brand identity. A consistent user experience across different platforms and devices is essential for building brand loyalty.
<br />
<br />
I have designed and developed a number of front end experiences and  can provide numerous benefits, from staring with a user-centric approach to improving conversion rates and building a competitive advantage. By investing in UI/UX design, you can create digital products that are compelling and drive growth."
              imgs={[
                "https://www.dropbox.com/scl/fi/8t5fbhbi9031uhcsag694/uiux.png?rlkey=i9vwlfoydy4gawyr843owfg60&st=jy6pyubf&raw=1",
              ]}
            />
            <WorkItem
              title="Workshops / Training"
              info="One of my favorite things to do is teach other people about a new technology and showing how it can improve their lives. I have developed a comprehensive and engaging curriculum that cover relevant topics, practical exercises, and hands-on activities all around digital transformation. I can ensure that all employees in a business are aligned with industry best practices and trends. Effective facilitation is crucial for successful workshops and training. Not only should the coordinator have the skills to create a conducive learning environment, manage discussions, and encourage active participation but they should be engaging and I am so much fun.
<br />
<br />
I can design and implement technical software workshops and training to enhance the effectiveness of your learning initiatives, improve employee skills, and drive organizational success."
              imgs={[
                "https://www.dropbox.com/scl/fi/fbu8p3cfmp9z17y1b633l/workshops.png?rlkey=3it5eu1vcxsjokicnuq15k18d&st=t462m8q0&raw=1",
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
                "https://www.dropbox.com/scl/fi/pxwwu0ykl4gsy2siao5co/rit.png?rlkey=f9rya1ottxebx08domerb7o3z&st=9m7xtzsp&raw=1",
                "https://www.dropbox.com/scl/fi/tszvlwmstxdjk39nz2qzp/cbs.png?rlkey=5whquh0tsvhi5j6nnfbzjrozd&st=96dhkyi9&raw=1",
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
