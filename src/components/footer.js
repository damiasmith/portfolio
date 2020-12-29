import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer className='footer'>
        <Navbar className="justify-content-center social" fixed="bottom" >
          <Row>
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=> {
                return(
                  <Nav.Item className="social-links">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={item.className} size="2x" className='icon'/>
                    </a>
                  </Nav.Item>
                )
              })
            }
          </Row>
        </Navbar>
      </footer>
    );
  }
}