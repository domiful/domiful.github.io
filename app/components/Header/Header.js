import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.png';
import arrow from './images/arrow.svg'
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if(this.state.isToggleOn){
      document.getElementsByClassName("router-link").forEach(element => {
        console.log('poop');
        element.style.display = "block";
      });
    }

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
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

  render() {
    return (
      <div>
      <div className="header" onClick={this.handleClick}>
        <a href="https://domiful.github.io">
          <img src={Logo} alt="simple logo" />
        </a>
        <span>
          <div className="arrow end">
              <img className="aimg" src={arrow} alt="simple logo" />
              <img className="aimg" src={arrow} alt="simple logo" />
              <img className="aimg" src={arrow} alt="simple logo" />
              <img className="aimg" src={arrow} alt="simple logo" />
              <img className="aimg" src={arrow} alt="simple logo" />
              <img className="aimg" src={arrow} alt="simple logo" />
          </div>
          <div className="nav-bar" onScroll={(e)=>{this.scrolled()}}>
            <div>
              <Link className="router-link about selected" to="/">
                About
              </Link>
              <Link className="router-link dev" to="/features">
                Work
              </Link>
              <Link className="router-link contact" to="/features">
                Contact
              </Link>
            </div>
          </div>
        </span>
        
      </div>
      <div id="header-border"><div> &nbsp;</div></div>
      </div>
    );
  }
}

export default Header;
