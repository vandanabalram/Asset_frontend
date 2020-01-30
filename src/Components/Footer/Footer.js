import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div  >
        <footer class="page-footer font-small blue footer" >
          <div id="one" class="footer-copyright text-center py-3"> <b>© 2020 Copyright:</b>
            <a id="two" className="ref" href="https://mdbootstrap.com/education/bootstrap/"> AtharvaTechnologies.com</a>
            <div className="right">
              <span><a href="#"><SocialIcon url="http://facebook.com/jaketrent" /></a></span>
              <span><a class="icon" href="#"><SocialIcon url="http://instagram.com/jaketrent" /></a></span>
              <span><a class="icon" href="#"><SocialIcon url="http://twitter.com/jaketrent" /></a></span>
              <span><a class="icon" href="#"><SocialIcon url="http://linkedin.com/jaketrent" /></a></span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;