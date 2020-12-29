import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../images/profile.jpg';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className='office-container'> 
        <div className='grey-container about'>
        <Row>
          <Col>
            <div>
              <img className='profile-pic' src={Profile} alt='damia.smith.profile.jpg' height={200} />
            </div>
            <h2>About Me</h2>
            <p>
              {
                resumeData.aboutme
              }
            </p>
          </Col>
        </Row>
        </div>
      </section>
    );
  }
}