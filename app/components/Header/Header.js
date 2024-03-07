import React from 'react';
import Logo from './images/Logo.png';
import arrow from './images/arrow.svg'
import './style.scss';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      about: "",
      dev: "",
      contact: ""
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.moveBar);
  }

  handleClick(event) {
    if(this.state.isToggleOn){
      document.getElementsByClassName("router-link").forEach(element => {
        element.style.display = "block";
      });
    }

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  handleSetActive(to){
    console.log(to);
  }
  scrolled(o)
    {
        console.log(document.getElementsByClassName('nav-bar')[0].scrollLeft);
        if(document.getElementsByClassName('nav-bar')[0].scrollLeft >= 70 && window.screen.width<=414){
          Array.from(document.getElementsByClassName('aimg')).forEach((e)=>{
            e.style.transform="rotate(180deg)";
          });
        }else if(document.getElementsByClassName('nav-bar')[0].scrollLeft >= 320 && window.screen.width<=768){
          Array.from(document.getElementsByClassName('aimg')).forEach((e)=>{
            e.style.transform="rotate(180deg)";
          });
        } else {
          Array.from(document.getElementsByClassName('aimg')).forEach((e)=>{
            e.style.transform="rotate(0deg)";
          });
        }
        

    }
  moveBar(){
    let head = document.getElementById("header");
    if(head && window.scrollY>50 && window.innerWidth>=414){
      //console.log(window.scrollY);
      head.classList.add("stick");
      document.getElementById("content").style.marginTop = '2em';
    }else if(head && window.scrollY<10 && window.innerWidth>=414){
      head.classList.remove("stick");
      document.getElementById("content").style.marginTop = '0';
    }

  }

  render() {
    return (
      <nav>
      <div className="header" id="header" onScroll={this.moveBar()}>
        <a href="https://domiful.github.io">
          <img src={Logo} alt="simple logo" />
        </a>
        <span>
          <div className="arrow end">
              <img className="aimg" src={arrow} alt="simple logo" />
              <img className="aimg" src={arrow} alt="simple logo" />
              <img className="aimg" src={arrow} alt="simple logo" />
          </div>
          <div className="nav-bar" onScroll={(e)=>{this.moveBar(e)}}>
            <div>
            <span className="linkBox"><Link activeClass="selected"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-200}
                duration={500}
                className="router-link about" to="about">
                About
              </Link></span>
              <span className="linkBox"><Link activeClass="selected"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-200}
                duration={500}
                className="router-link dev" to="work">
                Work
              </Link></span>
              <span className="linkBox"><Link activeClass="selected"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                className="router-link contact" to="contact">
                Contact
              </Link></span>
            </div>
          </div>
        </span>
        
      </div>
      <div id="header-border"><div> &nbsp;</div></div>
      </nav>
    );
  }
}

export default Header;
